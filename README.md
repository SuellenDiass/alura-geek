 <h1 align="center"> Projeto  Butterfly Geek</h1>

<p align="center">
    <img width="600" src="https://github.com/SuellenDiass/SuellenDiass/assets/102911341/ea47be37-4fc7-45cb-b707-836fca16d650"></p>
    
  <p align="center">Seja redirecionado à página do 
<a href="https://alura-geek-wine.vercel.app/" target="_blank">projeto</a></p>



## Projeto CRUD com HTML, CSS e JavaScript

## Objetivo do Projeto
Este projeto foi desenvolvido com o objetivo de praticar operações CRUD (Create, Read, Delete) utilizando HTML, CSS e JavaScript. Através dele, é possível adicionar, visualizar e excluir produtos de uma lista, sendo uma ótima oportunidade para entender como funcionam as interações básicas com dados na web.

## Estrutura do Projeto

### Estrutura de Pastas
O projeto está organizado da seguinte forma:

```
/
├── styles/
│   └── reset.css
|   |__ responsive.css
|   |__ style.css
├── db/
│   └── db.json
├── script/
│   ├── api.js
│   └── dom.js
├   └── main.js
├── index.html
└── README.md
```

### Importância de Cada Etapa
- **index.html**: O arquivo principal da aplicação. Contém a estrutura básica da interface do usuário.
- **css/styles.css**: Contém todas as estilizações utilizadas para dar aparência e responsividade ao projeto.
- **db/db.json**: Simula um banco de dados com as informações dos produtos, utilizado pelo json-server.
- **js/api.js**: Centraliza as requisições à API, facilitando a manutenção e a leitura do código.
- **js/dom.js**: Manipula o DOM (Document Object Model), criando e atualizando os elementos visuais da página. 
- **Observações**: Para visualizar o projeto, é necessário instalar o json-server globalmente. Execute o comando `npm install -g json-server` na pasta do projeto. Em seguida, no terminal do VS Code, inicie o json-server com o comando `json-server --watch db/db.json`. Esse comando conecta a API ao projeto. Caso esses passos não sejam seguidos, o projeto não será exibido corretamente na página web. Após iniciar o json-server, clique com o botão direito do mouse no arquivo `index.html` e selecione "Open with Live Server", uma extensão do VS Code que permite visualizar o projeto em uma página web.

## Padrões Utilizados e Guideline

### Estrutura do HTML
- Utilizamos elementos semânticos como `<header>`, `<section>` e `<footer>` para melhorar a acessibilidade e a organização do código.
- Utilizamos classes e IDs de forma clara e descritiva para facilitar a estilização e a manipulação dos elementos.

### Estrutura do JavaScript
- **api.js**: 
  - Centraliza todas as funções de requisição à API (`fetchProducts`, `addProduct`, `deleteProduct`).
  - Utiliza async/await para lidar com operações assíncronas de forma mais legível.
- **dom.js**:
  - Contém funções para criar elementos do DOM (`createCard`) e atualizar a interface (`renderProducts`).
  - Utiliza eventos para capturar interações do usuário, como a adição e exclusão de produtos.
  - Separa claramente a lógica de manipulação de dados (api.js) da manipulação do DOM.

## Responsividade no Projeto

Para garantir que o projeto seja responsivo, foram utilizadas media queries no CSS. Estas regras fazem com que a disposição dos elementos se adapte de acordo com a largura da tela, proporcionando uma melhor experiência de usuário em dispositivos móveis e tablets. A seguir, estão algumas das estratégias utilizadas:

- **Layout Flexível**: Utilização de Flexbox e Grid Layout para organizar os elementos da página.
- **Media Queries**: Adaptação do layout para diferentes tamanhos de tela, como smartphones, tablets e notebooks.

## Informações Adicionais

- **Simulação de Banco de Dados**: Foi utilizado o json-server para simular uma API RESTful, permitindo a interação com um arquivo JSON (`db.json`) como se fosse um banco de dados real.
- **Tratamento de Erros**: As funções de requisição à API incluem tratamento de erros para garantir que o usuário seja notificado caso algo dê errado.
- **Interatividade**: O projeto inclui interatividade através de eventos, como a submissão do formulário para adicionar novos produtos e a exclusão de produtos existentes.
- **Boa Prática de Código**: O código foi estruturado de maneira modular, separando responsabilidades em diferentes arquivos (`api.js` e `dom.js`), seguindo princípios de boa prática de programação.

Com estas orientações e informações, esperamos que você consiga entender e desenvolver projetos com CRUD utilizando HTML, CSS e JavaScript, aplicando boas práticas e garantindo a responsividade das suas aplicações.

## Objetivo do Projeto
Este projeto foi desenvolvido com o objetivo de praticar operações CRUD (Create, Read, Delete) utilizando HTML, CSS e JavaScript. Através dele, é possível adicionar, visualizar e excluir produtos de uma lista, sendo uma ótima oportunidade para entender como funcionam as interações básicas com dados na web.

