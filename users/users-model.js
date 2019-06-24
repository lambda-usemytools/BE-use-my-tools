const db = require('../data/dbConfig');

module.exports = {
    add,
    find,
    findBy,
    findById,
};

function find() {
    return db('users')
    .select('id', 'first_name', 'last_name', 'email', 'password' );
}

function findBy(filter) {
    return db('users').where(filter);
}

async function add(user) {
    return db('users')
    .insert(user, 'id')
    .then(ids => {
      return db('users')
        .where({ id : ids[0] })
        .first();
    });
}

function findById(id) {
    return db('users')
    .where({ id })
    .first();
}