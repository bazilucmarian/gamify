import mongoose from "mongoose";

const challengeSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    xp: {
      type: Number,
      default: 0,
    },
    credits: {
      type: Number,
      default: 0,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "available",
    },
  },
  {
    timestamps: true,
  }
);

export const challengeModel = mongoose.model("Challenge", challengeSchema);
