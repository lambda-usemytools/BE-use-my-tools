
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

        tbl.string('location', 255)
        .notNullable()
        .unique();

        tbl.string('tool_name', 255)
        .notNullable();

        tbl.string('tool_description', 255)
        .notNullable();

        tbl.string('length_of_rental', 255)
        .notNullable();

        tbl.string('status', 255)
        .notNullable();
        
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('tools');
};