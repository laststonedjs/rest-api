import mongoose from "mongoose"
import Player from "../models/Player.js"

export const getPlayers = async (req, res) => {
  try {
    const players = await Player.find();

    console.log(players);

    res.status(201).json(players);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}