import express from "express";
import mongoose from "mongoose"
import bodyParser from "body-parser";
import cors from "cors";
// routes
import teamAndPlayerRoutes from "../rest-api/routes/index.js"
// models
import Player from "./models/Player.js";
import Team from "./models/Team.js";

// import controllers from "../rest-api/controllers";

const app = express() // initialize app
const router = express.Router();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// middleware
app.use("/api", teamAndPlayerRoutes);

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

    // Putting all founded teams id's in basketballdb array
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


router.post("/api/team", (req, res) => {
  const resource = req.params.resource;
  const controller = teamAndPlayerRoutes[resource];

  if (teamAndPlayerRoutes == null) {
    res.status(404).json('Something went wrong. Invalid resource.')
    return
  }

  controller.post(req.body)
    .then(data => {
      res.json({
        confirmation: 'success',
        data: data
      })
    })
    .catch(err => {
      res.json('Invalid post.')
    })
})