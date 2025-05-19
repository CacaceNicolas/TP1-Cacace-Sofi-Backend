import express, { Request, Response } from 'express';

import { Sequelize, DataTypes } from 'sequelize';

export let librosRouter = express.Router()

import { controllerLibro } from '../controllers/controllerLibro';

import  ModeloLibro  from '../models/ModeloLibro';

import { controllerUsuario } from '../controllers/controllerUsuario';

    librosRouter.get('/', async (req: Request, res: Response) => {

        if (await controllerUsuario.autenticar(req.header("Authentication"))){
        
            res.json(await controllerLibro.devolverTodosLosLibros());
        }    
        else{
            res.send("BUEN INTENTO RUFIÁN")
        }


    });
    librosRouter.get('/', async (req: Request, res: Response) => {
        if (await controllerUsuario.autenticar(req.header("Authentication"))){
            res.json(controllerLibro.devolverUnLibro(req.body.id));
        }
        else{
            res.send("BUEN INTENTO RUFIÁN")
        }

    });

    librosRouter.post('/', async (req: Request, res: Response) => {


        if (await controllerUsuario.autenticar(req.header("Authentication"))){

            const libro =  controllerLibro.crearLibro(req.body);

            res.status(200).send();
        }

        else{
            res.send("BUEN INTENTO RUFIÁN")
        }

    });

    librosRouter.put('/',async (req: Request, res: Response) => {
        if (await controllerUsuario.autenticar(req.header("Authentication"))){
            const libro =  controllerLibro.updetearLibro(req.body);
        }
        else{
            res.send("BUEN INTENTO RUFIÁN")
        }
    });

    librosRouter.delete('/', async (req: Request, res: Response) => {
        if (await controllerUsuario.autenticar(req.header("Authentication"))){
           controllerLibro.deletearLibro(req.body);
        }
        else{
            res.send("BUEN INTENTO RUFIÁN")
        }
        res.status(200).send();
    });