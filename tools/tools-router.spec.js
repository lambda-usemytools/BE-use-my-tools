const supertest = require('supertest');
const router = require('./tools-router');

describe('tools router', () => {
    describe('GET /', () => {

        it('responds with 200 OK', () => {
            supertest(router).get('/tools')
            .expect(200)
            .expect('Content-Type', /json/i)
        })

        it('responds wtih 500 ERROR', () => {
            supertest(router).get('/toolz').expect(500)
        })
    })

    describe('POST /', () => {

        it('responds with 200 OK', () => {
            supertest(router).post('/tools')
            .expect(200)
            .expect('Content-Type', /json/i)
        })

        it('responds with 201 GET', () => {
            supertest(router).post('/tools')
            .send({   
                owner_id: 2,
                image: "cooltool.jpg",
                location: "TBD",
                tool_name: "Test Tool",
                tool_description: "Test description",
                rental_price: "$100",
                length_of_rental: "24 hours",
                status: "Rental"   
            })
            .expect(201)
        })

        it('responds with 500 ERROR', () => {
            supertest(router).post('/toolz').expect(500)
        })
    })

    describe('PUT /:id', () => {

        it('responds with 200 UPDATE', () => {
            supertest(router)
            .put('/1')
            .send({ owner_id: 2,
                image: "cooltool.jpg",
                location: "TBD",
                tool_name: "Updated The Tool Name",
                tool_description: "Test description",
                rental_price: "$100",
                length_of_rental: "24 hours",
                status: "Rental"   
            })
            .expect(200)
        })
    })

    describe('DELETE /:id', () => {

        it('responds with 200 DELETE', () => {
            supertest(router)
            .del('/1')
            .expect(200)
        })
    })

})