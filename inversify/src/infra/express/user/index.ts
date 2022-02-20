import express from 'express';
import { RequestWithContext } from '..'; 
import {TYPES} from '@usecases/types';
import { GetUsersUserCase } from '@usecases/user/getUsers';

const router = express.Router();

// define the home page route
router.get('/', async (req: RequestWithContext, res) => {
    const users = await req.container?.get<GetUsersUserCase>(TYPES.GetUsersUserCase).run();
    res.send({users})
});
  
export default router;