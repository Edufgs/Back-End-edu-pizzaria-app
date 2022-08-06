import {Request, response, Response} from 'express'
import {CreateUserService} from '../../services/user/CreateUserService'

//Classe que representa o controller
class CreateUserController{

    //Metodo assincrono para criar um usuario
    //req do tipo Request, é o significado dos outros tb
    async handle(req: Request, res: Response){
        //Desconstroi o body do request para pegar os dados especificado no const
        const{name, email, password} = req.body;

        //Cria/inicializa o servico CreateUserService
        const createUserService = new CreateUserService();

        //Executa o metodo
        //await para esperar o metodo terminar de executar para continuar
        //Os parametros são passados desse jeito a baixo
        const user = await createUserService.execute({
            name,
            email,
            password
        });
        
        return res.json(user)
    }
}

export { CreateUserController }