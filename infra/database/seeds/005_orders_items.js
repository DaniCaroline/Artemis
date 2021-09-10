
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('orders_items').del()
    .then(function () {
      // Inserts seed entries
      return knex('orders_items').insert([
        {id: 1, orders_id: 2, product_id: 1},
        {id: 2, orders_id: 1, product_id: 5},
        {id: 3, orders_id: 3, product_id: 3},
      ]);
    });
};
