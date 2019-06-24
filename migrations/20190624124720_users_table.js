
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments();

        tbl.string('first_name', 255)
        .notNullable();

        tbl.string('last_name', 255)
        .notNullable();

        tbl.string('email', 255)
        .notNullable();

        tbl.string('password', 255)
        .notNullable();
        
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};
