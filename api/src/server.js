const express = require("express");
const { default: knex } = require("knex");
const server = express();
server.use(express.json());



/**
  * Dit is nodig om het server te linken met het juiste account op pgAdmin
  * @params naam role, password, poort en database pgAdmin
  * @returns verband tussen knex en pgAdmind
  */
const pg = require('knex')({
    client: 'pg',
    version: '14',
    searchPath: ['knex', 'public'],
    connection: process.env.PG_CONNECTION_STRING ? process.env.PG_CONNECTION_STRING : 'postgres://admin:saSDaJnM@games_db:5432/games'
  });


/**
  * Dit is een endpoint dat een object zal maken met verschilllende parameters en daarna invoert in het database
  * @params (object) name, developer, releaseDate, price, platforms, genre
  * @returns (object) nieuwe game met: name, developer, releaseDate, price, platforms, genre 
  */
server.post("/createGame",async(req,res)=>{
    console.log(`new object created`);
    const {
        name, 
        developer, 
        releaseDate, 
        price,
        platforms,
        genre
    } = req.body
    if(name, developer, releaseDate, price, platforms, genre){
          await pg('games').insert({name: name, developer: developer, releaseDate: releaseDate, price: price, platforms: platforms, genre: genre}),
          await pg('genre').insert({genre:genre})
          
          .then(data => {
            res.sendStatus(200);
           
          })
         }
    else{
      res.sendStatus(400);
    }
  });

  

/**
  * Dit is een endpoint dat een genre zal maken met een parameter en daarna invoert in het database
  * @params (object) genre
  * @returns (object) nieuwe genre
  */
server.post("/createGenre", async(req,res)=>{
  console.log(`new genre created`);
  const{
    genre
  } = req.body
  if(genre){
  await pg('genre').insert({genre:genre})
  .then(data => {
    res.sendStatus(200);
  })
}else{
    res.sendStatus(400);
  }
});


/**
  * Dit is een endpoint dat alle games van het database zal tonen
  * @params geen
  * @returns (object) lijst games met hun: name, developer, releaseDate, price, platforms, genre
  */
server.get("/getAllGames", async(req, res) => {
    console.log(`GET all games`);
    await pg.select().from('games')
    .then(data => {
      res.send(data)
    })
});


/**
  * Dit is een endpoint dat alle genres van het database zal tonen
  * @params geen
  * @returns (object) lijst genres met hun genre
  */
 server.get("/getAllGenres", async(req, res) => {
  console.log(`GET all genres`);
  await pg.select().from('genre')
  .then(data => {
    res.send(data)
  })
});



/**
  * Dit is een endpoint dat alle games van het games database zal tonen met het ingegeven ID
  * @params id
  * @returns (object) lijst games met hun: name, developer, releaseDate, price, platforms, genre
  */
server.get("/getGamesByID", async(req, res) => {
    console.log(`GET all games by ID`);
    const {id} = req.body
    await pg.select().from('games').where({id:id})
    .then(data => {
      res.send(data)
    }).catch(err => {
      res.send({
        message: err.stack
      })
    })
});


/**
  * Dit is een endpoint dat alle genres van het genre database zal tonen met het ingegeven ID
  * @params id
  * @returns (object) lijst genre met hun: genre
  */
 server.get("/getGenreByID", async(req, res) => {
  console.log(`GET all games by ID`);
  const {id} = req.body
  await pg.select().from('genre').where({id:id})
  .then(data => {
    res.send(data)
  }).catch(err => {
    res.send({
      message: err.stack
    })
  })
});



/**
  * Dit is een endpoint dat alle games van het database zal tonen met het ingegeven naam
  *  @params name
  * @returns (object) lijst games met hun: name, developer, releaseDate, price, platforms, genre
  */
server.get("/getGamesByName", async(req, res) => {
    console.log(`GET all games by Name`);
    const {name} = req.body
    await pg.select().from('games').where({name:name})
    .then(data => {
      res.send(data)
    }).catch(err => {
      res.send({
        message: err.stack
      })
    })
});


/**
  * Dit is een endpoint dat alle genres van het genre database zal tonen met het ingegeven genre
  * @params genre
  * @returns (object) lijst genre met hun: genre
  */
 server.get("/getGenreByGenre", async(req, res) => {
  console.log(`GET all genre by genre`);
  const {genre} = req.body
  await pg.select().from('genre').where({genre:genre})
  .then(data => {
    res.send(data)
  }).catch(err => {
    res.send({
      message: err.stack
    })
  })
});


/**
  * Dit is een endpoint dat alle games van het database zal tonen met het ingegeven Prijs
  *  @params price
  * @returns (object) lijst games met hun: name, developer, releaseDate, price, platforms, genre
  */
server.get("/getGamesByPrice", async(req, res) => {
    console.log(`GET all objects by price`);
    const {price} = req.body
    await pg.select().from('games').where({price:price})
    .then(data => {
      res.send(data)
    }).catch(err => {
      res.send({
        message: err.stack
      })
    })
});



/**
  * Dit is een endpoint dat alle games van het database zal tonen met het ingegeven developer
  * @params developer
  * @returns (object) lijst games met hun: name, developer, releaseDate, price, platforms, genre
  */
server.get("/getGamesByDeveloper", async(req, res) => {
    console.log(`GET all objects by developer`);
    const {developer} = req.body
    await pg.select().from('games').where({developer:developer})
    .then(data => {
      res.send(data)
    }).catch(err => {
      res.send({
        message: err.stack
      })
    })
});


