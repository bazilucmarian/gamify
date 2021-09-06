import express from "express";
import {
  getAvailableChallenges,
  updateUserChallenge,
  getInProgressOrCompletedChallenges,
  getChallengesForValidation,
} from "../controllers/user-challenges-controller";
import { verifyToken, adminProtect } from "../middlewares/auth-jwt";

const router = express.Router();

router.get("/available", verifyToken, getAvailableChallenges);
router.get(
  "/progress-completed",
  verifyToken,
  getInProgressOrCompletedChallenges
);
router.get(
  "/validation",
  verifyToken,
  adminProtect,
  getChallengesForValidation
);
router.put("/:challengeId/:userId", verifyToken, updateUserChallenge);

export default router;
