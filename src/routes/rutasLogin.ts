import express, { Request, Response } from 'express';

import { Sequelize, DataTypes } from 'sequelize';


    export let loginRouter = express.Router()

    import { controllerUsuario } from '../controllers/controllerUsuario';

     loginRouter.post('/', async (req: Request, res: Response) => {
        
        res.send(await controllerUsuario.login(req.body))
    });




