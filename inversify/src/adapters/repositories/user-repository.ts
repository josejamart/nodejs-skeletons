import { User } from "@domain/user";

export interface UserRepository {
  findByName(firstName: string, lastName: string): Promise<User[]>;
  findAll(): Promise<User[]>;
}
