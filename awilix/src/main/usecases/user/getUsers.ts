import { UserRepository } from "../../adapters/repositories/user-repository";

interface GetUsersUseCaseProps {
  userRepository: UserRepository;
  requestId: number;
}

export class GetUsersUserCase {
  userRepository: UserRepository;
  reqId: number;
  constructor({ userRepository , requestId}: GetUsersUseCaseProps) {
    this.userRepository = userRepository;
    this.reqId = requestId;
  }

  run() {
      console.log(this.reqId);
    return this.userRepository.findAll();
  }
}
