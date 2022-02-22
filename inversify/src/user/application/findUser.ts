import { UserRepository } from "@user/domain/user-repository";
import { TYPES } from "user/application/types";
import { provide } from "inversify-binding-decorators";
import { inject } from "inversify";
import { TYPES as RepositoryTypes } from 'user/domain/types';

@provide(TYPES.FindUserUserCase)
export class FindUserUserCase {
  @inject(RepositoryTypes.UserRepository) private userRepository: UserRepository;

  run(firstName: string, lastName: string) {
    return this.userRepository.findByName(firstName, lastName);
  }
}
