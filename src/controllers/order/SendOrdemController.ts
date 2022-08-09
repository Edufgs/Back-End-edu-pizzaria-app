import { Request, Response } from "express";
import {SendOrderService} from "../../services/order/SendOrderService";

class SendOrderController{
    async handle(req: Request, res: Response){
        //Recupera os dados
        const { order_id } = req.body;     
        //Inicializa o serviço
        const sendOrderService = new SendOrderService();
        //Executa o serviço
        const order = await sendOrderService.execute({order_id});
        //Retorna o item para o cliente
        return res.json(order);
    }
}

export { SendOrderController };