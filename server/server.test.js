const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;

// Normal Text Test Case
it('should return Hare Krishna! on /', (done) => {
    request(app)
        .get('/')
        .expect(200)
        .expect('Hare Krishna!')
        .end(done);
});

// Json Test Case
it('should return 400 "Page not found." error json on /error', (done) => {
    request(app)
        .get('/error')
        .expect(404)
        .expect((res) => {
            expect(res.body).toContain({
                error: 'Page not found.'
            });
        })
        .end(done);
});

// Json Array Test Case
it('should contain me on /users', (done) => {
    request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
            expect(res.body).toContain({
                name: 'Abhinav',
                age: 27
            });
        })
        .end(done);
});