# Back-End-edu-pizzaria-app

Desenvolvimento back-end usando NodeJs e TypeScript para a criação de uma API de gerenciamento dos pedidos de um restaurante.

O projeto tem como objetivo fazer o gerenciamento de pedidos em um restaurante, podendo cadastrar mesa, registrar, listar, detalhar e concluir os pedidos

## Ferramentas utilizadas

* **NodeJs V18.15.0:** Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.
  
  Site da Documentação: <https://nodejs.org/en/>
  
* **PostgreSQL:** O PostgreSQL é um poderoso sistema de banco de dados relacional de objeto de código.
  
  Site Oficial: <https://www.postgresql.org/>

* **TypeScript:** TypeScript é uma linguagem de programação fortemente tipada que se baseia em JavaScript, oferecendo melhores ferramentas em qualquer escala.
  
  Site Oficial: <https://www.typescriptlang.org/>

* **Express:** O Express é um framework e possui diversas características que facilitam o desenvolvimento de nossas aplicações. Dentre suas principais características, podemos citar:

  * Possui um sistema de rotas completo;
  * Possibilita o tratamento de exceções dentro da aplicação;
  * Permite a integração de vários sistemas de templates que facilitam a criação de páginas web para suas aplicações;
  * Gerencia diferentes requisições HTTP com seus mais diversos verbos;
  * Feito para a criação rápida de aplicações utilizando um conjunto pequeno de arquivos e pastas;
  
    Site Oficial: <http://expressjs.com/pt-br/>

* **express-async-errors:** Ele é usado para gerar erros modificados e personalizados.

  Site: <https://www.npmjs.com/package/express-async-errors>

* **ts-node-dev:** É uma ferramenta que compila seus projetos com Typescript e reinicia o projeto quando o arquivo é modificado.
  
  Site: <https://mvnrepository.com/artifact/io.jsonwebtoken/jjwt>

* **cors:** Usado para habilitar qualquer ip ou url a fazer requisição

  Site: <https://expressjs.com/en/resources/middleware/cors.html>

* **Prisma IO:** Mapeamento objeto-relacional (ORM).

  Site: <https://www.prisma.io/>

* **bcryptjs:** Usado para criptografia.
  
  Site: <https://www.npmjs.com/package/bcryptjs>

* **jsonwebtoken:** É um pacote que implementa o protocolo JSON Web Token.
  
  Site: <https://jwt.io/>

* **Dotenv:** É um módulo de dependência que carrega variáveis de ambiente de um arquivo .env. Usado para acessar as variáveis de ambiente de forma segura.
  
  Site: <https://www.npmjs.com/package/dotenv>

* **Multer:** É usado principalmente para fazer upload de arquivos.

  Site: <https://www.npmjs.com/package/multer>

## Editor de código-fonte

* **Visual Studio Code:** O Visual Studio Code é um editor de código-fonte desenvolvido pela Microsoft para Windows, Linux e macOS. Ele inclui suporte para depuração, controle de versionamento Git incorporado, realce de sintaxe, complementação inteligente de código, snippets e refatoração de código.

## Instalações

**Node JS:** Baixe o Node JS no site oficial <https://nodejs.org/en/download/> e instale.

O **npm** é um gerenciador de pacotes do  Node JS. Vem junto do  Node JS quando instalado. Ele é usado para baixar as dependências do projeto.

**yarn** é um gerenciador de pacotes do  Node JS melhor que o npm tanto em performance quanto em recursos. É preciso instalar pelo cmd depois de instalar o Node JS usando o comando:

```code
npm install -g yarn
```

**TypeScript** Instalação usando o comando (-D pois ele é só instalado no ambiente de desenvolvimento):

```code
yarn add typescript -D
```

**Express** Instalação usando os comandos (Primeiro comando para instalar normalmente o express e o segundo para funcionar no typescript. O -D pois ele é só instalado no ambiente de desenvolvimento):

```code
yarn add express
yarn add @types/express -D
```

**ts-node-dev** Instalação usando o comando (-D pois ele é só instalado no ambiente de desenvolvimento):

```code
yarn add ts-node-dev -D
```

**express-async-errors** Instalação usando o comando (-D pois ele é só instalado no ambiente de desenvolvimento):

```code
yarn add express-async-errors
```

**cors** Instalação usando os comandos (Primeiro comando para instalar normalmente o express e o segundo para funcionar no typescript. O -D pois ele é só instalado no ambiente de desenvolvimento):

```code
yarn add cors
yarn add @types/cors -D
```

**Prisma IO** Instalação usando os comandos (Primeiro comando para instalar normalmente o express e o segundo para funcionar no typescript. O -D pois ele é só instalado no ambiente de desenvolvimento):

```code
yarn add prisma
yarn add @prisma/client
```

**bcryptjs** Instalação usando os comandos (Primeiro comando para instalar normalmente o express e o segundo para funcionar no typescript. O -D pois ele é só instalado no ambiente de desenvolvimento):

```code
yarn add bcryptjs
yarn add @types/bcryptjs -D
```

**Prisma IO** Instalação usando os comandos (Primeiro comando para instalar normalmente o express e o segundo para funcionar no typescript. O -D pois ele é só instalado no ambiente de desenvolvimento):

```code
yarn add jsonwebtoken
yarn add @types/jsonwebtoken -D
```

**dotenv** Instalação usando o comando:

```code
yarn add dotenv
```

**multer** Instalação usando os comandos (Primeiro comando para instalar normalmente o express e o segundo para funcionar no typescript. O -D pois ele é só instalado no ambiente de desenvolvimento):

```code
yarn add multer
yarn add @types/multer -D 
```

## Criação do projeto

Criação da estrutura padrão do projeto onde é adiciona um arquivo chamado "package.json":

```code
yarn init -y
```

Instala o typescript no ambiente de desenvolvimento. No projeto aparece a pasta "node_modules" e o arquivo "yarn.lock".

```code
yarn add typescript -D
```

Inicializa o typescript e cria o arquivo "tsconfig.json"

```code
yarn tsc --init
```
