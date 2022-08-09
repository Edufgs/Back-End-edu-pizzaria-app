import { Request, Response } from "express";
import { DetailOrderService } from "../../services/order/DetailOrderService";

class DetailOrderController{
    async handle(req: Request, res: Response){
        //Recupera os dados
        //Como o vai ser enviado via query params, então acessa "req.query.order_id"
        //Tipos de request está sendo explicado no arquivo "routes.ts"
        //Como o javascrip não sabe que tipo é o parametro então é colocado "as string" para dizer que é string
        const order_id = req.query.order_id as string;
        //Inicializa o serviço
        const detailOrderService = new DetailOrderService();
        //Executa o serviço
        const orders = await detailOrderService.execute({order_id});
        
        //Retorna o resultado para o cliente
        return res.json(orders);
    }
}

export { DetailOrderController }