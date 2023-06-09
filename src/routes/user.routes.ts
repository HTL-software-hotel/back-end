import { Router } from "express";
import { createUserController } from "../controllers/users/createUser.controller";
import { deleteUserController } from "../controllers/users/deleteUser.controller";
import { forgotPasswordController } from "../controllers/users/forgotPassword.controller";
import updateUserController from "../controllers/users/updateUser.controller";
import {
  userCreateSchema,
  validateUserCreate,
} from "../serializer/validateUserCreate.middeware";

import { listReservasbyUserController } from "../controllers/users/listProductsbyUser.controller";
import { listUserController } from "../controllers/users/listUser.controller";
import verifyTokenMiddleware from "../middlewares/verifyToken.middleware";
import validatedBodySerializer from "../serializer/validatedBody.serializer";

const users = Router();

const userRoutes = () => {
  users.post("", validateUserCreate(userCreateSchema), createUserController);
  users.post("/forgot-password", forgotPasswordController);
  users.get("", verifyTokenMiddleware, listUserController);
  users.get("/:id", listReservasbyUserController);
  users.delete("", verifyTokenMiddleware, deleteUserController);
  users.patch(
    "",
    verifyTokenMiddleware,
    validatedBodySerializer,
    updateUserController
  );
  return users;
};

export { userRoutes };
