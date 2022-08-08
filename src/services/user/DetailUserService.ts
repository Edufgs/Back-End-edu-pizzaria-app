import prismaClient from "../../prisma";

class DetailUserService{
    async execute(user_id: string){
        //Recupera o usuário pelo id
        //user é o nome da model criada no prisma mas com a primeira letra minuscula
        //findFirst é o metodo que busca o primeiro registro no banco
        const user =  await prismaClient.user.findFirst({
            //where é o metodo que passa um parametro que quer buscar
            //O primeiro parametro é o campo que quer buscar e o segundo é o valor que quer buscar
            where:{
                id: user_id
            },
            //Informa os campos que vai retornar
            select:{
                id: true,
                name: true,
                email: true
            }
        })

        return {user}
    }
}

export { DetailUserService };