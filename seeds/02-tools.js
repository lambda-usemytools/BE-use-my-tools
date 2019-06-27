
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('tools')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tools').insert([
        {
          "owner_id": 3,
          "tool_name": "Flamethrower",
          "tool_description": "Not a real flamethrower",
          "rental_price": "$1000",
          "length_of_rental": "72 hours",
          "rental" : "true",
          "my_network" : "true",
          "my_garage_only" : "true"
        },

        { "owner_id": 2,
        "tool_name": "12v Power Drill",
        "tool_description": "Makita brand 12v power drill with interchangeable attachments and bits",
        "rental_price": "$15",
        "length_of_rental": "48 hours",
        "rental" : "true",
        "my_network" : "true",
        "my_garage_only" : "true"
      },

      ]);
    });
};
