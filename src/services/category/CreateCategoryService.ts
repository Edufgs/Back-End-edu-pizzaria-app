import prismaClient from '../../prisma';

//Cria uma interface do typescript
/*interface CategoryRequest {
    //Informa a tipagem dos parametros que vai receber
    name: string; //Nome da categoria
}*/

class CreateCategoryService{
    //async execute({name}: CategoryRequest){
    async execute(name: string){        
        //Se o name for vazio
        if(name === ""){
            //Retorna um erro
            throw new Error("Name is invalid")
        }

        //Cadastra no banco de dados
        //prismaClient é o acesso no banco de dados
        // category é o nome da model criada no prisma mas com a primeira letra minuscula
        // crate é metodo para cadastrar no banco de dados               
        const category = await prismaClient.category.create({
            //Informa os campos que vai cadastrar (dados)
            data:{
                //Informa os campos e os valores que vai cadastrar
                name: name,
            },
            //Informa os campos que vai retornar
            select:{
                id: true,
                name: true
            }
        })
        //Retorna a categoria cadastrada para o controller
        return {category}
    }
}

export { CreateCategoryService }