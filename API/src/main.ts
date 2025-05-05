import express, { Request, Response } from 'express';
 

const Sequelize = require("sequelize");

const cors = require("cors");
const app = express();
const port = 3000;
const file = require("./Libros.json");

import { librosRouter } from './routes/rutasLibro';
import { loginRouter } from './routes/rutasLogin';
import { signUpRouter } from './routes/rutasSignUp';

app.use(cors());
app.use(express.json());
app.use('/libro', cors());
app.use("/libro", librosRouter);
app.use('/signUp', cors());
app.use("/signUp", signUpRouter);


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

export default app;