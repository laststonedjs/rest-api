import express from "express";
// handler functions
import { getPlayers } from "../controllers/players.js";
import { getTeams } from "../controllers/teams.js";

const router = express.Router();

router.get("/player", getPlayers);
router.get("/team", getTeams);
// router.post("/", createPost);
// router.patch("/:id", updatePost);
// router.delete("/:id", deletePost);
// router.patch("/:id/likePost", likePost);

export default router;
