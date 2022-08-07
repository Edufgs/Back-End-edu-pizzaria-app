import {Response, Request, NextFunction} from 'express'
//verify = usado para verificar se o token é valido
import { verify } from 'jsonwebtoken'

/** Arquivo para ter vario meddleware onde sempre é iniciado antes de qualquer rota */

interface Payload{
    //Esse sub é o id do usuario que nois colocamos no token
    sub: string;
}

//Cria o middleware para verificar se o usuário está autenticado
//next: NextFunction = diz o tipo de cada um e ele é usando para continuar a execução da rota 
export function isAuthenticated(req: Request, res: Response, next: NextFunction){  
    //Recendo o token do header
    //O Token fica dentro do cabeçalho da requisicao no campo authorization
    const authToken = req.headers.authorization;

    //Se não tiver token
    if(!authToken){
        //Status 401 = não autorizado
        //.end é para barrar a requisicao do usuario
        return res.status(401).end();
    }

    //Pega oq mandou via auth (Bearer token) e separa pelo espaço o Bearer (Padrão/convencao) e o token
    //Na descontrução a ',' é para ignorar o primero item do array
    const [, token] = authToken.split(" ");

    //Try e catch para tratar erros
    try{
        //Valida o token
        //O primeiro dado passado é o token, o segundo é a chave secreta e os outros são configurações
        //Decodifica e pega o id (sub) do usuario
        const {sub} = verify(
            token,
            //Precisa colocar o process.env e o campo onde está o codigo
            //Se der erro então é preciso ir no arquivo "tsconfig.json" e colocar false no campo:
            //"strict": true, /* Enable all strict type-checking options. */
            // assim desativa o strict type-checking
            process.env.JWT_SECRET
        ) as Payload; // diz que vai devolver do tipo Payload definido lá em cima na interface
        
        //Recuper o id do token e colocar em uma variavel user_id dentro do req(request)
        //Cria uma variavel na requisicao e manda o id do usuario no request para ser usado na proxima camada
        // Se der erro é pq precisa criar essa variavel no request. Na pasta @types/express/index.d.ts (Se não tiver tem que criar essse local) está criado e explicado como funciona.
        req.user_id = sub;

        //se der tudo centro então diz para continuar a execução da rota
        return next();
    }catch(err){
        //Status 401 = não autorizado
        //.end é para barrar a requisicao do usuario
        return res.status(401).end();
    }    
}