import express from "express";
import { protect } from "../middleware/auth.js";
import admin from "../middleware/admin.js";
import {
  getAllUsers,
  getUserById,
  updateUserProfile,
} from "../controller/userController.js";

const router = express.Router();

// Admin: get all users
router.get("/", protect, admin, getAllUsers);

// Admin: get one user by ID
router.get("/:id", protect, admin, getUserById);

// Regular user: update own profile
router.put("/update-profile", protect, updateUserProfile);

export default router;
