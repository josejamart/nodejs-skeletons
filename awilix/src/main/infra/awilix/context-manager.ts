import { asClass, createContainer } from "awilix";
import { join } from "path";

export const container = createContainer();

// Load our modules!
container.loadModules([
   join(__dirname, 'dist/main/infra/awilix/resolvers/**/*.js'),
  ], {
    // We want to register `UserService` as `userService` -
    // by default loaded modules are registered with the
    // name of the file (minus the extension)
    formatName: 'camelCase',
    resolverOptions: {
      register: asClass
    }}
  );

  
