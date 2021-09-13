# Ártemis

![Artemis](https://github.com/DaniCaroline/Artemis/blob/main/public/artemis.jpg)

---

## Descrição do projeto

O objetivo do projeto foi desenvolver um serviço HTTP resolvendo a funcionalidade de Omni Channel do cliente, atendendo os seguintes requisitos:

- Adicionar um produto na lista da compra da cliente;
- Remover um produto da lista da compra da cliente;
- Consultar todos os produtos disponíveis;
- Consultar a lista de compras da cliente.

---

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- [Swagger](https://swagger.io/)
- [MySQL](https://mysql.com)
- [DBeaver](https://dbeaver.io/)
- [Knex.js](http://knexjs.org/)
- [Trello](https://trello.com/)
- [VS Code](https://code.visualstudio.com/)

---

## Pré-requisitos

Aconselhamos instalar o NodeJS atráves do [NVM](https://github.com/nvm-sh/nvm) que é um gerenciador de versões do NodeJS. Após instalá-lo, instalar o NodeJS com o comando:

```
nvm install --lts
```

Instalar o yarn com o comando abaixo:

```
npm i -g yarn
```

Instalar o cli do Knex:

```
npm i -g knex
```

Instalar o MySQL.

Após a instalação do MySQL, execute o comando abaixo para criar o banco de dados:

```
mysql -u root -p
CREATE DATABASE db_xp;
```

Com o banco de dados criado, execute os comandos abaixo para criar e popular as tabelas:

- Criar um arquivo de migração:

```
knex migrate:make migration_name
```

- Inserir a migração no banco de dados:

```
knex migrate:latest
```

- Criar um arquivo seed:

```
knex seed:make seed_name
```

- Para executar arquivos seed:

```
knex seed:run
```

---

## Como iniciar o projeto

- Ambiente de desenvolvimento:

```
yarn start-dev
```

- Ambiente de produção:

```
yarn start
```

O projeto estará disponível em <http://localhost:8000>

---

### Swagger

Acessando a documentação do projeto <http://localhost:8000/docs>.

---

## Desenvolvedoras

- [Daniele Caroline](https://github.com/DaniCaroline)
- [Daniele Rodrigues](https://github.com/livibellyrds)
- [Karina Santos](https://github.com/KarinaFS)
- [Marília Moura](https://github.com/Mariliamourafer)
- [Yasmin Medeiros](https://github.com/medeiros-yasmin)

Projeto desenvolvido na 3° Edição do [Luiza <Code>](https://github.com/luizalabs) em parceiria com a [Gama Academy](https://github.com/gamaacademy).
