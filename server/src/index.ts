import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Database connection error", err));

app.get("/", async (req: Request, res: Response) => {
  res.json({ message: "PandaFood is running" });
});

app.get("/test", async (req: Request, res: Response) => {
  res.json({ message: "PandaFood is running" });
});

app.listen(7000, () => {
  console.log("Server is running on port 7000");
});
