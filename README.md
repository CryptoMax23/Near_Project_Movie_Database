# Near_Project_Movie_Database
<<<<<<< HEAD

Short video about the project
----------



Movie Database on Blockchain
----------
This project will ensure basic movie database system to the user.
Decentralized movie database system. 
Movie lovers can make several basic functions on Near Protocol. 

FEATURES
----------
Users can donate 1 NEAR to their favorite movie, rate the movie, update the movie if it is in the TOP100 IMDB, get info about the movie by its ID and of course add movies to the database.

In addition all the transactions stored in the blockchain. 

May come FEATURES 
----------
-Anti-Bot system to prevent high rates
-More parameter for the Movie like Director or whole cast.
-Deleting the wrong informations about the movies by comparing them with other proven databases.
-Deciding what will happen to the donated NEAR. 
-Checking system for user can olny rate once for each movie.

USAGE P1
--------
Prerequisites:
    Current version of Node.js <=v16.14.2
    Check the current version by:
    node -v
Getting Started:
    clone this repo to a local folder
        git clone https://github.com/a-baran-orhan/Near_Project_Movie_Database
    Go to folder
        cd Near_Project_Movie_Database
    Run
        yarn
        yarn dev
    Set contract id
        export CONTRACT=<dev-....>   
    Login to your account for setting user id
        near login
        export USERID=<yourId>
    You can check them with
        echo $CONTRACT
        echo $USERID

Other documentation
    For scripts and instructions about them
        see /scripts/README 

USAGE P2
----------
For adding movie to the database with several parameters:
    near call $CONTRACT create '{"movieTitle":"INSERT MOVIE TITLE","language":"INSERT LANGUAGE","releaseDate":INSERT YEAR,"isTop100":INSERT true OR false}'   --accountId YOUR_ACCOUNT_ID.testnet

For getting movie info by ID:
    near view $CONTRACT getInfo '{"movieId":"INSERT ID HERE"}' --accountId YOUR_ACCOUNT_ID.testnet

For getting the movie list with different offset and limit:
    near view $CONTRACT getMovieList '{"offset":0,"limit":10}' --accountId YOUR_ACCOUNT_ID.testnet

For donate 1 NEAR to movie by ID:
    near call $CONTRACT donate '{"movieId":INSERT MOVIE ID}' --accountId YOUR_ACCOUNT_ID.testnet

For deleting movie by ID:
    near call $CONTRACT deleteMovie '{"movieId":INSERT MOVIE ID}' --accountId YOUR_ACCOUNT_ID.testnet

For rate the movie by ID and number between 0-10:
    near call $CONTRACT rate '{"movieId":INSERT MOVIE ID,"rate":INSERT NUMBER}' --accountId YOUR_ACCOUNT_ID.testnet

For updating the movie if it is in the TOP100 list:
(Do not forget if the movie you added already TOP100 update also with)
    near call $CONTRACT updateTop '{"movieId":INSERT MOVIE ID, "updates":{"isTop100":true} }' --accountId YOUR_ACCOUNT_ID.testnet

For checking the key has value or not in storage:
    near call $CONTRACT read '{"key":"INSERT YOUR KEY"}' --accountId YOUR_ACCOUNT_ID.testnet
        (You can see the your keys with)
            near login
            near keys YOUR_ACCOUNT_ID.testnet
    


=======
PROJECT IS IN PROGRESS
|//--------| %20


Decentralized movie database system on the blockchain. Movie lovers can make several basic functions on the blockchain like add, delete or rate the movies on the database.

This project will ensure basic movie database system to the user.
With using Near Protocol to build this project our database system will be unauthorized and only depends on people's votes and movie knowledge.

In the project view and call methods will be used.
For instance if the user wants to view the ratings of the movie, database will provide it.
Or if the user wants to add new movie to the database, near call command will be used.
For the collections from near-sdk-as PersistentUnorderedMap will be used.
>>>>>>> 7caabedec664e2a9e1e9557cf5289a3ddccf3677
