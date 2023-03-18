import { instanceToInstance } from "class-transformer";
import { Request, Response } from "express";
import { createUserService } from "../../services/users/createUser.service";

const createUserController = async (req: Request, res: Response) => {
  const data = req.body;
  console.log(data);
  const createdUser = await createUserService(data);
  return res.status(201).json(instanceToInstance(createdUser));
};

export { createUserController };
