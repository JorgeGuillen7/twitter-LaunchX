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

	test('3) Update Username', () => {
		const userUno = UserService.create(1, 'CR7', 'Cristiano Ronaldo');
		UserService.updateUserUsername(userUno, 'ElComandante');

		expect(userUno.username).toBe('ElComandante');
	});

	test('4) Given a list of users give me the list of usernames', () => {
		const user1 = UserService.create(1, 'username1', 'Nombre1');
		const user2 = UserService.create(2, 'username2', 'Nombre2');
		const user3 = UserService.create(3, 'username3', 'Nombre3');
		const user4 = UserService.create(4, 'username4', 'Nombre4');
		const getUsernames = UserService.getAllUsernames([
			user1,
			user2,
			user3,
			user4,
		]);

		expect(getUsernames).toContain('username1');
		expect(getUsernames).toContain('username2');
		expect(getUsernames).toContain('username3');
		expect(getUsernames).toContain('username4');
	});
});
