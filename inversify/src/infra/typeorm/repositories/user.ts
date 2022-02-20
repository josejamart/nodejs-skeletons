import { Connection, EntityRepository, Repository } from "typeorm";
import { User } from "../entity/user";
import { UserRepository as UserRepositoryAdapter } from "@adapters/repositories/user-repository";
import { fluentProvide } from "inversify-binding-decorators";
import { interfaces } from "inversify";
import { TYPES } from "../types";

@EntityRepository(User)
@fluentProvide(TYPES.UserRepository).onActivation((context: interfaces.Context) => {
  return context.container.get<Connection>(TYPES.UserRepository).getCustomRepository(UserRepository)
}).done()
export class UserRepository
  extends Repository<User>
  implements UserRepositoryAdapter
{
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
