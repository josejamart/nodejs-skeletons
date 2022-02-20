import { EntityRepository, Repository } from "typeorm";
import { User } from "../entity/user";
import { UserRepository as UserRepositoryAdapter } from "@adapters/repositories/user-repository";
import { RESOLVER } from "awilix";

@EntityRepository(User)
export class UserRepository
  extends Repository<User>
  implements UserRepositoryAdapter
{
  static [RESOLVER] = {};
  findByName(firstName: string, lastName: string) {
    return this.createQueryBuilder("user")
      .where("user.firstName = :firstName", { firstName })
      .andWhere("user.lastName = :lastName", { lastName })
      .getMany();
  }

  findAll() {
    return this.createQueryBuilder("user")
      .getMany();
  }
}
