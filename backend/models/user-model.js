import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "User",
    enum: ["User, Admin"],
  },
  profilePicture: String,
  job: String,
  xp: Number,
  credits: Number,
});

export const userModel = mongoose.model("User", userSchema);
