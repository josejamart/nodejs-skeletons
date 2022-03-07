import { UserRepository } from "@adapters/repositories/user-repository";

interface FindUserUseCaseProps {
  userRepository: UserRepository;
  requestId: number;
}

export class FindUserUserCase {
  userRepository: UserRepository;
  reqId: number;
  constructor({ userRepository, requestId }: FindUserUseCaseProps) {
    this.userRepository = userRepository;
    this.reqId = requestId;
  }

  run(firstName: string, lastName: string) {
    for(let i = 0; i<10; i++){
        console.log(this.reqId);
      }
    return this.userRepository.findByName(firstName, lastName);
  }
}
