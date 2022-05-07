ENVIROMENT
----------
    For the scripts usage if the permission denied you can use:
    Basically you are making them executable
        cd scripts
        chmod +x <script_name>.sh 
        cd ..
        ./scripts/<script_name>.sh

    DONT FORGET before using scripts
        export CONTRACT=dev-....-...
        export ADDER=<your-testnet-name>.testnet  (or .mainnet)

COMMANDS
---------

    1.dev-deploy.sh             
    2.reset.sh
    3.movie-list.sh

EXPLAIN FOR COMMANDS
----------

1-  This script is for the cleanup, compile and deploy contract
    Script is taken from the repo:
        https://github.com/Learn-NEAR/NCD.L1.sample--thanks/tree/main/scripts
        
2-
    This script is for the resetting the database,
    It will delete all the movies and user can start clean database.

3-
    This script is for the getting the whole movie list without using
    near view $CONTRACT getMovieList 
