import { Container } from "inversify";
import { Connection, createConnection } from "typeorm";
import { TYPES } from "./types";

export const registerTypeorm = async (container: Container) => {
    const dbConnection = await createConnection();
    container.bind<Connection>(TYPES.CONNECTION).toConstantValue(dbConnection);
};