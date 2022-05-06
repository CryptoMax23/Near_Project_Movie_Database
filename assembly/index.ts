//assembly/index.ts

import { storage ,context} from "near-sdk-as";
import {Movie, Movies, top100Movie} from "./model";


//near call $CONTRACT create '{"movieTitle":"INSERT HERE","language":"INSEET HERE","releaseDate":INSERT HERE,"isTop100":TRUE OR F}'   --accountId YOUR_ACCOUNT_ID.testnet
export function create(movieTitle:string,language:string,releaseDate:u32,isTop100:bool): Movie {
  return Movie.insert(movieTitle,language,releaseDate,isTop100);
}

//near view $CONTRACT getInfo '{"movieId":"INSERT ID HERE"}' --accountId YOUR_ACCOUNT_ID.testnet
export function getInfo(movieId:u32):Movie{
  return Movie.findById(movieId);
}

//near view $CONTRACT getMovieList '{"offset":0,"limit":2}' --accountId YOUR_ACCOUNT_ID.testnet
export function getMovieList(offset:u32,limit:u32):Movie[]{
  return Movie.findList(offset,limit);
}

//near call $CONTRACT donate '{"movieId":3593132102}' --accountId baranorhan.testnet
export function donate(movieId:u32):string {
  return Movie.donate(movieId);
}

//near call $CONTRACT deleteMovie '{"movieId":ID}' --accountId YOUR_ACCOUNT_ID.testnet
export function deleteMovie(movieId:u32): string{
  return Movie.findAndDelete(movieId);
}

//near call $CONTRACT rate '{"movieId":3593132102,"rate":9}' --accountId baranorhan.testnet
//rate between 0-10
export function rate(movieId:u32,rate:u32):string{
  return Movie.rate(movieId,rate);
}

//UPDATE THE MOVIE TO THE TOP 100 LIST
//near call $CONTRACT updateTop '{"movieId":ID, "updates":{"isTop100":true} }' --accountId YOUR_ACCOUNT_ID.testnet
export function updateTop(movieId:u32,updates:top100Movie):Movie{
  return Movie.findAndUpdate(movieId,updates);
}

//RESET FUNCTION FOR THE 2.reset.sh script
export function reset():void{
  Movies.clear();
}

// read the given key from account (contract) storage
//near call $CONTRACT read '{"key":"88015594000000"}' --accountId baranorhan.testnet
export function read(key: string): string {
  if (storage.hasKey(key)) {
    return `✅ Key [ ${key} ] has value [ ${storage.getString(key)!} ]`
  } else {
    return `🚫 Key [ ${key} ] not found in storage. ( ${storageReport()} )`
  }
}
// function for the read() method 
function storageReport(): string {
  return `storage [ ${context.storageUsage} bytes ]`
}

