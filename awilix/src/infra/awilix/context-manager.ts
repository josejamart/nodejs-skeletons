import { asClass, createContainer, Lifetime } from "awilix";

export const container = createContainer();

// Load our modules!
container.loadModules([
    'dist/usecases/**/*.js',
  ], {
    // We want to register `UserService` as `userService` -
    // by default loaded modules are registered with the
    // name of the file (minus the extension)
    formatName: 'camelCase',
    // Apply resolver options to all modules.
    resolverOptions: {
      // We can give these auto-loaded modules
      // the deal of a lifetime! (see what I did there?)
      // By default it's `TRANSIENT`.
      lifetime: Lifetime.SINGLETON,
      // We can tell Awilix what to register everything as,
      // instead of guessing. If omitted, will inspect the
      // module to determinw what to register as.
      register: asClass
    }}
  );

  
