import prismaClient from "../../prisma";

/** Lista todos os produtos de uma categoria */

//Cria uma interface do typescript
interface ProductRequest {
    //Informa a tipagem dos parametros que vai receber
    category_id: string;
}

class ListByCategoryService{
    async execute({category_id}: ProductRequest){
        const findByCategory = await prismaClient.product.findMany({
            where:{
                category_id: category_id
            }
        })
        //retorna os produtos da categoria
        return findByCategory
    }
}

export{ ListByCategoryService }