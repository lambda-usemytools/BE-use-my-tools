const db = require('../data/dbConfig');

module.exports = {
    add,
    find,
    findById,
};

function find() {
    return db('tools')
    .select('id', 'location', 'tool_name', 'tool_description', 'rental_price', 'length_of_rental', 'status' );
}

async function add(tool) {
    return db('tools')
    .insert(tool, 'id')
    .then(ids => {
      return db('tools')
        .where({ id : ids[0] })
        .first();
    });
}

function findById(id) {
    return db('tools')
    .where({ id })
    .first();
}