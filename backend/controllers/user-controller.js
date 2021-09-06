import { userModel as User } from "../models/user-model";
import { generateToken } from "../utils/genereate-token";

/*
Description:  get user profile
Route:   POST  /api/auth/profile
Access:  ADMIN
*/

const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (user) {
      res.status(200).json({
        userId: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        xp: user.xp,
        credits: user.credits,
        profilePicture: user.profilePicture,
        job: user.job,
      });
    } else {
      res.status(404).json({ message: "User not found! ⛔⛔⛔" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/*
Description:  update user profile
Route:   PUT  /api/auth/profile
Access:  ADMIN
*/

const updateUserProfile = async (req, res) => {
  const userFromDatabase = await User.findById(req.user._id);
  if (userFromDatabase) {
    user.username = req.body.username || userFromDatabase.username;
    (user.email = req.body.email || userFromDatabase.email),
      (user.password = req.body.password || userFromDatabase.password);
    user.profilePicture =
      req.body.profilePicture || userFromDatabase.profilePicture;

    const updatedUser = await userFromDatabase.save();
    res.status(200).json({
      userId: updatedUser._id,
      username: updatedUser.username,
      email: updatedUser.email,
      role: updatedUser.role,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404).json({ message: "User not found ❗⛔" });
  }
};

/*
Description:  update user profile
Route:   GET  /api/auth
Access:  ADMIN
*/

const getAllUsers = async (_, res) => {
  try {
    const users = await User.find({});
    users && res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/*
Description:  delete a user
Route:   GET  /api/auth.:id
Access:  ADMIN
*/

const deleteUser = async (req, res) => {
  try {
    const userFromDatabase = await User.findById(req.params.id);
    if (userFromDatabase) {
      await userFromDatabase.remove();
      res
        .status(200)
        .json({ message: "User has been successfully deleted ! ✅✅" });
    } else {
      res.status(404).json({ message: "User not found ! ⛔⛔" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/*
Description:  get user by id
Route:   GET  /api/auth/:id
Access:  ADMIN
*/

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found ! ⛔ " });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  getUserProfile,
  updateUserProfile,
  getAllUsers,
  deleteUser,
  getUserById,
};
