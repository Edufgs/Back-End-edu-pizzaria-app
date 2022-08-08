//Importando o express
import express, {Request, Response, NextFunction} from 'express'
//É orientacao do express-async-errors para importar sempre no segundo import
import 'express-async-errors';
import cors from 'cors';
//Dependencia para pegar os caminhos dos arquivos
//Dependencia vem com o Nodejs (Não preciso instalar)
import path from 'path';

import {router} from './routes'

//Para iniciar o projeto
const app = express();
//Diz para o express que o tipo de dado é o json
app.use(express.json());
//Abilita o cors para que qualquer url ou ip faz requisição na nossa api
app.use(cors());
//Define uma rota para acessar arquivos estáticos (css, js, imagens, etc)
//É como se fosse um middleware
//O primeiro parametro é a rota que vai ser acessada ('/files')
//O segundo parametro é a pasta que vai ser acessada (path.resolve(__dirname, '..', 'uploads'))
//__dirname é o caminho atual desse arquivo
//'..' é para voltar um diretorio (voltar pasta)
//'tmp' é o nome da pasta
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')));

//Diz que as rotas vão estar no import router
//Diz que ele vai ser o roteamento
app.use(router);

//Criando um middleware para configurar os erros do express-async-errors
app.use((err: Error, req: Request, res: Response, next: NextFunction)=>{
    //Verifica se o que esta passando em uma rota é do tipo Error
    //Se for uma instacia de um error
    if(err instanceof Error){
        //retorna um status 400 com a mensagem do error
        return res.status(400).json({
            error: err.message
        });
    }

    //Se não for uma instancia de um error e for um erro então da outra mensagem
    return res.status(500).json({
        status: 'error',
        message: 'Internal server error'
    })
})

//Define a porta que o servidor vai rodar e imprime no console a frase
app.listen(3333, () => console.log("Servidor Online"))