import jwt from "jsonwebserver";
import dotenv from "dotenv";

dotenv.config();

export const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiredsIn: "30d" });
};
