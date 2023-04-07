import express from "express";
// handler functions
import { getPlayers, getPlayerById, createPlayerPost, updatePlayer, deletePlayer } from "../controllers/players.js";
import { getTeams, getTeamById, createTeamPost, updateTeam, deleteTeam } from "../controllers/teams.js";

const router = express.Router();

router.get("/player", getPlayers);
router.get("/team", getTeams);
router.get("/player/:id", getPlayerById);
router.get("/team/:id", getTeamById);
router.post("/player", createPlayerPost);
router.post("/team", createTeamPost);
router.put("/player/:id", updatePlayer);
router.put("/team/:id", updateTeam);
router.delete("/team/:id", deleteTeam);
router.delete("/player/:id", deletePlayer);

export default router;
