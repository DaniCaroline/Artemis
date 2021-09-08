
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, nome: 'Marília Moura', cpf: '12345678901', endereco: '185 Rua São João'},
        {id: 2, nome: 'Ariele Mendonça', cpf: '23456183456', endereco: '650 Praça Guerino Tozzi'},
        {id: 3, nome: 'Karina Ferreira', cpf: '28950361721', endereco: '582 Praça James Maxwell'},
        {id: 4, nome: 'Daniele Caroline', cpf: '56372819601', endereco: '989 Rua Espanha'},
        {id: 5, nome: 'Yasmin Medeiros', cpf: '45218991231', endereco: 'Rua do Imperador'},

        

      ]);
    });
};