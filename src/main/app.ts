import express, { NextFunction, Request, Response } from "express";
import { userRoutes } from "../modules/users/infra/routes/userRoutes.js";
import { AppError } from "../shared/errors/AppError.js";

const app = express();

app.use(express.json());

app.use("/users", userRoutes);

app.use(
  (error: Error, req: Request, res: Response, next: NextFunction): Response => {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        error: error.message,
      });
    }

    return res.status(500).json({
      error: "Internal server error",
    });
  },
);

export { app };
