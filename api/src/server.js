const express = require("express");
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
  * @params (object) name, developer, releaseDate, price, platforms 
  * @returns (object) nieuwe game met: name, developer, releaseDate, price, platforms 
  */
server.post("/create",async(req,res)=>{
    console.log(`new object created`);
    const {
        name, 
        developer, 
        releaseDate, 
        price,
        platforms
    } = req.body
    if(name, developer, releaseDate, price, platforms){
          await pg('games').insert({name: name, developer: developer, releaseDate: releaseDate, price: price, platforms: platforms})
          .then(data => {
            res.sendStatus(200);
          })
  
    }else{
      res.sendStatus(400);
    }
  });


/**
  * Dit is een endpoint dat alle objecten van het database zal tonen
  * @params geen
  * @returns (object) lijst games met hun: name, developer, releaseDate, price, platforms
  */
server.get("/getAll", async(req, res) => {
    console.log(`GET all objects`);
    await pg.select().from('games')
    .then(data => {
      res.send(data)
    })
});


/**
  * Dit is een endpoint dat alle objecten van het database zal tonen met het ingegeven ID
  * @params id
  * @returns (object) lijst games met hun: name, developer, releaseDate, price, platforms
  */
server.get("/getByID", async(req, res) => {
    console.log(`GET all objects by ID`);
    const {id} = req.body
    await pg.select().from('games').where({id:id})
    .then(data => {
      res.send(data)
    })
});



/**
  * Dit is een endpoint dat alle objecten van het database zal tonen met het ingegeven naam
  *  @params name
  * @returns (object) lijst games met hun: name, developer, releaseDate, price, platforms
  */
server.get("/getByName", async(req, res) => {
    console.log(`GET all objects by Name`);
    const {name} = req.body
    await pg.select().from('games').where({name:name})
    .then(data => {
      res.send(data)
    })
});



/**
  * Dit is een endpoint dat alle objecten van het database zal tonen met het ingegeven Prijs
  *  @params price
  * @returns (object) lijst games met hun: name, developer, releaseDate, price, platforms
  */
server.get("/getByPrice", async(req, res) => {
    console.log(`GET all objects by price`);
    const {price} = req.body
    await pg.select().from('games').where({price:price})
    .then(data => {
      res.send(data)
    })
});



/**
  * Dit is een endpoint dat alle objecten van het database zal tonen met het ingegeven developer
  * @params developer
  * @returns (object) lijst games met hun: name, developer, releaseDate, price, platforms
  */
server.get("/getByDeveloper", async(req, res) => {
    console.log(`GET all objects by developer`);
    const {developer} = req.body
    await pg.select().from('games').where({developer:developer})
    .then(data => {
      res.send(data)
    })
});





/**
  * Dit is een endpoint dat de paramaters van een object ten opzichte van een gekozen ID door de gebruiker kunnen worden gewijzigd
  * @params id AND (name OR developer OR releaseDate OR price OR platforms)
  * @returns (object) game met zijn gewijzigd: name, developer, releaseDate, price, platforms
  */
server.put('/updateByID', async (req, res) => {
    console.log(`Update object by ID`);
    const {
        id,
        name, 
        developer, 
        releaseDate, 
        price,
        platforms
    } = req.body
        await pg('games')
        .where({id: id})
        .update({
            name: name,
            developer: developer,
            releaseDate: releaseDate, 
            price: price,
            platforms: platforms
        })
        .then(data => {
          res.sendStatus(200)
        })
  });




/**
  * Dit is een endpoint dat een game van het database zal verwijderen ten opzichte van het gegeven ID
  * @params id
  * @returns gekozen object word verwijderd
  */
server.delete('/deleteByID', async (req, res) => {
    console.log("Delete object by ID")
    const {id} = req.body
    if(!id) return res.sendStatus(400);
    await pg('games').where({id: id})
    .del()
    .then(data => {
      if(data !== 1) return res.sendStatus(400)
      res.sendStatus(200)
    })
  })



/**
  * Initialisatie van het tabel in pgAdmin 
  * @params geen
  * @returns gemaakte tabels in pgAdmin
  */
  async function initialiseTables() {
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
            table.timestamps(true, true);
          })
          .then(async () => {
          });
      }
    });
  }
  initialiseTables()


  module.exports = server;
