const express = require("express");
const server = express();
const PORT = 1081;
server.use(express.json());

const pg = require('knex')({
    client: 'pg',
    version: '14',
    searchPath: ['knex', 'public'],
    connection: process.env.PG_CONNECTION_STRING ? process.env.PG_CONNECTION_STRING : 'postgres://admin:saSDaJnM@localhost:5432/games'
  });


//CREATE
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


//GETALL
server.get("/getAll", async(req, res) => {
    console.log(`GET all objects`);
    await pg.select().from('games')
    .then(data => {
      res.send(data)
    })
});


//GETBYID
server.get("/getByID", async(req, res) => {
    console.log(`GET all objects by ID`);
    const {id} = req.body
    await pg.select().from('games').where({id:id})
    .then(data => {
      res.send(data)
    })
});


//GETBYNAME
server.get("/getByName", async(req, res) => {
    console.log(`GET all objects by Name`);
    const {name} = req.body
    await pg.select().from('games').where({name:name})
    .then(data => {
      res.send(data)
    })
});


//GETBYPRICE
server.get("/getByPrice", async(req, res) => {
    console.log(`GET all objects by price`);
    const {price} = req.body
    await pg.select().from('games').where({price:price})
    .then(data => {
      res.send(data)
    })
});


//GETBYDEVELOPER
server.get("/getByDeveloper", async(req, res) => {
    console.log(`GET all objects by developer`);
    const {developer} = req.body
    await pg.select().from('games').where({developer:developer})
    .then(data => {
      res.send(data)
    })
});




//UPDATEBYID
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





//DELETEBYID
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



//INITIALISE
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



//LISTEN
server.listen(PORT, () => {
    console.log(`Server listening at ${PORT}`);
});