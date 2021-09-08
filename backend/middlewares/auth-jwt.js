import jwt from "jsonwebtoken";
import { userModel as User } from "../models/user-model";

const verifyToken = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret");

      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed! ⛔⛔⛔");
    }
  }
  if (!token) {
    res.status(401);
    next(new Error("No token provided! ⛔"));
  }
};

const adminProtect = (req, res, next) => {
  if (req.user && req.user.role.includes("Admin")) {
    next();
  } else {
    res.status(401);
    throw new Error("You aren't authorized as an admin ⛔");
  }
};

export { verifyToken, adminProtect };
