const db = require('../data/dbConfig');

const { add, find, } = require('./users-model');

describe('users model', () => {
    beforeEach(async () => {
        await db('users').truncate();
    })

    it('should set environment to development', () => {
        expect(process.env.DB_ENV).toBe('development');
    })


    describe('find()', () => {
        it('should return all users', async () => {
            await add({ first_name: "Bot", last_name: "One", email: "test@gmail.com", password: "pass"})

            const users = await find();

            expect(users).toHaveLength(1)
        })

        it('should return empty array', async () => {
            const users = await db('users');

            expect(users).toEqual([]);
        })
    })


})