import express from 'express';
import { RequestWithContext } from '..'; 

const router = express.Router();

// define the home page route
router.get('/', async (req: RequestWithContext, res) => {
    const users = await req.container?.cradle.getUsersUserCase.run();
    res.send({users})
});
  
export default router;