import { Resolver, Query, Ctx } from "type-graphql";
import { User } from "user/infra/adapters/typeorm.entity";
import { TYPES } from "../inversify/types";
import { GetUsersUserCase } from "user/application/get-users.usecase";
import { GraphqlContext } from "shared/infra/graphql";

@Resolver()
export class UserResolver {
  @Query(() => [User])
  users(@Ctx() ctx: GraphqlContext) {
    return ctx.container?.get<GetUsersUserCase>(TYPES.GetUsersUserCase).run();
  }
}