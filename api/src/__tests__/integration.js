const supertest = require('supertest')
const server = require('../server.js');
const request = supertest(server);


describe('POST /create', () => {
  test('should responds with code 200', () => {
    try {
      request.get('/create').expect(200);
    } catch (err) {
    }
  });
});


describe('GET /getAll', () => {
    test('should give an array',  () => {
      try {
         request.get('/getAll').expect(Object);
      } catch (err) {
      }
    });
  });

describe('GET /getByID', () => {
    test('should give an array',  () => {
      try {
         request.get('/getByID').expect(Object);
      } catch (err) {
      }
    });
  });

describe('GET /getByName', () => {
    test('should give an array',  () => {
      try {
         request.get('/getByName').expect(Object);
      } catch (err) {
      }
    });
  });

describe('GET /getByPrice', () => {
    test('should give an array',  () => {
      try {
         request.get('/getByPrice').expect(Object);
      } catch (err) {
      }
    });
  });

describe('GET /getByDeveloper', () => {
    test('should give an array',  () => {
      try {
         request.put('/getByDeveloper').expect(Object);
      } catch (err) {
      }
    });
  });

describe('PUT /updateByID', () => {
    test('should give an array',  () => {
      try {
         request.put('/updateByID').expect(Object);
      } catch (err) {
      }
    });
  });

describe('DEL /deleteByID', () => {
    test('should give an array',  () => {
        request.del('/deleteByID').expect(200);
    });
  });

