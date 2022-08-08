import { Request, Response } from 'express'
import { AuthUserService } from '../../services/user/AuthUserService'

class AuthUserController{
    async handle(req: Request, res: Response){
        //Pega o email e a senha que o cliente mandou no JSON-body
        const {email, password} = req.body;

        //Inicia o AuthUserService
        const authUserService = new AuthUserService();

        //Executa o serviço
        //await para esperar o serviço terminar para continuar
        const auth = await authUserService.execute({email, password});

        return res.json(auth);
    }
}

export { AuthUserController }