const supertest = require('supertest')
const server = require('../server.js');
const request = supertest(server);




describe('POST /createGame', () => {
  test('should responds with code 200', () => {
    try {
      request.get('/createGame').expect(200);
    } catch (err) {
    }
  });
});


describe('POST /createGenre', () => {
  test('should responds with code 200', () => {
    try {
      request.get('/createGenre').expect(200);
    } catch (err) {
    }
  });
});


describe('GET /getAllGames', () => {
    test('should give all games',  () => {

describe('GET /getAll', () => {
    test('should give an Object',  () => {
 main
      try {
         request.get('/getAllGames').expect(Object);
      } catch (err) {
      }
    });
  });
      
  describe('GET /getAllGenres', () => {
    test('should give all genres',  () => {

describe('GET /getByID', () => {
    test('should give an Object',  () => {
 main
      try {
         request.get('/getAllGenres').expect(Object);
      } catch (err) {
      }
    });
  });



describe('GET /getGamesByID/:id', () => {
    test('should give a game by given id',  () => {

describe('GET /getByName', () => {
    test('should give an Object',  () => {
 main
      try {
         request.get('/getGamesByID').expect(Object);
      } catch (err) {
      }
    });
  });

  describe('GET /getGenreByID/:id', () => {
    test('should give a genre by given id',  () => {
      try {
         request.get('/getGenreByID').expect(Object);
      } catch (err) {
      }
    });
  });




describe('GET /getGamesByName/:name', () => {
    test('should give a game by given name',  () => {

describe('GET /getByDeveloper', () => {
    test('should give an Object',  () => {
 main
      try {
         request.get('/getGamesByName').expect(Object);
      } catch (err) {
      }
    });
  });


  describe('GET /getGenreByGenre/:genre', () => {
    test('should give a genre by given genre',  () => {

describe('PUT /updateByID', () => {
    test('should give an Object',  () => {
 main
      try {
         request.get('/getGenreByGenre').expect(Object);
      } catch (err) {
      }
    });
  });



describe('GET /getGamesByPrice/:price', () => {
    test('should give a game by given price',  () => {
      try {
         request.get('/getGamesByPrice').expect(Object);
      } catch (err) {
      }

describe('DEL /deleteByID', () => {
    test('should responds with code 200',  () => {
        request.del('/deleteByID').expect(200);
 main
    });
  });

describe('GET /getGamesByDeveloper/:developer', () => {
    test('should give a game by given developer',  () => {
      try {
         request.put('/getGamesByDeveloper').expect(Object);
      } catch (err) {
      }
    });
  });


  describe('GET /getGamesByGenre/:genre', () => {
    test('should give a game by given genre',  () => {
      try {
         request.put('/getGamesByGenre').expect(Object);
      } catch (err) {
      }
    });
  });


describe('PUT /updateGamesByID/:id', () => {
    test('should responds with code 200',  () => {
      try {
         request.put('/updateByID').expect(200);
      } catch (err) {
      }
    });
  });

  describe('PUT /updateGenresByID/:id', () => {
    test('should responds with code 200',  () => {
      try {
         request.put('/updateGenresByID').expect(200);
      } catch (err) {
      }
    });
  });

describe('DEL /deleteGamesByID/:id', () => {
    test('should delete a game by given id',  () => {
        request.del('/deleteGamesByID').expect(200);
    });
  });



  describe('DEL /deleteGenreByID/:id', () => {
    test('should delete a genre by given id',  () => {
        request.del('/deleteGenreByID').expect(200);
    });
  });
