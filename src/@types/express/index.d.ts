/** Cria a nossa tipagem 
 * É preciso ir no arquivo de configurações "tsconfig.json", indo em Modules abilite a linha "typesRoots":[]
 * e adicionar o caminho do nosso arquivo de tipagem, dicando assim: (
 * "typeRoots": [
 *  "./src/@types" //No padrão ele ja acessa o express/index.d.ts
 * ],                                                               // Specify multiple folders that act like './node_modules/@types'.).
*/

//Declara o namespace no Express
declare namespace Express {
    //Cria a tipagem para o middleware
    //Acessa a interface do Request e cria uma nova variavel para ser usada
    export interface Request {
        user_id: string;
    }
}