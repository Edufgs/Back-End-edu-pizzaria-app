import {Request, Response} from 'express';
import {ListCategoryService} from '../../services/category/ListCategoryService';

class ListCategoryController{
    async handle(req: Request, res: Response){
        //Inicializa o servico de listagem de categorias
        const listCategoryService = new ListCategoryService();
        //Executa o servico de listagem de categorias
        const category = await listCategoryService.execute();
        //Retorna a lista de categorias para o cliente
        return res.json(category);
    }
}

export {ListCategoryController}