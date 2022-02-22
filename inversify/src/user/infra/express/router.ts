import express from 'express';
import { RequestWithContext } from '@shared/infra/express'; 
import {TYPES} from '@user/application/types';
import { GetUsersUserCase } from '@user/application/getUsers';

const router = express.Router();

// define the home page route
router.get('/', async (req: RequestWithContext, res) => {
    const users = await req.container?.get<GetUsersUserCase>(TYPES.GetUsersUserCase).run();
    res.send({users})
});
  
export default router;