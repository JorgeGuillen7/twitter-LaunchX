const UserService = require('./../services/UserService');

class UserView {
	static createUser(payload) {
		if (payload === null) {
			return { error: 'El payload no existe' };
		} else if (
			payload.username === null ||
			payload.name === null ||
			payload.id === null
		) {
			return { error: 'Necesitan tener un valor válido' };
		} else if (
			typeof payload.username === 'string' &&
			typeof payload.id === 'number' &&
			typeof payload.name === 'string'
		) {
			return UserService.create(
				payload.id,
				payload.username,
				payload.name
			);
		} else {
			return {
				error: 'Las propiedades del payload necesitan tener un valor válido',
			};
		}
	}
}

module.exports = UserView;
