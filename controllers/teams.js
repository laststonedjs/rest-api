import mongoose from "mongoose";
import Team from "../models/Team.js"

export const getTeams = async (req, res) => {
  try {
    const teams = await Team.find();

    console.log(teams);

    res.status(201).json(teams);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const getTeamById = async (req, res) => {
  const { id: _id } = req.params;
  const team = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No team with that id');
  const updatedTeam = await Team.findByIdAndUpdate(_id, { ...team, _id }, { new: true });

  res.json(updatedTeam);
}