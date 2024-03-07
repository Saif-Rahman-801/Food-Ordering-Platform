import express from "express";
import { createCurrentUser } from "../controllers/MyUserControllers";
const myUserRoute = express.Router();

// /api/my/user
myUserRoute.post("/", createCurrentUser);

export default myUserRoute;
