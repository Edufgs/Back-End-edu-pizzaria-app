# Back-End-edu-pizzaria-app

Desenvolvimento back-end usando NodeJs e TypeScript para a criação de uma API de gerenciamento dos pedidos de um restaurante.

O projeto tem como objetivo fazer o gerenciamento de pedidos em um restaurante, podendo cadastrar mesa, registrar, listar, detalhar e concluir os pedidos

# Ferramentas utilizadas:
* <b>NodeJs V8.11.0:</b> Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.
  <br>Site da Documentação: https://nodejs.org/en/
  
* <b>PostgreSQL:</b> O PostgreSQL é um poderoso sistema de banco de dados relacional de objeto de código.
  <br>Site Oficial: https://www.postgresql.org/

* <b>TypeScript:</b> TypeScript é uma linguagem de programação fortemente tipada que se baseia em JavaScript, oferecendo melhores ferramentas em qualquer escala.
  <br>Site Oficial: https://www.typescriptlang.org/

* <b>Express:</b> O Express é um framework e possui diversas características que facilitam o desenvolvimento de nossas aplicações. Dentre suas principais características, podemos citar:

  * Possui um sistema de rotas completo;
  * Possibilita o tratamento de exceções dentro da aplicação;
  * Permite a integração de vários sistemas de templates que facilitam a criação de páginas web para suas aplicações;
  * Gerencia diferentes requisições HTTP com seus mais diversos verbos;
  * Feito para a criação rápida de aplicações utilizando um conjunto pequeno de arquivos e pastas;
 <br>Site Oficial: http://expressjs.com/pt-br/
 
 * <b>express-async-errors:</b> Ele é usado para gerar erros modificados e personalizados.
<br>Site: https://www.npmjs.com/package/express-async-errors

* <b>ts-node-dev:</b> É uma ferramenta que compila seus projetos com Typescript e reinicia o projeto quando o arquivo é modificado.
<br>Site: https://mvnrepository.com/artifact/io.jsonwebtoken/jjwt

* <b>cors:</b> Usado para habilitar qualquer ip ou url a fazer requisição
<br>Site: https://expressjs.com/en/resources/middleware/cors.html

* <b>Prisma IO:</b> Mapeamento objeto-relacional (ORM).
<br>Site: https://www.prisma.io/

* <b>bcryptjs:</b> Usado para criptografia.
<br>Site: https://www.npmjs.com/package/bcryptjs

* <b>jsonwebtoken:</b> É um pacote que implementa o protocolo JSON Web Token.
<br>Site: https://jwt.io/

* <b>Dotenv:</b> É um módulo de dependência que carrega variáveis de ambiente de um arquivo .env. Usado para acessar as variáveis de ambiente de forma segura.
<br>Site: https://www.npmjs.com/package/dotenv

* <b>Multer:</b> É usado principalmente para fazer upload de arquivos.
<br>Site: https://www.npmjs.com/package/multer

# Editor de código-fonte:
* <b>Visual Studio Code:</b> O Visual Studio Code é um editor de código-fonte desenvolvido pela Microsoft para Windows, Linux e macOS. Ele inclui suporte para depuração, controle de versionamento Git incorporado, realce de sintaxe, complementação inteligente de código, snippets e refatoração de código.

# Instalações:

<b>Node JS:</b> Baixe o Node JS no site oficial https://nodejs.org/en/download/ e instale.

O <b>npm</b> é um gerenciador de pacotes do  Node JS. Vem junto do  Node JS quando instalado. Ele é usado para baixar as dependências do projeto.

<b>yarn</b> é um gerenciador de pacotes do  Node JS melhor que o npm tanto em performance quanto em recursos. É preciso instalar pelo cmd depois de instalar o Node JS usando o comando: 
```
npm install -g yarn
```

<b>TypeScript</b> Instalação usando o comando (-D pois ele é só instalado no ambiente de desenvolvimento): 
```
yarn add typescript -D
```

<b>Express</b> Instalação usando os comandos (Primeiro comando para instalar normalmente o express e o segundo para funcionar no typescript. O -D pois ele é só instalado no ambiente de desenvolvimento): 
```
yarn add express
yarn add @types/express -D
```

<b>ts-node-dev</b> Instalação usando o comando (-D pois ele é só instalado no ambiente de desenvolvimento): 
```
yarn add ts-node-dev -D
```

<b>express-async-errors</b> Instalação usando o comando (-D pois ele é só instalado no ambiente de desenvolvimento): 
```
yarn add express-async-errors
```

<b>cors</b> Instalação usando os comandos (Primeiro comando para instalar normalmente o express e o segundo para funcionar no typescript. O -D pois ele é só instalado no ambiente de desenvolvimento): 
```
yarn add cors
yarn add @types/cors -D
```

<b>Prisma IO</b> Instalação usando os comandos (Primeiro comando para instalar normalmente o express e o segundo para funcionar no typescript. O -D pois ele é só instalado no ambiente de desenvolvimento): 
```
yarn add prisma
yarn add @prisma/client
```

<b>bcryptjs</b> Instalação usando os comandos (Primeiro comando para instalar normalmente o express e o segundo para funcionar no typescript. O -D pois ele é só instalado no ambiente de desenvolvimento): 
```
yarn add bcryptjs
yarn add @types/bcryptjs -D
```

<b>Prisma IO</b> Instalação usando os comandos (Primeiro comando para instalar normalmente o express e o segundo para funcionar no typescript. O -D pois ele é só instalado no ambiente de desenvolvimento): 
```
yarn add jsonwebtoken
yarn add @types/jsonwebtoken -D
```

<b>dotenv</b> Instalação usando o comando: 
```
yarn add dotenv
```

<b>multer</b> Instalação usando os comandos (Primeiro comando para instalar normalmente o express e o segundo para funcionar no typescript. O -D pois ele é só instalado no ambiente de desenvolvimento): 
```
yarn add multer
yarn add @types/multer -D 
```

# Criação do projeto:

Criação da estrutura padrão do projeto onde é adiciona um arquivo chamado "package.json":
```
yarn init -y
```

Instala o typescript no ambiente de desenvolvimento. No projeto aparece a pasta "node_modules" e o arquivo "yarn.lock".
```
yarn add typescript -D
```

Inicializa o typescript e cria o arquivo "tsconfig.json"
```
yarn tsc --init
```
