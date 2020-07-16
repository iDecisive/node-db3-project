const db = require('../data/schemesConfig.js');

const find = (_) => {
	return db('schemes');
};

const findById = (id) => {
	return db('schemes').where({ id }).first();
};

const findSteps = (id) => {
	return db('steps').where({ id }); //Not done
};

const add = (obj) => {
	return db('schemes').insert(obj).then(returned => {
        return returned;
    }).catch(err => {
        return err
    });
};

const update = (changes, id) => {};

const remove = (id) => {};

module.exports = {
	find,
	findById,
	findSteps,
	add,
	update,
	remove,
};