/**
  * Dit is een endpoint dat alle games van het database zal tonen met het ingegeven genre
  * @params genre
  * @returns (object) lijst games met hun: name, developer, releaseDate, price, platforms, genre
  */
 server.get("/getGamesByGenre", async(req, res) => {
  console.log(`GET all objects by genre`);
  const {genre} = req.body
  await pg.select().from('games').where({genre:genre})
  .then(data => {
    res.send(data)
  }).catch(err => {
    res.send({
      message: err.stack
    })
  })
});





/**
  * Dit is een endpoint dat de paramaters van een object ten opzichte van een gekozen ID door de gebruiker kunnen worden gewijzigd
  * @params id AND (name OR developer OR releaseDate OR price OR platforms)
  * @returns (object) game met zijn gewijzigd: name, developer, releaseDate, price, platforms, genre
  */
server.put('/updateGamesByID', async (req, res) => {
    console.log(`Update object by ID`);
    const {
        id,
        name, 
        developer, 
        releaseDate, 
        price,
        platforms,
        genre
    } = req.body
        await pg('games')
        .where({id: id})
        .update({name: name, developer: developer, releaseDate: releaseDate, price: price, platforms: platforms, genre: genre})
        .then(data => {
          res.sendStatus(200)
        }).catch(err => {
          res.send({
            message: err.stack
          })
        })
  });



/**
  * Dit is een endpoint dat de paramaters van een genre ten opzichte van een gekozen ID door de gebruiker kunnen worden gewijzigd
  * @params id
  * @returns (object) genre met zijn gewijzigd genre
  */
 server.put('/updateGenresByID', async (req, res) => {
  console.log(`Update object by ID`);
  const {
      id,
      genre
  } = req.body
      await pg('genre')
      .where({id: id})
      .update({genre: genre})
      .then(data => {
        res.sendStatus(200)
      }).catch(err => {
        res.send({
          message: err.stack
        })
      })
});



/**
  * Dit is een endpoint dat een game van het database zal verwijderen ten opzichte van het gegeven ID
  * @params id
  * @returns gekozen object word verwijderd
  */
server.delete('/deleteGamesByID', async (req, res) => {
    console.log("Delete object by ID")
    const {id} = req.body
    if(!id) return res.sendStatus(400);
    await pg('games').where({id: id})
    .del()
    .then(data => {
      if(data !== 1) return res.sendStatus(400)
      res.sendStatus(200)
    }).catch(err => {
      res.send({
        message: err.stack
      })
    })
  })


/**
  * Dit is een endpoint dat een genre van het database zal verwijderen ten opzichte van het gegeven ID
  * @params id
  * @returns gekozen object word verwijderd
  */
 server.delete('/deleteGenreByID', async (req, res) => {
  console.log("Delete genre by ID")
  const {id} = req.body
  if(!id) return res.sendStatus(400);
  await pg('genre').where({id: id})
  .del()
  .then(data => {
    if(data !== 1) return res.sendStatus(400)
    res.sendStatus(200)
  }).catch(err => {
    res.send({
      message: err.stack
    })
  })
})


/**
  * Initialisatie van het tabel in pgAdmin 
  * @params geen
  * @returns gemaakte tabels in pgAdmin
  */
  async function initialiseTableGames() {
    await pg.schema.hasTable('games').then(async (exists) => {
      if (!exists) {
        await pg.schema
          .createTable('games', (table) => {
            table.increments();
            table.string('name');
            table.string('developer');
            table.string('releaseDate');
            table.string('price');
            table.string('platforms');
            table.string('genre');
            table.timestamps(true, true);
          })
          .then(async () => {
          });
      }
    });
  }

  async function initialiseTableCategorie() {
  await pg.schema.hasTable('genre').then(async (exists) => {
    if (!exists) {
      await pg.schema
        .createTable('genre', (table) => {
          table.increments();
          table.string('genre');
          table.timestamps(true, true);
        })
        .then(async () => {
        });
      }
    });
    }
  
    async function insertDataInTables() {

      await pg.table("games").insert({
          name: "Rainbow Six Siege",
          developer: "Ubisoft",
          releaseDate: "26/11/2015",
          price: "€59.99",
          platforms: "PlayStation 4, Xbox One, PlayStation 5, Xbox Series, Google Stadia, Microsoft Windows", 
          genre: "FPS"
      });

     
      await pg.table("games").insert({
          name: "Super Mario",
          developer: "Nintendo",
          releaseDate: "04/02/2021",
          price: "€69.99",
          platforms: "Nintendo Switch, Wii U", 
          genre: "Platform"
      });


     
      await pg.table("games").insert({
          name: "Leaugue of Legends",
          developer: "Riot Games",
          releaseDate: "27/10/2009",
          price: "FREE TO PLAY",
          platforms: "Microsoft Windows, IOS", 
          genre: "FPS"
      });

    
      await pg.table("games").insert({
          name: "Overwatch",
          developer: "Blizzard",
          releaseDate: "03/05/2016",
          price: "€39.99",
          platforms: "PlayStation 4, Xbox One, Nintendo Switch, Microsoft Windows", 
          genre: "FPS"
      });

      
      await pg.table("genre").insert({
          genre: "Horror"
      });


      await pg.table("genre").insert({
        genre: "Adventure"
      });

      await pg.table("genre").insert({
        genre: "Puzzle"
    });

    await pg.table("genre").insert({
      genre: "FPS"
    });

  }

  initialiseTableGames();
  initialiseTableCategorie();
  insertDataInTables();

  module.exports = server;
