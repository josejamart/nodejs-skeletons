import { UserRepository } from "@user/domain/user-repository";
import { inject } from "inversify";
import { provide } from "inversify-binding-decorators";
import { TYPES } from "user/application/types";
import { TYPES as RepositoryTypes } from '@user/domain/types';

console.log("aqui llego")

@provide(TYPES.GetUsersUserCase)
export class GetUsersUserCase {
  @inject(RepositoryTypes.UserRepository) private userRepository: UserRepository;

  run() {
    return this.userRepository.findAll();
  }
}
