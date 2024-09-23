import express from "express";
import {
  createUser,
  getUsers,
  loginUser,
  logoutUser,
} from "../controller/userController.js";

const router = express.Router();

router.post("/user/register", createUser);
router.get("/user", getUsers);
router.post("/user/login", loginUser);
router.post("/user/logout", logoutUser);

export default router;
