import { v4 as uuidv4 } from "uuid";
import Session from "../models/sessionModel.js";

export const startSession = async (req, res) => {
  try {
    const uniqueId = uuidv4();
    const userurl = `${process.env.FRONTEND_URL}/session/${uniqueId}`;

    const newSession = await Session.create({
      type: "admin",
      unique_id: uniqueId,
      userurl,
    });

    res.status(201).json({
      success: true,
      message: "Session created successfully",
      data: newSession,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getSessionById = async (req, res) => {
  try {
    const uniqueId = req.params.unique_id;
    const session = await Session.findOne({ unique_id: uniqueId });
    if (!session) {
      return res
        .status(404)
        .json({ success: false, message: "Session not found" });
    }
    res.status(200).json({ success: true, data: session });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
