
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {id: 1, description: 'Smartphone Samsung Galaxy S20', value: 899.90, type: 'Smartphone'},
        {id: 2, description: 'Mesa para computador MDF- Pequena', value: 499.90, type: 'Móvel'},
        {id: 3, description: 'Os homens que não amavam as mulheres', value: 39.99, type: 'Livro'},
        {id: 4, description: 'Notebook Acer VX 15', value: 3300.99, type: 'Eletrônico'},
        {id: 5, description: 'Refrigerador Electrolux Multidoor DM84X Frost Free', value: 5199.90, type: 'Eletrodomésticos'}
      ]);
    });
};
