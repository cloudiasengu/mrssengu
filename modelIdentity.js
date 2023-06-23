import mongoose from "mongoose";
const Schema = mongoose.Schema

const identitySchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  placeOfBirth: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  maritalStatus: {
    type: String,
    enum: ["single", "married", "divorced", "widowed"],
    required: true,
  },
  residentialAddress: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  otherInformation: {
    type: String,
  },
});

const Identity = mongoose.model("Identity", identitySchema);

export default Identity;;
