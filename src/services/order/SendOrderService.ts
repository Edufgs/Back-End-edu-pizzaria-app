import prismaClient from "../../prisma";

interface OrderRequest{
    order_id: string;
}

class SendOrderService {
    async execute({order_id}: OrderRequest){        
        //Tira o pedido do rascunho
        const ordem = await prismaClient.order.update({
            where:{
                id: order_id
            },
            data:{
                draft: false
            }
        })

        return ordem
    }
}

export { SendOrderService };