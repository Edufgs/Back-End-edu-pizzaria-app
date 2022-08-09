import { Request, Response } from "express";
import { FinishOrderService } from "../../services/order/FinishOrderService";

class FinishOrderController{
    async handle(req: Request, res: Response){
        //Recupera os dados no  body do json
        const { order_id } = req.body;
        //Inicializa o serviço
        const finishOrderService = new FinishOrderService();
        //Executa o serviço
        const order = await finishOrderService.execute({order_id});
        //Retorna o item para o cliente
        return res.json(order);
    }
}

export { FinishOrderController };