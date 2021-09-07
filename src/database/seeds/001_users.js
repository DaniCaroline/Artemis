
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, nome: "Marília Moura", cpf: "58895200016432", endereco: "185 Rua São João"},
        {id: 2, nome: "Ariele Mendonça", cpf: "67100351450125", endereco: "650 Praça Guerino Tozzi"},
        {id: 3, nome: "Karina Ferreira", cpf: "42000139375740", endereco: "582 Praça James Maxwell"},
        {id: 4, nome: "Daniele Caroline", cpf: "57374605200105", endereco: "989 Rua Espanha"},
        {id: 5, nome: "Yasmin Medeiros", cpf: "874885247482", endereco: "Rua do Imperador"},

      ]);
    });
};