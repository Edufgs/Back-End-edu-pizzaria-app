import {Router} from 'express';

import {CreateUserController} from './controllers/user/CreateUserController';
import {AuthUserController} from './controllers/user/AuthUserController';
import {DetailUserController} from './controllers/user/DetailUserController';
import {CreateCategoryController} from './controllers/category/CreateCategoryController';

import {isAuthenticated} from './middlewares/isAuthenticated';


//Constante de rotas
const router = Router();

//Rota Exemplo
//req: Request, res: Response = diz o tipo de cada um
/*router.get('/teste', (req: Request, res: Response) => {
    //Lança um erro se entrar nesta rota
    //throw new Error('Erro ao fazer requisição');

    return res.json({nome: 'Edu Pizza'})
})*/

//---- ROTAS USER ----

//Rota para criar um usuario
//o endereço da rota é /users e cria um controller entrando no metodo handle
//post pois manda dados para api
router.post('/users', new CreateUserController().handle);
//Rota para autenticar um usuario
//post pois manda dados para api
router.post('/sessions', new AuthUserController().handle);
//Rota para detalhar um usuario
//get pois busca dados da api
//isAuthenticated é um middleware que verifica se o usuário está autenticado. Colocando nesse local então sempre vai executar antes de entrar na rota
router.get('/userinfo', isAuthenticated, new DetailUserController().handle);

//---- ROTAS CATEGORY ----
//post pois cadastra algo na api
//isAuthenticated é um middleware que verifica se o usuário está autenticado. Colocando nesse local então sempre vai executar antes de entrar na rota
router.post('/category', isAuthenticated, new CreateCategoryController().handle);


//Exporta o router para ser usado em outros arquivos
export{ router };