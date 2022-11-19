import express from "express";

const router = express.Router();

router.get("/ping", (req, res) => {
  return res.send("pong");
});

export default router;
