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

	test('Return an error object when try to create a new user with a payload with missing properties', () => {
		const payload = { username: 'username' };
		const result = UserView.createUser(payload);
		expect(result.error).toMatch(/necesitan tener un valor válido/);
	});

	test('Create a user by a given valid payload', () => {
		const payload = { username: 'username', id: 1, name: 'name' };
		const result = UserView.createUser(payload);
		expect(result.username).toBe('username');
		expect(result.id).toBe(1);
		expect(result.name).toBe('name');
	});
});
