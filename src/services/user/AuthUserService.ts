import prismaClient from "../../prisma";
//compare = com ele é possivel comparar a senha criptografada com a senha do usuário
import { compare } from "bcryptjs"
//sign = gera um token
import { sign } from "jsonwebtoken"

//interface é uma interface do typescript que define os campos que vai receber
interface AuthRequest{
    email: string;
    password: string;
}

class AuthUserService {
    //Pega o email e a senha da interface AuthRequest
    async execute({email, password}: AuthRequest){
        
        //Verificar se o email existe
        //Verifica se nos usuários existe o email que foi enviado
        const user = await prismaClient.user.findFirst({
            //Passa os dados que quer buscar e o local
            //primeiro email é o nome do campo no banco de dados e o segundo email é o email que foi enviado
            where:{
                email: email
            }
        })

        //Verifica se o usuário existe
        //Se não existir retorna um erro
        if(!user){
            throw new Error("User/password incorrect")
        }

        //Verifica se a senha está correta
        //compare = com ele é possivel comparar a senha criptografada com a senha do usuário
        //Retorna true ou false
        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("User/password incorrect")
        }
        
        // Gerar o token JWT e devolver os dados do usuario como id, name e email
        //primeira coisa para especificar é o payload (Dados para retornar para o cliente)
        //Pegando o token e indo no site jwt.io (https://jwt.io/) é possivel descriptografar e ver os dados que foi colocado
        const token = sign(
            //Payload: dados que vai retornar para o cliente
            {
                name: user.name,
                email: user.email
            },
            //Segunda coisa é a chave secreta criada no arquivo .env no campo "JWT_SECRET"
            //Precisa colocar o process.env e o campo onde está o codigo
            //Se der erro então é preciso ir no arquivo "tsconfig.json" e colocar false no campo:
            //"strict": true, /* Enable all strict type-checking options. */
            // assim desativa o strict type-checking
            process.env.JWT_SECRET, 
            //Terceira coisa é o id do usuario e o tempo de expiração do token
            {
                subject: user.id, //Dentro do campo "sub" está sendo colocado o usuario
                expiresIn: '30d' //Expira em 30 dias, depois que passar esses dias então é preciso gerar um novo token (Logar novamente)
            }
        )

        //retorna varios campos e o token criado
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            token: token
        };
    } 
}

//Exporta o serviço para ser usado em outros lugares
export { AuthUserService };