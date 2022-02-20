import { UserRepository } from "@adapters/repositories/user-repository";
import { TYPES } from "@usecases/types";
import { provide } from "inversify-binding-decorators";
import { inject } from "inversify";
import { TYPES as RepositoryTypes } from '@adapters/repositories/types';

@provide(TYPES.FindUserUserCase)
export class FindUserUserCase {
  @inject(RepositoryTypes.UserRepository) private userRepository: UserRepository;

  run(firstName: string, lastName: string) {
    return this.userRepository.findByName(firstName, lastName);
  }
}
