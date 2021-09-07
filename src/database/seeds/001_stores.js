exports.seed = function (knex) {
  return knex('stores')
    .del()
    .then(function () {
      return knex('stores').insert([
        {
          id: 1,
          nome: 'MAGALU CAIÇARA',
          cnpj: '32588952000164',
          endereco: '185 Rua São João',
        },
        {
          id: 2,
          nome: 'MAGALU MORUMBI',
          cnpj: '35145671000125',
          endereco: '650 Praça Guerino Tozzi',
        },
        {
          id: 3,
          nome: 'MAGALU MONÇÕES',
          cnpj: '42937574000130',
          endereco: '582 Praça James Maxwell',
        },
        {
          id: 4,
          nome: 'MAGALU CENTRO',
          cnpj: '57523746000105',
          endereco: '989 Rua Espanha',
        },
        {
          id: 5,
          nome: 'MAGALU VILA PAIVA',
          cnpj: '488587247482',
          endereco: 'Rua do Imperador',
        },
      ]);
    });
};
