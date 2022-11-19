import userModel from "../infra/database/user";
import { Request, Response } from "express";

export class UserController {
  async get(req: Request, res: Response): Promise<Response> {
    const findOne = await userModel
      .findOne({ email: req.params?.email })
      .select("name email");
    return res.status(200).json(findOne);
  }

  async create(req: Request, res: Response): Promise<Response> {
    await userModel.create(req.body);
    return res.status(201).end();
  }
}
