import { Router } from "express";
import { PasswordController } from "../passwords/password";

const router = Router();
const passwordController = new PasswordController();

router
  .route("/password")
  .patch(passwordController.add)
  .delete(passwordController.delete);

export default router;
