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

export const createPlayerPost = async (req, res) => {
  const post = req.body;
  const newPlayerPost = new Player(post);
  try {
    await newPlayerPost.save();

    res.status(201).json(newPlayerPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}

export const updatePlayer = async (req, res) => {
  const { id: _id } = req.params;
  const player = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No team with that ID');
  const updatedPlayer = await Player.findByIdAndUpdate(_id, { ...player, _id }, { new: true });

  res.json(updatedPlayer);
}

export const deletePlayer = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No player with entered ID, something went wrong.');

  await Player.findByIdAndRemove(id);
  console.log('Deleted player info!');

  res.json({ message: 'Player removed successfully!' });
}