import { instanceToInstance } from "class-transformer";
import { Request, Response } from "express";
import { listReservasbyUserService } from "../../services/users/listProductsbyUser.service";

const listReservasbyUserController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const listReservas = await listReservasbyUserService(id);

  return res.json(instanceToInstance(listReservas));
};

export { listReservasbyUserController };
