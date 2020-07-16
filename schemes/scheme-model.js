const db = require('../data/schemesConfig.js');

const find = (_) => {
	return db('schemes');
};

const findById = (id) => {
	return db('schemes').where({ id }).first();
};

const findSteps = (id) => {
	return db('schemes')
		.join('steps', 'steps.scheme_id', 'schemes.id')
		.where('steps.scheme_id', id)
		.select(
			'schemes.id',
			'schemes.scheme_name',
			'steps.step_number',
			'steps.instructions'
		)
		.orderBy('steps.step_number');
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
