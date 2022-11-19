import { Router } from "express";
import { UserController } from "../user/user";

const router = Router();
const userController = new UserController();

router.route("/user").get(userController.get).post(userController.create);

export default router;
