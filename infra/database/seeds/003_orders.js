
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(function () {
      // Inserts seed entries
      return knex('orders').insert([
        {id: 1, user_id: 2, status: "Realizada", store_id: 5,},
        {id: 2, user_id: 3, status: "Realizada", store_id: 1,},
        {id: 3, user_id: 1, status: "Realizada", store_id: 4,},
        {id: 4, user_id: 5, status: "Realizada", store_id: 2,},
        {id: 5, user_id: 4, status: "Realizada", store_id: 3,},
      ]);
    });
};
