import mongoose from "mongoose";

const shoppingCartSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    shoppingItems: [
      {
        shopItemId: {
          type: String,
        },
        quantity: {
          type: Number,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const shoppingCartModel = mongoose.model(
  "ShoppingCart",
  shoppingCartSchema
);
