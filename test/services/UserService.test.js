const UserService = require('./../../app/services/UserService');

describe('Unit Test for UserService class', () => {
	test('1) Create a new user using method create', () => {
		const user = UserService.create(1, 'CR7', 'Cristiano Ronaldo');

		expect(user.id).toBe(1);
		expect(user.username).toBe('CR7');
		expect(user.name).toBe('Cristiano Ronaldo');
		expect(user.bio).not.toBeUndefined();
	});

	test('2) Get all user data in a list', () => {
		const userUno = UserService.create(1, 'CR7', 'Cristiano Ronaldo');
		const userInfoInList = UserService.getInfo(userUno);

		expect(userInfoInList[0]).toBe(1);
		expect(userInfoInList[1]).toBe('CR7');
		expect(userInfoInList[2]).toBe('Cristiano Ronaldo');
		expect(userInfoInList[3]).toBe('Sin bio');
	});
});
