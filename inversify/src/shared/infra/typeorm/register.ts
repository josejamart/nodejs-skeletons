import { Container,interfaces } from "inversify";

import { Connection, createConnection } from "typeorm";
import { TYPES } from "./types";

export const registerTypeorm = async (container: Container) => {
    const dbConnection = await createConnection();
    container.bind<interfaces.Factory<Connection>>(TYPES.CONNECTION).toFactory<Connection>(() => {
        return () => {
            return dbConnection;
        };
    });
};


