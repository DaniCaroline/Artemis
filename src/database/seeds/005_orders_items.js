
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('shoppings_items').del()
    .then(function () {
      // Inserts seed entries
      return knex('shoppings_items').insert([
        {id: 1, shopping_id: 2, product_id: 1},
        {id: 2, shopping_id: 1, product_id: 5},
        {id: 3, shopping_id: 3, product_id: 3},
      ]);
    });
};
