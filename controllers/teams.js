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

export const createTeamPost = async (req, res) => {
  const post = req.body;

  const newTeamPost = new Team(post);
  try {
    await newTeamPost.save();

    res.status(201).json(newTeamPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}

export const updateTeam = async (req, res) => {
  const { id: _id } = req.params;
  const team = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No team with that ID');
  const updatedTeam = await Team.findByIdAndUpdate(_id, { ...team, _id }, { new: true });

  res.json(updatedTeam);
}

export const deleteTeam = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No team with entered ID, something went wrong.');

  await Team.findByIdAndRemove(id);
  console.log('Deleted entire team!');

  res.json({ message: 'Team deleted successfully!' });
}