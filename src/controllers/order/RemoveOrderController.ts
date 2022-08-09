import { Request, Response } from "express";
import { RemoveOrderService } from "../../services/order/RemoveOrderService";

class RemoveOrderController {
  async handle(req: Request, res: Response) {
    
    //Como o vai ser enviado via query params, então acessa "req.query.order_id"
    //Tipos de request está sendo explicado no arquivo "routes.ts"
    //Como o javascrip não sabe que tipo é o parametro então é colocado "as string" para dizer que é string
    const order_id = req.query.order_id as string;    

    //Inicializa o servico de remover pedido
    const removeOrderService = new RemoveOrderService();

    const order = await removeOrderService.execute({order_id});

    return res.json(order);
  }
}

export { RemoveOrderController };