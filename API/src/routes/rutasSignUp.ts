import express, { Request, Response } from 'express';

import { Sequelize, DataTypes } from 'sequelize';


    export let signUpRouter = express.Router()

    import { controllerUsuario } from '../controllers/controllerUsuario';


    signUpRouter.post('/', (req: Request, res: Response) => {
       
        
        const usuario =  controllerUsuario.crearUsuario(req.body);
        const token = controllerUsuario.generarJWT
        console.log(token)
        res.status(200).send();
    });



