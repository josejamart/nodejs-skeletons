import "reflect-metadata";
import { container } from "@infra/awilix/context-manager";
import { asFunction } from "awilix";

import { createConnection } from "typeorm";

container.register({
  connection: asFunction(async () => await createConnection()).singleton(),
});
