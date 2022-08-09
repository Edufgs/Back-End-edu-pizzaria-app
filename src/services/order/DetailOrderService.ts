import prismaClient from "../../prisma";

interface DetailRequest{
    order_id: string;
}

class DetailOrderService {
    async execute({ order_id }: DetailRequest){
        
        //Busca todos os itens da ordem passada
        const orders = await prismaClient.item.findMany({
            //Bucas os itens da ordem pelo id passado
            where:{
                order_id: order_id
            },
            //Inclui os dados do produto e da ordem
            include:{
                /** O nome desse campo é o nome da relação feita no schema.prisma
                 * Essa definição está dentro do model Item
                 * order Order @relation(fields: [order_id], references: [id]) //Relaciona o item com o pedido
                */
                product: true,
                /** O nome desse campo é o nome da relação feita no schema.prisma
                 *  Essa definição está dentro do model Product
                 *  product Product @relation(fields: [product_id], references: [id]) //Relaciona o item com o produto
                */
                order: true
            }
        })

        return orders;
    }
}

export { DetailOrderService };