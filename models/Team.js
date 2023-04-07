import mongoose from 'mongoose'

const teamSchema = new mongoose.Schema({
  name: String,
  city: String,
  conference: String,
})

const Team = mongoose.model('team', teamSchema)

export default Team;