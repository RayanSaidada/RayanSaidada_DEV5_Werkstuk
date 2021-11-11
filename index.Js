const express = require("express");
const server = express();
const PORT = 1081;


server.get("/", (req, res)=> {
    const games = { 
    name: 'Final Fantasy XV',
    developer: "Square Enix", 
    releaseDate: "29/11/2016" ,
    price: "€69.99" ,
    platforms: "PS4, XBOX ONE, PC" 
    };

    res.json(games)
})


server.listen(PORT, () => {
    console.log(`Server listening at ${PORT}`);
});