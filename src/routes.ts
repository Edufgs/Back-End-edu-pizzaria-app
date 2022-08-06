import {Router} from 'express';

import {CreateUserController} from './controllers/user/CreateUserController';

//Constante de rotas
const router = Router();

//Rota Exemplo
//req: Request, res: Response = diz o tipo de cada um
/*router.get('/teste', (req: Request, res: Response) => {
    //Lança um erro se entrar nesta rota
    //throw new Error('Erro ao fazer requisição');

    return res.json({nome: 'Edu Pizza'})
})*/

//---- ROTA USER ----
//Rota para criar um usuario
//o endereço da rota é /users e cria um controller entrando no metodo handle
router.post('/users', new CreateUserController().handle);

//Exporta o router para ser usado em outros arquivos
export{ router };