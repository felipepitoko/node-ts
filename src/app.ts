import express from 'express';
import roteador from '../src/routes/routes'

const app = express();
const port = 3000;
app.use(roteador)
app.listen(port, ()=>{
    console.log('Escutando a porta 3000')
});