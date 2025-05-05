import fs from 'fs';
import ModeloLibro from '../models/ModeloLibro';
import { forEachChild } from 'typescript';
import ModeloUsuario from '../models/ModeloUsuario';
import { createHash } from 'crypto';
import jwt from 'jsonwebtoken'



export  class controllerUsuario{
    
    static secretKey = "Ensaladardamal"

    static hashSHA256(data: string): string {
        return createHash('sha256').update(data).digest('hex');
    }


    static generarJWT(payload: string): string {
        const token = jwt.sign(payload, controllerUsuario.secretKey);
        return token;
    }


    static async crearUsuario(body : any){
        
        body.password = controllerUsuario.hashSHA256(body.password)
        console.log(body.password)
        

        const usuario = await ModeloUsuario.create(
            body
        );

        
        return usuario;
    }






}



