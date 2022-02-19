import { UserRepository } from "@adapters/repositories/user-repository";

interface FindUserUseCaseProps {
  userRepository: UserRepository;
}

export class FindUserUserCase {
  userRepository: UserRepository;
  constructor({ userRepository }: FindUserUseCaseProps) {
    this.userRepository = userRepository;
  }

  run(firstName: string, lastName: string) {
    return this.userRepository.findByName(firstName, lastName);
  }
}
