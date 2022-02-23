import { container } from "@shared/infra/inversify/context-manager";
import { FindUserUserCase, GetUsersUserCase } from "@user/application";
import { decorate, inject, injectable, interfaces } from "inversify";
import { Connection } from "typeorm";
import { UserRepository } from "../typeorm/repository";
import { TYPES } from "./types";
import {TYPES as SHARED_TYPES } from '@shared/infra/inversify/types';
import {UserRepository as UserRepositoryAdapter} from "@user/domain/user-repository";

decorate(injectable(), UserRepository);

decorate(injectable(), FindUserUserCase);
decorate(inject(TYPES.UserRepository), FindUserUserCase,0);

decorate(injectable(), GetUsersUserCase);
decorate(inject(TYPES.UserRepository), GetUsersUserCase, 0);

container.bind<UserRepositoryAdapter>(TYPES.UserRepository).toDynamicValue((context: interfaces.Context) => {
        return context.container.get<Connection>(SHARED_TYPES.CONNECTION).getCustomRepository(UserRepository)
});

container.bind<FindUserUserCase>(TYPES.FindUserUserCase).to(FindUserUserCase);
container.bind<GetUsersUserCase>(TYPES.GetUsersUserCase).to(GetUsersUserCase);