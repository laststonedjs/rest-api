import express from "express";
// handler functions
import { getPlayers, getPlayerById } from "../controllers/players.js";
import { getTeams, getTeamById } from "../controllers/teams.js";

const router = express.Router();

router.get("/player", getPlayers);
router.get("/team", getTeams);
router.get("/player/:id", getPlayerById);
router.get("/team/:id", getTeamById);
// router.post("/", createPost);
// router.patch("/:id", updatePost);
// router.delete("/:id", deletePost);
// router.patch("/:id/likePost", likePost);

export default router;
