# Logistics API

API para sistema de gerenciamento de pedidos para uma empresa de logística. Este projeto foi desenvolvido com **Node.js**, **Express**, **TypeScript**, e **PostgreSQL**. O sistema permite o gerenciamento de pedidos e proporciona uma base escalável para futuras expansões, com ênfase em performance e segurança.

## Índice

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação e Execução](#instalação-e-execução)
  - [Requisitos](#requisitos)
  - [Passos para Instalação](#passos-para-instalação)
  - [Rodando o Projeto](#rodando-o-projeto)
  - [Rodando os Testes](#rodando-os-testes)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Endpoints da API](#endpoints-da-api)
- [Testes Automatizados](#testes-automatizados)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

## Visão Geral

Este projeto é uma API RESTful para o gerenciamento de pedidos de uma empresa de logística. A API foi construída para ser escalável, modular e de fácil manutenção. Ela oferece operações CRUD (criação, leitura, atualização e exclusão) para os pedidos, além de autenticação com JWT.

O sistema utiliza **PostgreSQL** como banco de dados, **TypeScript** para tipagem estática, e **Jest** para testes automatizados.

---

## Funcionalidades

- **Cadastro de Pedidos**: Permite o cadastro de novos pedidos na plataforma.
- **Listagem de Pedidos**: Permite listar todos os pedidos registrados.
- **Atualização de Pedidos**: Atualiza informações de pedidos existentes.
- **Exclusão de Pedidos**: Exclui um pedido específico da plataforma.
- **Autenticação de Usuários**: Autenticação de usuários usando JWT.
- **Validação de Dados**: Todos os dados de entrada são validados antes de serem armazenados.
- **Testes Automatizados**: Implementação de testes unitários para garantir o funcionamento da aplicação.

---

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no lado do servidor.
- **Express**: Framework para a criação de APIs RESTful.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código.
- **PostgreSQL**: Banco de dados relacional utilizado para armazenar dados dos pedidos.
- **JWT (JSON Web Tokens)**: Utilizado para autenticação de usuários.
- **Jest**: Framework de testes unitários.
- **Nodemon**: Ferramenta para reiniciar automaticamente o servidor durante o desenvolvimento.
- **Sequelize**: ORM (Object Relational Mapper) para interação com o banco de dados.

---

## Instalação e Execução

### Requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- **Node.js** (v14 ou superior)
- **PostgreSQL** (instalado e em execução)
- **NPM** (gerenciador de pacotes do Node.js)

### Passos para Instalação

1. **Clone o repositório** para sua máquina local:
   ```bash
   git clone https://github.com/fullstackpaduavinicius/logistics-api.git
   cd logistics-api

2. **Instale as dependências:**
   npm install
3. **Configure as variáveis de ambiente:**

Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis:
DB_HOST=localhost

DB_USER=seu_usuario

DB_PASSWORD=sua_senha

DB_NAME=logistics_db

JWT_SECRET=sua_chave_secreta

***Estrutura do Projeto***
logistics-api/

├── src/

│   ├── controllers/             # Controladores das rotas

│   │   └── orderController.ts

│   ├── models/                  # Modelos do banco de dados

│   │   └── orderModel.ts

│   ├── routes/                  # Definição das rotas

│   │   └── orderRoutes.ts

│   ├── services/                # Lógica de negócios

│   │   └── orderService.ts

│   ├── app.ts                   # Configuração do Express

│   └── server.ts                # Inicialização do servidor

├── tests/                       # Arquivos de teste

│   └── orderController.test.ts  # Testes para o controlador de pedidos

├── .env                         # Variáveis de ambiente

├── package.json                 # Dependências e scripts

├── tsconfig.json                # Configuração do TypeScript

└── README.md                    # Documentação do projeto


**Endpoints da API**
Abaixo estão os principais endpoints disponíveis na API:

POST /orders: Cria um novo pedido.

GET /orders: Lista todos os pedidos.

GET /orders/:id: Obtém detalhes de um pedido específico.

PUT /orders/:id: Atualiza as informações de um pedido.

DELETE /orders/:id: Exclui um pedido específico.


***Testes Automatizados***
*Os testes foram implementados utilizando o Jest. Eles garantem que as funcionalidades da API estejam funcionando corretamente.*
*Para rodar os testes, execute:*
"npm run test"


***Contribuindo***
*Sinta-se à vontade para contribuir com o projeto! Para isso, siga os seguintes passos:*
1. Fork este repositório
2. Clone seu fork para sua máquina local:
"git clone https://github.com/fullstackpaduavinicius/logistics-api.git"
3. Crie uma nova branch para suas alterações:
"git checkout -b minha-nova-feature"
4. Faça suas alterações e commite-as
"git commit -am "Adicionando nova funcionalidade"
5.Push para o repositório remoto
"git push origin minha-nova-feature"


