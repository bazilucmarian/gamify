import express from "express";
import {
  getAllShoppingItemsFromCart,
  addItemToShoppingCart,
  deleteItemFromShoppingCart,
} from "../controllers/shopping-cart-controller";
import { verifyToken } from "../middlewares/auth-jwt";

const router = express.Router();

router.get("/", verifyToken, getAllShoppingItemsFromCart);
router.post("/:productId", verifyToken, addItemToShoppingCart);
router.delete("/:productId", verifyToken, deleteItemFromShoppingCart);

export default router;
