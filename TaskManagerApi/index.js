import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { configureDb } from './src/configs/DbConfig.js';
import taskRouter from './src/routers/TaskRouter.js';


const app=express();

app.use(cors())
app.use(express.json())
app.use(taskRouter);

app.listen(process.env.PORT, ()=>{
    console.log(`Listening on port ${process.env.PORT}`);
    configureDb();
})