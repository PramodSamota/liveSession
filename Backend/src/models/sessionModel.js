import mongoose from "mongoose";
import { Schema } from "mongoose";

const sessionSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
      enum: ["admin", "student"],
    },
    unique_id: {
      type: String,
      required: true,
      unique: true,
    },
    userurl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Session = mongoose.model("session", sessionSchema);
export default Session;
