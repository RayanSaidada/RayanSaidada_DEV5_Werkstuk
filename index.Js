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