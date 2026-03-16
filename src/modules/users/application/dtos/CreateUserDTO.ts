export interface CreateUserInputDTO {
  name: string;
  email: string;
}

export interface CreateUserOutputDTO {
  message: string;
  user: {
    name: string;
    email: string;
  };
}
