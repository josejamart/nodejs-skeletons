import { container } from "@infra/awilix/context-manager";
import { WithMetrics } from "@infra/datadog/withMetrics";
import { WithEvents } from "@infra/eventEmitter/withEvents";
import { FindUserUserCase } from "@usecases/user/findUser";
import { GetUsersUserCase } from "@usecases/user/getUsers";
import { useCase, useCaseRun } from "@usecases/user/useCaseWithMetrics";
import { useCaseWithEventRun, useCaseWithEvent } from "@usecases/user/useCaseWithEvents";
import { asClass, asFunction, asValue } from "awilix";

container.register('findUserUserCase', asClass(FindUserUserCase));
container.register('getUsersUserCase', asClass(GetUsersUserCase));
container.register<useCaseRun>('useCase', asFunction(useCase).singleton());
container.register<useCaseWithEventRun>('useCaseWithEvent', asFunction(useCaseWithEvent));
container.register('withMetrics', asFunction(WithMetrics));
container.register('withEvents', asFunction(WithEvents)); 
container.register('logger', asValue(console));
