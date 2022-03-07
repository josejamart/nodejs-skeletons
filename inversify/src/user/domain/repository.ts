import { User } from "./model";

export interface UserRepository {
  findByName(firstName: string, lastName: string): Promise<User[]>;
  findAll(): Promise<User[]>;
}
