import { Request, Response } from "express";
import { AddItemService } from "../../services/order/AddItemService";

class AddItemController {
    async handle(req: Request, res: Response) {
        //Recupera os dados
        const { order_id, product_id, amount } = req.body;
        //Inicializa o serviço
        const addItemService = new AddItemService();
        //Executa o serviço
        const item = await addItemService.execute({ order_id, product_id, amount });
        //Retorna o item para o cliente
        return res.json(item);
    }
}

export { AddItemController };