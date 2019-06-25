const db = require('../data/dbConfig');

module.exports = {
    add,
    find,
    findBy,
    findById,
};

function find() {
    return db('tools');
}

function findBy(filter) {
    return db('tools').where(filter);
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