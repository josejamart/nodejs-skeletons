import { Resolver, Query, Ctx } from "type-graphql";
import { User } from "@infra/typeorm/entity/user";

@Resolver()
export class UserResolver {
  @Query(() => [User])
  users(@Ctx() ctx: any) {
    return ctx.container.cradle.getUsersUserCase.run();
  }
}