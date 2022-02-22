import { Resolver, Query, Ctx } from "type-graphql";
import { User } from "@user/infra/typeorm/entity";

@Resolver()
export class UserResolver {
  @Query(() => [User])
  users(@Ctx() ctx: any) {
    return ctx.container.cradle.getUsersUserCase.run();
  }
}