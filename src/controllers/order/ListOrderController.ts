import { Request, Response } from "express";
import { ListOrderService } from "../../services/order/ListOrderService";

class ListOrderController {
    async handle(req: Request, res: Response) {
        //Inicia o serviço
        const listOrderService = new ListOrderService();
        //Executa o serviço
        const orders = await listOrderService.execute();
        //Retorna o resultado para o cliente
        return res.json(orders);
    }
}

export { ListOrderController };
