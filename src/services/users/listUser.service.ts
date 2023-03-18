import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";

const listUserService = (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = userRepository.findOne({
    where: {
      id,
    },
    relations: {
      address: true,
    },
  });

  return user;
};

export { listUserService };
