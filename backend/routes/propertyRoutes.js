import express from "express";
import {
  getProperties,
  createProperty,
  updateProperty,
  deleteProperty,
} from "../controller/propertyController.js";
import { protect } from "../middleware/auth.js";
import admin from "../middleware/admin.js";

const router = express.Router();

// Public
router.get("/", getProperties);

// Admin only: create property
router.post("/", protect, admin, createProperty);

// Admin only: update property
router.put("/:id", protect, admin, updateProperty);

// Admin only: delete property
router.delete("/:id", protect, admin, deleteProperty);

export default router;
