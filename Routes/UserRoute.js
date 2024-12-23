import express from "express";
import { UserController } from "../Controllers/UserController.js";

const router = express.Router();

router.route("/user/login").post(UserController.login);

router.route("/user/register").post(UserController.register);

router.route("/users").get(UserController.getAllUser);

export const UserRouter = router;
