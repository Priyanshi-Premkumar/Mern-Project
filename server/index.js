import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import poemRoutes from './routes/poem.js'
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));
app.use(cors());
app.use('/poem',poemRoutes);

app.get('/',(req,res)=>{res.send("HELLO SHELF OF POEMS API")});

const PORT= process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>app.listen(PORT,()=>console.log(`Server Running in port: ${PORT}`)))
    .catch((error)=>console.log(error.message));

