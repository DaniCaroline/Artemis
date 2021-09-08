
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {id: 1, descricao: 'Smartphone Samsung Galaxy S20', valor: 899.90, tipo: 'Smartphone'},
        {id: 2, descricao: 'Mesa para computador MDF- Pequena', valor: 499.90, tipo: 'Móvel'},
        {id: 3, descricao: 'Os homens que não amavam as mulheres', valor: 39.99, tipo: 'Livro'},
        {id: 4, descricao: 'Notebook Acer VX 15', valor: 3300.99, tipo: 'Eletrônico'},
        {id: 5, descricao: 'Refrigerador Electrolux Multidoor DM84X Frost Free', valor: 5199.90, tipo: 'Eletrodomésticos'}
      ]);
    });
};
