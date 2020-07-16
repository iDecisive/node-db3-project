const db = require('../data/schemesConfig.js');

const find = (_) => {
	return db('schemes');
};

const findById = (id) => {
	return db('schemes').where({ id }).first();
};

const findSteps = (id) => {
	return db('steps').where({ id }); //Not done. also read the resolves to null thing
};

const add = (obj) => {
	return db('schemes')
		.insert(obj)
		.then((returned) => {
			return returned;
		})
		.catch((err) => {
			return err;
		});
};

const update = (changes, id) => {
	return db('schemes')
		.where({ id })
		.update(changes)
		.then((_) => {
			return db('schemes').where({ id }).first();
		});
};

const remove = (id) => {
	return db('schemes')
		.where({ id })
		.first()
		.then((found) => {
			return db('schemes')
				.where({ id })
				.del()
				.then((_) => {
					return found;
				})
				.catch((err) => err);
		});
};

module.exports = {
	find,
	findById,
	findSteps,
	add,
	update,
	remove,
};
