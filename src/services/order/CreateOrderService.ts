import prismaClient from "../../prisma";

interface OrderRequest{
    table: number;
    name: string;
}

class CreateOrderService {
    async execute({table, name}: OrderRequest){
        //Cria uma nova ordem        
        const order = await prismaClient.order.create({
            //Dados que vai ser adicionado na ordem
            data:{
                table: table,
                name: name
            }
        });

        return order;
    }
}

export { CreateOrderService }