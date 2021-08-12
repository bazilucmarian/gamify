import jwt from "jsonwebtoken";
import { UserModel as User } from "../models/user-model";
import bcrypt, { genSalt } from "bcryptjs";
import { generateToken } from "../utils/genereate-token";

async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

async function matchPassword(plainPassword, hashedPassword) {
  return await bcrypt.compare(plainPassword, hashedPassword);
}

// desc:  Auth user & get token
// route:   POST  /api/auth/login
// access:  PUBLIC

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const { _id, username, email, role, profilePicture, job, xp, credits } =
    await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.status(200).json({
      userId: _id,
      username,
      email,
      role,
      profilePicture,
      job,
      xp,
      credits,
      token: generateToken(_id),
    });
  } else if (!(await user.matchPassword(password))) {
    res.status(401);
    throw new Error("Password is incorrect ! ⛔⛔");
  } else {
    res.status(401);
    throw new Error("Email doesn't exist ! ⛔⛔");
  }
};

const registerUser = async (req, res) => {
  const { username, email, password, profilePicture, job } = req.body;

  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("User already exists! ❗❗❗");
  } else {
    const newUser = await User.create({
      username,
      email,
      password: hashPassword(password),
      profileicture,
      job,
    });

    if (newUser) {
      res.status(201).json({
        userId: _id,
        username,
        email,
        role,
        profilePicture,
      });
    } else {
      res.status(400);
      throw new Error("Registration Failed ❗❗❗");
    }
  }
};
