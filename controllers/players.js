import mongoose from "mongoose";
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

export const getPlayerById = async (req, res) => {
  const { id: _id } = req.params;
  const player = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No player with that id');
  const updatedPlayer = await Player.findByIdAndUpdate(_id, { ...player, _id }, { new: true });

  res.json(updatedPlayer);
}