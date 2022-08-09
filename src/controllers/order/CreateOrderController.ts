import { Request, Response } from 'express';
import { CreateOrderService } from '../../services/order/CreateOrderService'; 

class CreateOrderController {
    async handle(req: Request, res: Response){
        //Pega os dados
        const { table, name } = req.body;
        //Cria um novo objeto de CreateOrderService
        const createOrderService = new CreateOrderService();
        //Chama o metodo execute do CreateOrderService
        const order = await createOrderService.execute({ table, name });

        return res.json(order);
    }
}

export { CreateOrderController };