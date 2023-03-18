import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";

const listReservasbyUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    id: id,
  });

  return user;
};

export { listReservasbyUserService };
