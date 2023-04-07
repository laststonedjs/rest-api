import express from "express";
import mongoose from "mongoose"
import bodyParser from "body-parser";
import cors from "cors";
// routes
import teamAndPlayerRoutes from "../rest-api/routes/index.js"
// models
import Player from "./models/Player.js";
import Team from "./models/Team.js";

const app = express() // initialize app

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// middleware
app.use("/api", teamAndPlayerRoutes);

const uri = "mongodb://localhost:27017/basketballdb";
const PORT = 4000;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
  .catch((error) => console.log(error));

var teamsdb = [];

// Finding teams of name in the db
Team.find({ name: "Timberwolves" })
  .then(data => {
    console.log("Team info:")
    console.log(data);

    // Putting all founded teams id's in basketballdb array
    data.map((d, k) => {
      teamsdb.push(d._id);
    })
    console.log(teamsdb);

    // Getting players who are enrolled in any
    // team by filtering players, whose playerId matches with any id in
    // teamsdb (temporary) array
    Player.find({ firstName: { $in: teamsdb } })
      .then(data => {
        console.log("Players in Basketball Database: ")
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      })
  })
  .catch(error => {
    console.log(error);
  })