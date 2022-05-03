const UserView = require('./../../app/views/UserView');

describe('Tests for UserView class', () => {
	test('Return an error object when try to create a new user with a null payload', () => {
		const payload = null;
		const result = UserView.createUser(payload);
		expect(result.error).toMatch(/payload no existe/);
	});

	test('Return an error object when try to create a new user with a payload with invalid properties', () => {
		const payload = { username: 'user', name: 12, id: null };
		const result = UserView.createUser(payload);
		expect(result.error).toMatch(/Necesitan tener un valor válido/);
	});
});
