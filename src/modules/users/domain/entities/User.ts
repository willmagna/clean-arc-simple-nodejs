export class User {
  constructor(
    public readonly name: string,
    public readonly email: string,
  ) {
    this.validate();
  }

  private validate(): void {
    if (!this.name || this.name.trim().length < 2) {
      throw new Error("Name must have at least 2 characters");
    }

    if (!this.email || !this.email.includes("@")) {
      throw new Error("Invalid email");
    }
  }
}
