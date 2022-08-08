import prismaClient from "../../prisma";


class ListCategoryService {
    async execute() {
        //Busca todas as categorias no banco de dados
        //prismaClient é o acesso no banco de dados
        // category é o nome da model criada no prisma mas com a primeira letra minuscula
        //findMany é metodo para buscar todos os itens no banco de dados   
        const categories = await prismaClient.category.findMany({
            //Informa os campos que vai retornar
            select: {
                id: true,
                name: true
            }
        })
        return categories
    }
}

export { ListCategoryService };