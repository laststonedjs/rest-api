import mongoose from "mongoose"
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