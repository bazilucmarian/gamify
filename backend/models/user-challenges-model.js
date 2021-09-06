import mongoose from "mongoose";

const userChallengesSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    challenges: [
      {
        challengeId: {
          type: String,
        },
        status: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const userChallengesModel = mongoose.model(
  "UserChallenges",
  userChallengesSchema
);
