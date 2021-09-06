import express from "express";
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
} from "../controllers/product-controller";
import { verifyToken, adminProtect } from "../middlewares/auth-jwt";

const router = express.Router();

router.get("/", verifyToken, getProducts);
router.get("/:id", verifyToken, getProductById);
router.post("/", verifyToken, adminProtect, createProduct);
router.delete("/:id", verifyToken, adminProtect, deleteProduct);
router.put("/:id", verifyToken, adminProtect, updateProduct);

export default router;
