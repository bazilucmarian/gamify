import { userModel as User } from "../models/user-model";
import { userChallengesModel } from "../models/user-challenges-model";
import { shoppingCartModel } from "../models/shopping-cart-model";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/genereate-token";

async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

async function matchPassword(plainPassword, hashedPassword) {
  return await bcrypt.compare(plainPassword, hashedPassword);
}

/*
Description:  Auth user & get token
Route:   POST  /api/auth/login
Access:  PUBLIC
*/

const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(401).json({ message: "Email is incorrect ! ⛔⛔" });
    user &&
      (await matchPassword(req.body.password, user.password)) &&
      res.status(200).json({
        message: "ceva",
        userId: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        profilePicture: user.profilePicture,
        job: user.job,
        xp: user.xp,
        credits: user.credits,
        token: generateToken(user._id),
      });

    !(await matchPassword(req?.body?.password, user.password)) &&
      res.status(401).json({ message: "Password is incorrect ! ⛔⛔" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/*
Description:  register new user
Route:   POST  /api/auth/register
Access:  PUBLIC
*/

const registerUser = async (req, res) => {
  try {
    const userExist = await User.findOne({ email: req.body.email });
    userExist &&
      res.status(400).json({ message: "User already exists! ❗❗❗" });

    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: await hashPassword(req.body.password),
      profilePicture: req.body.profilePicture.url,
      job: req.body.job,
    });

    if (newUser) {
      res.status(200).json({
        userId: newUser._id,
        username: newUser.username,
        email: newUser.email,
        role: newUser.role,
        profilePicture: newUser.profilePicture,
      });
      await userChallengesModel.create({
        userId: newUser._id,
        challenges: [],
      });
      await shoppingCartModel.create({
        userId: newUser._id,
        shoppingItems: [],
      });
    } else {
      res.status(400).json({ message: "Registration Failed ❗❗❗" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { loginUser, registerUser };
