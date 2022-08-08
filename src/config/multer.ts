//Gera um hash/nome criptografado para o arquivo, assim nunca se repetir
//Dependencia vem com o Nodejs (Não preciso instalar)
import crypto from 'crypto'
//Dependencia para upload de arquivos
import multer from 'multer'
//Dependencia para pegar os caminhos dos arquivos
//Dependencia vem com o Nodejs (Não preciso instalar)
import {extname, resolve} from 'path'

/** Configura o multer para upload de arquivos (qual pasta salvar, oque fazer com o arquivo, etc)
 * 
 */

//Diz que está exportando uma configuração basica
export default{
    //Metodo para falar qual pasta quer salvar os arquivos
    upload(folder: string){
        return{
            storage: multer.diskStorage({
                //Onde vai salvar o arquivo
                //__dirname é o caminho atual desse arquivo
                //'..' é para voltar um diretorio (voltar pasta)
                //folder é o nome da pasta
                destination: resolve(__dirname,'..','..',folder),
                //Configuração sobre p arquivo
                //request é a requisição do usuario
                //file é o arquivo que está sendo enviado
                //callback é uma função que é chamada quando terminar de fazer alguma coisa
                //tudo isso vem da documentação do multer
                filename: (request, file, callback) =>{
                    //Gera um nome aleatorio em 16 bytes (16 bytes = 128 bits) que vai ser uma string hexadecimal
                    const fileHash = crypto.randomBytes(16).toString('hex')
                    //O nome vai ser o "hash gerado" + "-" + "nome da foto enviada"
                    const fileName = `${fileHash}-${file.originalname}`

                    //Retorna o nome do arquivo criado
                    //O primeiro parametro é o erro, mas como não quero tratar então fica null
                    //O segundo parametro é o nome do arquivo
                    return callback(null, fileName)
                }
            })
        }
    }
}
