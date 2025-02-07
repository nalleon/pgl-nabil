import { Injectable } from '@angular/core';
import { Game } from './practice8/model/Game';

@Injectable({
  providedIn: 'root'
})

export class Practice10Service {

  games : Game [] = [];

  constructor() { }
  add(game: Game){
    this.games.push(game);
  }

  getAll(): Game[]{
    return this.games;
  }
}
