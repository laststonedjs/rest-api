import mongoose from 'mongoose'

const playerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  position: String,
  age: Number,
  team: String,
})

const Player = mongoose.model('player', playerSchema)

export default Player;