## Estrutura do Projeto

### Estrutura de Pastas
O projeto está organizado da seguinte forma:

```
/
├── css/
│   └── styles.css
├── db/
│   └── db.json
├── js/
│   ├── api.js
│   └── dom.js
├── index.html
└── README.md
```

### Importância de Cada Etapa
- **index.html**: O arquivo principal da aplicação. Contém a estrutura básica da interface do usuário.
- **css/styles.css**: Contém todas as estilizações utilizadas para dar aparência e responsividade ao projeto.
- **db/db.json**: Simula um banco de dados com as informações dos produtos, utilizado pelo json-server.
- **js/api.js**: Centraliza as requisições à API, facilitando a manutenção e a leitura do código.
- **js/dom.js**: Manipula o DOM (Document Object Model), criando e atualizando os elementos visuais da página.

## Padrões Utilizados e Guideline

### Estrutura do HTML
- Utilizamos elementos semânticos como `<header>`, `<section>` e `<footer>` para melhorar a acessibilidade e a organização do código.
- Utilizamos classes e IDs de forma clara e descritiva para facilitar a estilização e a manipulação dos elementos.

### Estrutura do JavaScript
- **api.js**: 
  - Centraliza todas as funções de requisição à API (`fetchProducts`, `addProduct`, `deleteProduct`).
  - Utiliza async/await para lidar com operações assíncronas de forma mais legível.
- **dom.js**:
  - Contém funções para criar elementos do DOM (`createCard`) e atualizar a interface (`renderProducts`).
  - Utiliza eventos para capturar interações do usuário, como a adição e exclusão de produtos.
  - Separa claramente a lógica de manipulação de dados (api.js) da manipulação do DOM.

## Responsividade no Projeto

Para garantir que o projeto seja responsivo, foram utilizadas media queries no CSS. Estas regras fazem com que a disposição dos elementos se adapte de acordo com a largura da tela, proporcionando uma melhor experiência de usuário em dispositivos móveis e tablets. A seguir, estão algumas das estratégias utilizadas:

- **Layout Flexível**: Utilização de Flexbox e Grid Layout para organizar os elementos da página.
- **Media Queries**: Adaptação do layout para diferentes tamanhos de tela, como smartphones, tablets e notebooks.

## Informações Adicionais

- **Simulação de Banco de Dados**: Foi utilizado o json-server para simular uma API RESTful, permitindo a interação com um arquivo JSON (`db.json`) como se fosse um banco de dados real.
- **Tratamento de Erros**: As funções de requisição à API incluem tratamento de erros para garantir que o usuário seja notificado caso algo dê errado.
- **Interatividade**: O projeto inclui interatividade através de eventos, como a submissão do formulário para adicionar novos produtos e a exclusão de produtos existentes.
- **Boa Prática de Código**: O código foi estruturado de maneira modular, separando responsabilidades em diferentes arquivos (`api.js` e `dom.js`), seguindo princípios de boa prática de programação.

## Observações finais:
<p>
    <h3><img width="30" src="https://github.com/user-attachments/assets/872d1481-75c2-4d9a-899c-c98b2f12ae58"> O projeto ainda tem algumas pendências como:  </h3></p>
 
- [ ] Campo formulário inserir nome aceitar somente strings
- [ ] A API externa não aceita exclusão somente adição de produtos. Vou tentar hospedar um JSON Server no Heroku, Vercel, ou qualquer outro serviço que suporte operações de escrita.
- [ ] Mas se você atualizar a página os card volta ao normal
- [ ] O projeto está funcionando corretamente localmente
- [ ]  Para gerar link API externa: https://my-json-server.typicode.com/
- [ ]   Gerador gradiente CSS: https://cssgradient.io/

  

Atravé da Formação Front-end da Alura nos fez  entender e desenvolver projetos com CRUD utilizando HTML, CSS e JavaScript, aplicando boas práticas e garantindo a responsividade das aplicações.

Esta Formação Front-End T6 - ONE faz parte do programa  [ONE](https://www.oracle.com/br/education/oracle-next-education/), parceria de  [Alura ](https://www.alura.com.br/), + Oracle
- **Programa:** Oracle Next Education
A tecnologia é para todos em parceria com a Alura

O ONE é um programa de educação e empregabilidade com objetivo social de capacitar pessoas em tecnologia e conectá-las com o mercado de trabalho por meio de empresas parceiras.

O curso é 100% online e totalmente gratuito, feito para quem não teve acesso à educação de qualidade e deseja transformar a sua realidade social.


## Tecnologias utilizadas

<a href="#" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="html" width="40" height="40"/></a> 

<a href="#" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="css" width="40" height="40"/> </a> 

<a href="#" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="css" width="40" height="40"/> </a> 

<a href="#" target="_blank"> <img src="https://github.com/user-attachments/assets/4e4c7319-4085-4c9d-b1a1-8686ffa5ac68" alt="" width="40" height="40"/> </a> 


 
