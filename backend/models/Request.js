import mongoose from "mongoose";

const requestSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    propertyId: { type: mongoose.Schema.Types.ObjectId, ref: "Property" },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Request", requestSchema);
