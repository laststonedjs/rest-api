import express from "express";
import mongoose from "mongoose"
import bodyParser from "body-parser";
import cors from "cors";
// routes
import basketRoutes from "../rest-api/routes/index.js"
// models
import Player from "./models/Player.js";
import Team from "./models/Team.js";


const app = express() // initialize app

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// middleware
app.use("/api", basketRoutes);

const db = "basketballdb";
const uri = `mongodb://localhost:27017/${db}`;
const PORT = 4000;


// establish connection with MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
  .catch((error) => console.log(error));


// Finding teams by name in the db
let teamsdb = [];

Team.find()
  .then(data => {
    console.log("Team info: ")
    console.log(data);

    // Putting all founded teams id's in array 'basketballdb' - (name of database) 
    data.map((d, k) => {
      teamsdb.push(d._id);
    })
    console.log(teamsdb);

    // Getting players who are enrolled in any
    // team by filtering players, whose playerId matches with any id in
    // teamsdb (temporary) array
    Player.find()
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
  });
