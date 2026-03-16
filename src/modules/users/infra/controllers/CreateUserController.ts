import { Request, Response } from "express";
import { CreateUserUseCase } from "../../application/use-cases/CreateUserUseCase.js";

export class CreateUserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email } = req.body;

    const result = await this.createUserUseCase.execute({
      name,
      email,
    });

    return res.status(201).json(result);
  }
}
