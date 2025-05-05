import express, { Request, Response } from 'express';

import { Sequelize, DataTypes } from 'sequelize';


    export let librosRouter = express.Router()

    import { controllerLibro } from '../controllers/controllerLibro';
    import  ModeloLibro  from '../models/ModeloLibro'; 

    librosRouter.get('/', async (req: Request, res: Response) => {

        res.json(await controllerLibro.devolverTodosLosLibros());

    });
    librosRouter.get('/', async (req: Request, res: Response) => {

        res.json(controllerLibro.devolverUnLibro(req.body.id));

    });

    librosRouter.post('/', (req: Request, res: Response) => {
       
        
        const libro =  controllerLibro.crearLibro(req.body);

        res.status(200).send();
    });

    librosRouter.put('/', (req: Request, res: Response) => {

        const libro =  controllerLibro.updetearLibro(req.body);

    });

    librosRouter.delete('/', (req: Request, res: Response) => {
    
        controllerLibro.deletearLibro(req.body);

        res.status(200).send();
    });