import { User } from "../../domain/entities/User.js";
import { IUserRepository } from "../../domain/repositories/IUserRepository.js";
import {
  CreateUserInputDTO,
  CreateUserOutputDTO,
} from "../dtos/CreateUserDTO.js";
import { AppError } from "../../../../shared/errors/AppError.js";

export class CreateUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(input: CreateUserInputDTO): Promise<CreateUserOutputDTO> {
    const existingUser = await this.userRepository.findByEmail(input.email);

    if (existingUser) {
      throw new AppError("User already exists", 409);
    }

    const user = new User(input.name, input.email);

    await this.userRepository.create(user);

    return {
      message: "User created successfully",
      user: {
        name: user.name,
        email: user.email,
      },
    };
  }
}
