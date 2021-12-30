import {Router, Request, Response} from 'express'

const roteador = Router()

roteador.get('/', (req: Request, res: Response)=>{
    res.json({
        mensagem: "Servidor está funcionando"
    })
})

export default roteador