
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Marília Moura', cpf: '12345678901', address: '185 Rua São João'},
        {id: 2, name: 'Ariele Mendonça', cpf: '23456183456', address: '650 Praça Guerino Tozzi'},
        {id: 3, name: 'Karina Ferreira', cpf: '28950361721', address: '582 Praça James Maxwell'},
        {id: 4, name: 'Daniele Caroline', cpf: '56372819601', address: '989 Rua Espanha'},
        {id: 5, name: 'Yasmin Medeiros', cpf: '45218991231', address: 'Rua do Imperador'},

      ]);
    });
};