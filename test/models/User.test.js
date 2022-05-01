const User = require('./../../app/models/User');

describe('Unit tests for User class', () => {
	test('1) Create an user object', () => {
		const cristianoRonaldo = new User(
			1,
			'CR7',
			'Cristiano Ronaldo',
			'Futbolista profesional del Manchester United'
		);

		expect(cristianoRonaldo.id).toBe(1);
		expect(cristianoRonaldo.username).toBe('CR7');
		expect(cristianoRonaldo.name).toBe('Cristiano Ronaldo');
		expect(cristianoRonaldo.bio).toBe(
			'Futbolista profesional del Manchester United'
		);
		expect(cristianoRonaldo.dateCreated).not.toBeUndefined();
		expect(cristianoRonaldo.lastUpdated).not.toBeUndefined();
	});
});
