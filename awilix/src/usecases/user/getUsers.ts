import { UserRepository } from "@adapters/repositories/user-repository";
import { RESOLVER } from 'awilix'

interface GetUsersUseCaseProps {
  userRepository: UserRepository;
}

export class GetUsersUserCase {
  static [RESOLVER] = {};
  userRepository: UserRepository;
  constructor({ userRepository }: GetUsersUseCaseProps) {
    this.userRepository = userRepository;
  }

  run() {
    return this.userRepository.findAll();
  }
}
