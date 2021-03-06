import 'module-alias/register';
import { registerTypeorm } from '@infra/typeorm/register';
import { ApolloServer, gql } from 'apollo-server';
import { buildSchema } from "type-graphql";
import { UserResolver } from './resolvers/user';
import { container } from '@infra/awilix/context-manager';


registerTypeorm(container).then(async () => {
    const schema = await buildSchema({
        resolvers: [UserResolver]
    })

    const server = new ApolloServer({
        schema,
        context: () => ({
            container
          })
    });

    server.listen().then(({ url }: any) => {
        console.log(`🚀 Server ready at ${url}`);
    });
});