import express from 'express';
const app = express();
import router from './router'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import cors from 'cors';
import Config from './ConnectionDatabase/DatabaseConnection'
app.use(express.json());
app.use(cors());
app.use(router)
dotenv.config();
app.listen(80, () => {
    console.log(`Servidor On 🧨 `);
});
console.log(`${Config.mongo.url}`)

// Config Mongo 

mongoose.connect(Config.mongo.url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(
    () => console.log('Banco Conectado ✳️')
).catch(error => console.log(`Error ${error}`));


mongoose.Promise = global.Promise

module.exports = mongoose