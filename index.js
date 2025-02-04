import express from 'express'
import { ConexionMongo } from "./Model/conexion.js";
import { Schema, model } from 'mongoose';


ConexionMongo()
const SchemaNuevo = new Schema({
    name: String,
    direccion: String,
    appelido: String
}, {
    versionKey: false
})

const baseMongo = new model('Paginas', SchemaNuevo)

const app = express()

app.get('/', async (req, res) => {
    const data = await baseMongo.find()
    res.json(data)
})


const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
    console.log(`http://localhost:3000`)
})

