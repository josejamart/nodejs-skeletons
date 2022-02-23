import { UserRepository } from "@user/domain/user-repository";

export class GetUsersUserCase {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository){
    this.userRepository = userRepository; 
  }
  
  run() {
    return this.userRepository.findAll();
  }
}
