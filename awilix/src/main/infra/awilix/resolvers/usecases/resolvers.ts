import { container } from "@infra/awilix/context-manager";
import { FindUserUserCase } from "@usecases/user/findUser";
import { GetUsersUserCase } from "@usecases/user/getUsers";
import { asClass } from "awilix";

container.register('findUserUserCase', asClass(FindUserUserCase));
container.register('getUsersUserCase', asClass(GetUsersUserCase));
