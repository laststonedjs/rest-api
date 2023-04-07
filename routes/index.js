import express from "express";
// handler functions
import { getPlayers, getPlayerById, createPlayerPost } from "../controllers/players.js";
import { getTeams, getTeamById, createTeamPost } from "../controllers/teams.js";

const router = express.Router();

router.get("/player", getPlayers);
router.get("/team", getTeams);
router.get("/player/:id", getPlayerById);
router.get("/team/:id", getTeamById);
router.post("/player", createPlayerPost);
router.post("/team", createTeamPost);

export default router;
