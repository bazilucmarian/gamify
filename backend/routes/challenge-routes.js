import express from "express";
import {
  getChallenges,
  getChallengeById,
  deleteChallenge,
  createChallenge,
  updateChallenge,
} from "../controllers/challenge-controller";
import { verifyToken, adminProtect } from "../middlewares/auth-jwt";

const router = express.Router();

router.get("/", verifyToken, getChallenges);
router.get("/:id", verifyToken, getChallengeById);
router.post("/", verifyToken, adminProtect, createChallenge);
router.delete("/:id", verifyToken, adminProtect, deleteChallenge);
router.put("/:id", verifyToken, adminProtect, updateChallenge);

export default router;
