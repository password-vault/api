import express from "express";
import healthCheck from "./modules/routes/health-check";
import dotenv from "dotenv";
import config from "./config/config";
import mongoose from "mongoose";
import user from "./modules/routes/user";
import password from "./modules/routes/password";

dotenv.config();
const routes = [healthCheck, user, password];
const middlewares = [express.json()];

async function main() {
  const app = express();

  await mongoose.connect(config.database_url);

  app.use(middlewares);
  app.use(routes);

  app.listen(3000, () => "server running on port 3000");
}

main();
