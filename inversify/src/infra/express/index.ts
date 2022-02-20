import "reflect-metadata";
import 'module-alias/register';
import express, { Request } from "express";
import users from './user';
import { registerTypeorm } from "@infra/typeorm/register";
export * from '@usecases/index';
export * from '@infra/typeorm';
import { Container } from 'inversify';
import { container } from '@infra/inversify/context-manager';

const app = express();
const port = 3000

export interface RequestWithContext extends Request {
  container?: Container;
}

registerTypeorm(container).then(() => {
  app.use((req: RequestWithContext, res, next) => {
    req.container = container;
    next()
  });

  app.use('/user', users)

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
});
