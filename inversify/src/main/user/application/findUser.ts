import { UserRepository } from "@user/domain/user-repository";

export class FindUserUserCase {
  private userRepository: UserRepository;
  
  constructor(userRepository: UserRepository){
    this.userRepository = userRepository; 
  }

  run(firstName: string, lastName: string) {
    return this.userRepository.findByName(firstName, lastName);
  }
}
