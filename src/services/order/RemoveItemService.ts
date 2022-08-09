import prismaClient from "../../prisma";

interface ItemRequest{
    item_id: string;
}

class RemoveItemService {
    async execute({item_id}: ItemRequest){

        //Deleta o item pelo id passado
        const item = await prismaClient.item.delete({
            where:{
                id: item_id
            }
        })

        return item;
    }
}

export { RemoveItemService };