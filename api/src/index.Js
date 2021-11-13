const server = require('./server.js');
const PORT = 3000;

/**
  * laat het server luisteren naar het juiste poort om het te kunnen gebruiken
  * @params PORT
  * @returns verband met server en console log van welke poort gebruikt wordt
  */
 server.listen(PORT, () => {
    console.log(`Server listening at ${PORT}`);
});

