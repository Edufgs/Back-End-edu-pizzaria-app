import prismaClient from "../../prisma";

interface OrdemRequest{
    order_id: string;
}

class FinishOrderService {
    async execute({ order_id }: OrdemRequest){
        //Muda o status da ordem para finalizada (true)
        const order = await prismaClient.order.update({
            where:{
                id: order_id
            },
            data:{
                status: true
            }
        })

        return order        
    }
}

export { FinishOrderService };