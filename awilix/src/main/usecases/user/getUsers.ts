import { UserRepository } from "../../adapters/repositories/user-repository";

interface GetUsersUseCaseProps {
  userRepository: UserRepository;
}

export class GetUsersUserCase {
  userRepository: UserRepository;
  constructor({ userRepository }: GetUsersUseCaseProps) {
    this.userRepository = userRepository;
  }

  run() {
    return this.userRepository.findAll();
  }
}
