
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('shoppings').del()
    .then(function () {
      // Inserts seed entries
      return knex('shoppings').insert([
        {id: 1, user_id: 2, store_id: 5,},
        {id: 2, user_id: 3, store_id: 1,},
        {id: 3, user_id: 1, store_id: 4,},
        {id: 4, user_id: 5, store_id: 2,},
        {id: 5, user_id: 4, store_id: 3,},
      ]);
    });
};
