import { NextFunction, Request, Response } from "express";
import * as yup from "yup";
import { SchemaOf } from "yup";
import { IAddressRequest, IUserRequest } from "../interfaces/user";

const addressSchema: SchemaOf<IAddressRequest> = yup.object().shape({
  zipCode: yup.string().required().max(8, "Maximum 8 caracters"),
  state: yup.string().required(),
  city: yup.string().required(),
  road: yup.string().required(),
  number: yup.string().required(),
  complement: yup.string(),
});

const userCreateSchema: SchemaOf<IUserRequest> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  cpf: yup.string().required(),
  phone: yup.string().required(),
  birthdate: yup.string().required(),
  isSuperUser: yup.boolean(),
  isAdm: yup.boolean().required(),
  password: yup.string().required(),
  address: addressSchema,
});

const validateUserCreate =
  (schema: SchemaOf<IUserRequest>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;

      try {
        await schema.validate(data, {
          abortEarly: false,
          stripUnknown: true,
        });

        next();
      } catch (err: any) {
        return res.status(400).json({
          message: err.errors?.join(", "),
        });
      }
    } catch (err) {
      next(err);
    }
  };

export { userCreateSchema, validateUserCreate };
