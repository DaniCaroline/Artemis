# OMNI CHANNEL - Artemis

![Artemis](https://github.com/DaniCaroline/Artemis/blob/main/public/artemis.jpg)

---
## Descrição
Desenvolver um serviço HTTP resolvendo a funcionalidade de Omni Channel do cliente, atendendo os seguintes requisitos:

* Adicionar um produto na lista da compra da cliente;
* Remover um produto da lista da compra da cliente; 
* Consultar todos os produtos disponíveis; 
* Consultar a lista de compras da cliente.

---
## Tecnologias
- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- [Swagger](https://swagger.io/)
- [MySQL](mysql.com)
- [DBeaver](https://dbeaver.io/)
- [Knex](http://knexjs.org/)
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

Após a instalação do MySQL criar o banco, conforme abaixo:
```
mysql -u root -p
CREATE DATABASE db_xp;
```

Com o banco de dados criados, execute os comandos abaixo, para criar e popular as tabelas:

- criar as tabelas:
```
knex migrade:latest
```

- inserir dados:
```
knex seed:run
```

---
## Como iniciar o projeto
- ambiente de desenvolvimento:
```
yarn start-dev
```

- ambiente de produção:
```
yarn start
```
O projeto estará disponível em <http://localhost:8000>

---

### Swagger

Acessando a documentação do projeto <http://localhost:8000/docs>.

---

## Desenvolvedoras
* [Daniele Caroline](https://github.com/DaniCaroline)
* [Daniele Rodrigues](https://github.com/livibellyrds)
* [Karina Ferreira](https://github.com/KarinaFS)
* [Marília Moura](https://github.com/Mariliamourafer)
* [Yasmin Medeiros](https://github.com/medeiros-yasmin)
---
