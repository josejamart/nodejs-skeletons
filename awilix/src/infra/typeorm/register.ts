import { asFunction, AwilixContainer, Lifetime } from "awilix";

import { createConnection } from "typeorm";
import { UserRepository } from "./repositories/user";

export const registerTypeorm = async (container: AwilixContainer) => {
    const dbConnection = await createConnection();
    container.register({
        connection: asFunction(() => dbConnection, { lifetime: Lifetime.TRANSIENT }),
    });

    // Repositories
    container.register({
        userRepository: asFunction(() => dbConnection.getCustomRepository(UserRepository), {
            lifetime: Lifetime.TRANSIENT,
        }),
    });
};


