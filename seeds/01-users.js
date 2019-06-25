
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { first_name: "test", last_name: "account", email: "test@gmail.com", password: "pass" },
        { first_name: "Jim", last_name: "Bean", email: "jimbean@gmail.com", password: "pass" },
        { first_name: "Jack", last_name: "Black", email: "jackblack@gmail.com", password: "pass" },
      ]);
    });
};
