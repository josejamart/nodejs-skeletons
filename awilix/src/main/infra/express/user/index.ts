import express from 'express';
import { RequestWithContext } from '..'; 

const router = express.Router();

// define the home page route
router.get('/functional', async (req: RequestWithContext, res) => {
    let users;
    for(let i = 0; i<10; i++){
            users = await req.container?.cradle.useCase("hola","adios");;
            
    }
    res.send({users})
});

// define the home page route
router.get('/func-event', async (req: RequestWithContext, res) => {
    let users;
    for(let i = 0; i<10; i++){
            users = await req.container?.cradle.useCaseWithEvent("hola","adios");;
            
    }
    res.send({users})
});

// define the home page route
router.get('/oop', async (req: RequestWithContext, res) => {
    let users;
    for(let i = 0; i<10; i++){
            users = await req.container?.cradle.getUsersUserCase.run("hola","adios");;
            
    }
    res.send({users})
});
  
export default router;