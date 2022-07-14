# FrontendContest

Este projeto utiliza o workspace gerado pelo [Nx dev](https://nx.dev/). O mock foi construido
usando [NestJS](https://nestjs.com/), com o [LowDB v1](https://github.com/typicode/lowdb/tree/v1.0.0).

O app *api* é um mock da API.  
O app *frontend-contest* é o app a ser desenvolvido

## Instalando

Instale o yarn, o nx e o @nwrl/cli globalmente:

`npm install -g yarn nx @nrwl/cli`

Clone o repositório e execute `yarn`

Em um terminal, execute `nx run frontend-contest:serve`, para iniciar a aplicação em modo
desenvolvimento.

Em outro terminal, execute `nx run api:serve`, para iniciar o mock da API.

## Objetivos

Esta é uma aplicação simples, com uma tela de login, uma lista de usuários, e um formulário de cadastro e edição de
usuários.  
A tela de login só pode ser acessada enquanto o usuário não estiver logado.  
As telas de lista e edição de usuário só podem ser acessadas quando o usuário estiver logado.

### Requisitos

* controle de acesso autenticado/não autenticado
* listar, criar e editar usuários

### Desejáveis

* teste unitário
* utilizar Angular Material

### Diferencial

* fazer o controle de estado usando [NgRx](https://ngrx.io)
* implementar fluxo de recuperar senha
  * Assumir que o usuário receberá um email contendo um link
  * Ao acessar o link, ele acessa a tela de "recovery", para escolher uma nova senha.
