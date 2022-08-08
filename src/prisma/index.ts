import { PrismaClient } from '@prisma/client'

//Configura a conexão com o banco de dados

//Com esse prismaClient eu consigo acessar os models do banco de dados, criar usuarios e entre outros.
const prismaClient = new PrismaClient()

//Exporta para ser usado em outros arquivos
export default prismaClient;