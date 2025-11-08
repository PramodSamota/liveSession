import express from "express";
import {
  startSession,
  getSessionById,
} from "../controllers/sessionController.js";
import { Router } from "express";

const router = Router();

router.post("/start-session", startSession);
router.get("/session/:unique_id", getSessionById);

export default router;
