import User from "../models/User.js";

//  Admin: get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

//  Admin: get single user by ID
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) return res.status(404).json({ msg: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

//  Regular user: update own profile
export const updateUserProfile = async (req, res) => {
  try {
    const { name, phone, email, address } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      req.user.id, // from auth middleware
      { name, phone, email, address },
      { new: true }
    ).select("-password");

    if (!updatedUser) {
      return res.status(404).json({ msg: "User not found" });
    }

    res.json({ msg: " Profile updated successfully", user: updatedUser });
  } catch (err) {
    console.error("Update profile error:", err);
    res.status(500).json({ msg: "Server error" });
  }
};
