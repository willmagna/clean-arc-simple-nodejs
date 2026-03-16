import { Router } from "express";
import { PrismaUserRepository } from "../repositories/PrismaUserRepository.js";
import { CreateUserUseCase } from "../../application/use-cases/CreateUserUseCase.js";
import { CreateUserController } from "../controllers/CreateUserController.js";

const userRoutes = Router();

const userRepository = new PrismaUserRepository();
const createUserUseCase = new CreateUserUseCase(userRepository);
const createUserController = new CreateUserController(createUserUseCase);

userRoutes.post("/", (req, res) => createUserController.handle(req, res));

export { userRoutes };
