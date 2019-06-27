
exports.up = function(knex, Promise) {
    return knex.schema.createTable('tools', tbl => {
        tbl.increments();

        tbl.integer('owner_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

        // tbl.string('image', 255)

        // tbl.string('location', 255)
        
        tbl.string('tool_name', 255)
        .notNullable();

        tbl.string('tool_description', 255)
        .notNullable();

        tbl.string('rental_price', 255)
        .notNullable(); 

        tbl.string('length_of_rental', 255)
        .notNullable();

        tbl.boolean('rental', 255)
        .notNullable();

        tbl.boolean('my_network', 255)
        .notNullable();

        tbl.boolean('my_garage_only', 255)
        .notNullable();

    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('tools');
};
