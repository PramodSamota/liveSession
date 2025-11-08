import express from "express";
import cors from "cors";
import sessionRouter from "./routes/sessionRoute.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get("/", (req, res) => {
  res.send("Live Session API is running...");
});
//router imports
app.use("/api", sessionRouter);

export default app;
