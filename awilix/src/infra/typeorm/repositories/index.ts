import { container } from "@infra/awilix/context-manager";
import { asFunction } from "awilix";
import { getRepository } from "typeorm";
import { User } from "../entity/user";

container.register({
  getUserRepository: asFunction(() => getRepository(User)),
});
