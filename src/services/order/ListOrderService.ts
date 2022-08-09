import prismaClient from "../../prisma";

class ListOrderService {
    async execute() {
        //Lista todas as ordens
        //findMany lista varios registros
        const orders = await prismaClient.order.findMany({
            //Retorna todos os pedidos com esses pametros
            where:{
                draft: false,
                status: false,
            },
            //Ordena
            orderBy:{
                //Ordena por data de criação em ordem decrescente
                created_at: "desc"
            }
        })

        return orders;
    }
}

export { ListOrderService };