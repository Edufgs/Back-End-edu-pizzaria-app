import { Request, Response } from 'express';
import { RemoveItemService } from '../../services/order/RemoveItemService';

class RemoveItemController{
    async handle(req: Request, res: Response){
        //Como o vai ser enviado via query params, então acessa "req.query.item_id"
        //Tipos de request está sendo explicado no arquivo "routes.ts"
        //Como o javascrip não sabe que tipo é o parametro então é colocado "as string" para dizer que é string
        const item_id = req.query.item_id as string;
        //Inicializa o servico de remover item
        const removeItemService = new RemoveItemService();
        //Executa o servico de remover item
        const item = await removeItemService.execute({ item_id });
        
        //Retorna o item para o cliente
        return res.json(item);
    }
}

export { RemoveItemController };