import express from "express";
import {
  getUserProfile,
  updateUserProfile,
  getAllUsers,
  deleteUser,
  getUserById,
} from "../controllers/user-controller";
import { verifyToken, adminProtect } from "../middlewares/auth-jwt";

const router = express.Router();

router.get("/", verifyToken, adminProtect, getAllUsers);
router.get("/profile", verifyToken, adminProtect, getUserProfile);
router.get("/:id", verifyToken, getUserById);
router.put("/:id", verifyToken, adminProtect, updateUserProfile);
router.delete("/:id", verifyToken, adminProtect, deleteUser);

export default router;
