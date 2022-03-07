
import 'reflect-metadata';
import 'module-alias/register';
import express , {Request} from "express";
import users from './user';
import {container} from '@infra/awilix';
import { asFunction, AwilixContainer } from "awilix";
import { registerTypeorm } from "@infra/typeorm/register";

const app = express();
const port = 3000

export interface RequestWithContext extends Request{
    container?: AwilixContainer;
    }

registerTypeorm(container).then(()=>{
    app.use((req :RequestWithContext, res, next) => {
        req.container = container.createScope();
        req.container.register( {
          requestId: asFunction(() => Math.random()).scoped()
        })
        next()
      });
    
    app.use('/user', users)
    
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
});

