const UserService = require('./../../app/services/UserService');

describe('Unit Test for UserService class', () => {
	test('1) Create a new user using method create', () => {
		const user = UserService.create(1, 'CR7', 'Cristiano Ronaldo');

		expect(user.id).toBe(1);
		expect(user.username).toBe('CR7');
		expect(user.name).toBe('Cristiano Ronaldo');
		expect(user.bio).not.toBeUndefined();
	});
});
