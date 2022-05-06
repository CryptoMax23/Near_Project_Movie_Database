#!/usr/bin/env bash
set -e


[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1
[ -z "$USERID" ] && echo "Missing \$INSURED environment variable" && exit 1

echo
echo 'About to call getMovieList() on the contract'
echo near call \$CONTRACT getMovieList '{"offset":0,"limit":20}' --account_id \$USERID 
echo
echo
echo \$CONTRACT is $CONTRACT
echo \$USERID is $USERID
echo 
echo 
echo
near call $CONTRACT getMovieList '{"offset":0,"limit":20}' --account_id $USERID