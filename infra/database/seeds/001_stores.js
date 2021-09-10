exports.seed = function (knex) {
  return knex('stores')
    .del()
    .then(function () {
      return knex('stores').insert([
        {
          id: 1,
          name: 'MAGALU CAIÇARA',
          cnpj: '32588952000164',
          address: '185 Rua São João',
        },
        {
          id: 2,
          name: 'MAGALU MORUMBI',
          cnpj: '35145671000125',
          address: '650 Praça Guerino Tozzi',
        },
        {
          id: 3,
          name: 'MAGALU MONÇÕES',
          cnpj: '42937574000130',
          address: '582 Praça James Maxwell',
        },
        {
          id: 4,
          name: 'MAGALU CENTRO',
          cnpj: '57523746000105',
          address: '989 Rua Espanha',
        },
        {
          id: 5,
          name: 'MAGALU VILA PAIVA',
          cnpj: '488587247482',
          address: ' 987 Rua do Imperador',
        },
      ]);
    });
};
