import prismaClient from '../../prisma'
//hash é para criptografar algo
import { hash } from 'bcryptjs'

//Cria uma interface do typescript
interface UserRequest{
    //Informa a tipagem dos parametros que vai receber
    name: string;
    email: string;
    password: string;
}

class CreateUserService{
    //{name, email, password}: UserRequest = desconstroi os parametros definido pela interface
    async execute({name, email, password}: UserRequest){
        
        //Verificar se envio um email
        if(!email){
            //Se não enviar o email retorna um erro
            throw new Error("Email is required")
        }

        //Verificar se o email já existe
        /** prismaClient é o acesso no banco de dados
         * user é o nome da model criada no prisma mas com a primeira letra minuscula
         * findOne é o metodo que busca o primeiro registro no banco 
        */
        const userAlreadyExists = await prismaClient.user.findFirst({
            //where é o metodo que passa um parametro que quer buscar
            where:{
                //busca no campo email da model o email que foi enviado
                email: email
            }
        })

        //Se o email existir então retorna um erro
        if(userAlreadyExists){
            throw new Error("User already exists")
        }
        
        //Cria um hash para o password
        // É preciso passar o password para criptografar e o salto que é o numero da criptografia
        //Um padrão é usar o 8
        const passwordHash = await hash(password, 8)

        //Cadastra o usuário no banco de dados
        /** prismaClient é o acesso no banco de dados
         * user é o nome da model criada no prisma mas com a primeira letra minuscula
         * crate é metodo para cadastrar um usuário no banco de dados
        */
        const user = await prismaClient.user.create({
            //Informa os campos que vai cadastrar (dados)
            data:{
                //Informa os campos e os valores que vai cadastrar
                name: name,
                email: email,
                password: passwordHash //salva a senha cryptografada
            },
            //Informa os campos que vai retornar
            select:{
                id: true,
                name: true,
                email: true
            }
        })

        return user
    }
}

export { CreateUserService }