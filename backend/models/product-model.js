import mongoose from "mongoose";
import { reviewSchema } from "./review-model";

const productSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    credits: {
      type: Number,
      required: true,
      default: 0,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      default: [],
    },
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
);

export const productModel = mongoose.model("Product", productSchema);
