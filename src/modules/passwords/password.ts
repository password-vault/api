import userModel from "../infra/database/user";
import { Request, Response } from "express";

export class PasswordController {
  async add(req: Request, res: Response): Promise<Response> {
    const find = await userModel.findOne({ email: req.body?.email });

    for (const obj of find!.passwords) {
      if (obj?.name === req.body?.passwords?.name) return res.status(400).end();
    }

    await userModel.updateOne(
      { email: req.body?.email },
      {
        $push: {
          passwords: {
            name: req.body?.passwords?.name,
            password: req.body?.passwords?.password,
          },
        },
      }
    );
    return res.status(200).end();
  }

  async delete(req: Request, res: Response): Promise<Response> {
    await userModel.updateOne(
      { email: req.query?.email },
      { $pull: { passwords: { name: req.query?.passwordName } } }
    );

    return res.status(200).end();
  }
}
