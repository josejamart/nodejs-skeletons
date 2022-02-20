import express from 'express';
import { RequestWithContext } from '..'; 
import 'module-alias/register';

const router = express.Router();

// define the home page route
router.get('/', async (req: RequestWithContext, res) => {
    const users = await req.container?.cradle.getUsersUserCase.run("Timber","Saw");
    res.send({users})
});
  
export default router;