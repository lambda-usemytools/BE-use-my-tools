
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('tools').del()
    .then(function () {
      // Inserts seed entries
      return knex('tools').insert([
        {
          "owner_id": 3,
          "image" : "flamethrower.jpg",
          "location": "TBD",
          "tool_name": "Flamethrower",
          "tool_description": "Not a real flamethrower",
          "rental_price": "$1000",
          "length_of_rental": "72 hours",
          "status": "Rental"
        },

        { "owner_id": 2,
        "image" : "tool.jpg",
        "location": "TBD",
        "tool_name": "12v Power Drill",
        "tool_description": "Makita brand 12v power drill with interchangeable attachments and bits",
        "rental_price": "$15",
        "length_of_rental": "48 hours",
        "status": "Rental" },

      ]);
    });
};
