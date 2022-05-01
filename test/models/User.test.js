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

	test('2) Add getters', () => {
		const cristianoRonaldo = new User(
			1,
			'CR7',
			'Cristiano Ronaldo',
			'Futbolista profesional del Manchester United'
		);

		expect(cristianoRonaldo.getUsername).toBe('CR7');
		expect(cristianoRonaldo.getBio).toBe(
			'Futbolista profesional del Manchester United'
		);
		expect(cristianoRonaldo.getDateCreated).not.toBeUndefined();
		expect(cristianoRonaldo.getLastUpdated).not.toBeUndefined();
	});

	test('3) Add setters', () => {
		const cristianoRonaldo = new User(
			1,
			'CR7',
			'Cristiano Ronaldo',
			'Futbolista profesional del Manchester United'
		);

		cristianoRonaldo.setUsername = 'ElComandante';
		expect(cristianoRonaldo.username).toBe('ElComandante');

		cristianoRonaldo.setBio = 'La nueva Bio';
		expect(cristianoRonaldo.bio).toBe('La nueva Bio');
	});
});
