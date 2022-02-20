import { UserRepository } from "@adapters/repositories/user-repository";
import { inject } from "inversify";
import { provide } from "inversify-binding-decorators";
import { TYPES } from "@usecases/types";
import { TYPES as RepositoryTypes } from '@adapters/repositories/types';

console.log("aqui llego")

@provide(TYPES.GetUsersUserCase)
export class GetUsersUserCase {
  @inject(RepositoryTypes.UserRepository) private userRepository: UserRepository;

  run() {
    return this.userRepository.findAll();
  }
}
