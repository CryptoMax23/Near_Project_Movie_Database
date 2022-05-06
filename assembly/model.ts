//assembly/model.ts

import { PersistentUnorderedMap, math, context, u128,ContractPromiseBatch, storage } from "near-sdk-as";
import { ONE_NEAR} from "./utils";



export const Movies = new PersistentUnorderedMap<u32,Movie> ("movies");

@nearBindgen
export class top100Movie {
  isTop100:bool; // for the update purpose. 
}
@nearBindgen
export class Movie {
  movieId:u32;
  movieTitle:string;
  language:string;
  releaseDate:u32; 
  donatedNear:u32; 
  totalRate:u32;
  numOfRater:u32; //how many user rated so far
  userId:string; //will be used in donate method and in the script
  isTop100:bool; //default is false but user can update it by the update method 
  

  constructor(movieTitle:string,language:string,releaseDate:u32,isTop100:bool){
    
    this.movieId = math.hash32<string>(movieTitle);
    this.movieTitle = movieTitle;
    this.language = language;
    this.releaseDate = releaseDate;
    this.donatedNear= 0;
    this.totalRate = 0;
    this.numOfRater = 0;
    this.userId = context.predecessor;
    this.isTop100 = false;
   
  }

  //****CREATE**** OPERATION
  static insert (movieTitle:string,language:string,releaseDate:u32,isTop100:bool): Movie{

    // new movie is created with defined parameters
    const newMovie = new Movie(movieTitle,language,releaseDate,isTop100);


    //adding new movie object to the Unorderedmap, our key value pair is movieId AND new movie
    Movies.set(newMovie.movieId,newMovie)
    return newMovie;
    
    
  }
  //****READ**** OPERATION
  static findById(movieId:u32):Movie{
    assert(Movies.contains(movieId), "No movie with the entered ID");
    return Movies.getSome(movieId);
  }

  //****UPDATE OPERATION****
  //UPDATING THE MOVIE WHEN ADDED MOVIE WAS NOT IN THE TOP100 AND BECOME TOP 100 NOW 
  static findAndUpdate(movieId:u32,updated:top100Movie):Movie {

    const updatedMovie = this.findById(movieId);
    assert(Movies.contains(movieId), "No movie for the entered ID");
    updatedMovie.isTop100 = updated.isTop100;

    //Movies.set(updatedMovie.movieId,updatedMovie);
    Movies.set(movieId,updatedMovie);
    return updatedMovie;
  }
  //****DELETE**** OPERATION
  static findAndDelete(movieId:u32): string{
    Movies.delete(movieId);
    return 'Movie deleted from database.'
   
  }

  //DONATING 1 NEAR 
  //DONATION CAN BE CHANGED FROM THE LINE 7 with the const amount 
  static donate(movieId:u32): string{
    const movie = Movie.findById(movieId);
    const amount = ONE_NEAR;
    const recipient = ContractPromiseBatch.create(movie.userId).transfer(amount);
    
    assert(context.attachedDeposit <= ONE_NEAR, `Not enough balance`);
    movie.donatedNear += 1;
    Movies.set(movieId,movie);
    return `Total donation: ${movie.donatedNear} NEAR`;

  }
  
  //READ AND RETURN SUBSET OF MOVIES
  static findList(offset: u32, limit: u32): Movie[] {
    return Movies.values(offset, offset + limit);
  }
    
  //GET ID AND RATE FROM 0-10 AND RETURN TO TOTAL RATE OF MOVIE
  //AND PRINTING THE AVERAGE OF THE MOVIE RATED BY HOW MANY USERS AND TOTAL RATE 
  static rate (movieId:u32,rate:u32) : string {
    const movie = Movie.findById(movieId);
    if(rate >= 0 && rate<=10 ){
      movie.totalRate += rate;
      movie.numOfRater += 1;
      Movies.set(movieId,movie);
      var average = movie.totalRate / movie.numOfRater;
      return `Total rate of the film is ${movie.totalRate} and so far rated by ${movie.numOfRater} people.Average: ${average}`;
    } else {
      return `Please enter a rate between 0-10`;
    }
  }
}
