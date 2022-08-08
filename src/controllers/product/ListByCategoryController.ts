import { Request, Response } from 'express'
import { ListByCategoryService } from '../../services/product/ListByCategoryService'

class ListByCategoryController{
    async handle(req: Request, res: Response){
        //Como o vai ser enviado via query params, então acessa "req.query.category_id"
        //Tipos de request está sendo explicado no arquivo "routes.ts"
        //Como o javascrip não sabe que tipo é o parametro então é colocado "as string" para dizer que é string
        const category_id = req.query.category_id as string;

        //Inicializa o servico de listagem de produtos por categoria
        const listByCategoryService = new ListByCategoryService();
        
        //Executa o servico de listagem de produtos por categoria
        const products = await listByCategoryService.execute({category_id});
        
        //Retorna a lista de produtos para o cliente
        return res.json(products);
    }
}

export { ListByCategoryController }