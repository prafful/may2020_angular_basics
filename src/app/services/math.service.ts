import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  scores= [1, 2, 3]

  welcome(){
    return "Welcome to services!"
  }

  getScores(){
    return this.scores
  }

  constructor() { }
}
