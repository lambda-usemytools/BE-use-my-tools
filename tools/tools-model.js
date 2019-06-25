const db = require('../data/dbConfig');

module.exports = {
    add,
    find,
    findBy,
    findById,
    update, 
    remove,
};

function find() {
    return db('tools');
}

function findBy(filter) {
    return db('tools').where(filter);
}

function findById(id) {
    return db('tools')
    .where({ id })
    .first();
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

function update(id, changes) {
    return db('tools')
      .where({ id })
      .update(changes);
  }

  function remove(id) {
    return db('tools')
      .where('id', id)
      .del();
  }


