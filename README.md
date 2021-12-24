# RayanSaidada_DEV5_Werkstuk

## OPEN SOURCE
Dit is een open source API met een lijst van verschillende Games en hun complementaire informatie.

## BRUIKBAARHEID
Met dit API krijg je een lijst van games en hun:  
-Name  
-Developer  
-Release Date  
-Price  
-Platforms  
-Genre


### POST
/createGame:Dit is een endpoint dat een object zal maken van een game met verschilllende parameters en daarna invoert in het database       
/createGenre: Dit is een endpoint dat een object zal maken van een genre met één parameter en daarna invoert in het database

### GET
/getAllGames: Dit is een endpoint dat alle games van het database zal tonen   
/getAllGenres: Dit is een endpoint dat alle genres van het database zal tonen  
/getGamesByID: Dit is een endpoint dat alle games van het games database zal tonen met het ingegeven ID   
/getGenreByID: Dit is een endpoint dat alle genres van het genre database zal tonen met het ingegeven ID  
/getGamesByName: Dit is een endpoint dat alle games van het database zal tonen met het ingegeven naam    
/getGenreByGenre: Dit is een endpoint dat alle genres van het genre database zal tonen met het ingegeven genre  
/getGamesByPrice: Dit is een endpoint dat alle games van het database zal tonen met het ingegeven Prijs  
/getGamesByDeveloper: Dit is een endpoint dat alle games van het database zal tonen met het ingegeven developer     
/getGamesByGenre: Dit is een endpoint dat alle games van het database zal tonen met het ingegeven genre   

### UPDATE
/updateGamesByID: Dit is een endpoint dat de paramaters van een object ten opzichte van een gekozen ID door de gebruiker kunnen worden gewijzigd    
/updateGenresByID: Dit is een endpoint dat de paramaters van een genre ten opzichte van een gekozen ID door de gebruiker kunnen worden gewijzigd  

### DELETE
/deleteGamesByID: Dit is een endpoint dat een game van het database zal verwijderen ten opzichte van het gegeven ID     
/deleteGenreByID: Dit is een endpoint dat een genre van het database zal verwijderen ten opzichte van het gegeven ID    


## INSTRUCTIES
Clone de repisitory  
Open het folder met Visual Studio    
Open het terminal:  
1) npm install  
2) npm start  
3) docker-compose up --build  
  
Surf naar localhost:3000 met uw browser  

## RESOURCES
https://docs.docker.com/  
http://knexjs.org/  
https://www.postgresql.org/  
https://expressjs.com/  
https://jestjs.io/en/  

## AUTEUR EN COPYRIGHT
Dit project is gemaakt door Rayan Saidada  

Contact: Rayan.Saidada@student.ehb.be
