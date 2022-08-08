import prismaClient from '../../prisma';

interface ProductRequest{
    name: string; //nome
    price: string; //preço
    description: string; //descrição do produto
    banner: string; //Nome da for/url
    category_id: string; //categoria
}

class CreateProductService{
    async execute({name, price, description, banner, category_id}: ProductRequest){                
        
        //Adiciona o produto no banco de dados
        const product = await prismaClient.product.create({
            data:{
                name: name,
                price: price,
                description: description,
                banner: banner,
                category_id: category_id
            }
        })

        //retorna o produto cadastrado
        return product
    }
}

export { CreateProductService };