import { UserRepository } from "@adapters/repositories/user-repository";
import { RESOLVER } from 'awilix'

interface FindUserUseCaseProps {
  userRepository: UserRepository;
}

export class FindUserUserCase {
  static [RESOLVER] = {};
  userRepository: UserRepository;
  constructor({ userRepository }: FindUserUseCaseProps) {
    this.userRepository = userRepository;
  }

  run(firstName: string, lastName: string) {
    return this.userRepository.findByName(firstName, lastName);
  }
}