const supertest = require('supertest');
const router = require('./users-routers');

describe('users router', () => {
    describe('GET /', () => {

        it('responds with 200 OK', () => {
            supertest(router).get('/users').expect(200)
        })

        it('responds with 200 OK', () => {
            supertest(router).get('/users').expect('Content-Type', /json/i)
        })

        it('responds wtih 500 ERROR', () => {
            supertest(router).get('/userz').expect(500)
        })
    })

    describe('POST /', () => {

        it('responds with 200 OK', () => {
            supertest(router).post('/users').expect(200);
        })

        it('responds with 200 OK', () => {
            supertest(router).post('/users').expect('Content-Type', /json/i)
        })

        it('responds with 201 POST', () => {
            supertest(router).post('/users')
            .send({   
                "first_name": "Bot",
                "last_name": "One",
                "email": "test@gmail.com",
                "password": "pass"
            })
            .expect(201)
        })

        it('responds with 500 ERROR', () => {
            supertest(router).post('/userz').expect(500)
        })

    })

})