import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Game} from '../models/Game'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private API_URI = 'http://127.0.0.1:3000/api';

  constructor(private http: HttpClient) {

   }

   getGames(){
     return this.http.get(`${this.API_URI}/games`);
   }

   getGame(id: string){
    return this.http.get(`${this.API_URI}/games/${id}`);
  }

  saveGame(game: Game){
    return this.http.post(`${this.API_URI}/games`, game);
  }

  deleteGame(id:string){
    return this.http.delete(`${this.API_URI}/games/${id}`);
  }

  updateGame(id:string, updatedGame:Game):Observable<Game>{
    return this.http.put(`${this.API_URI}/games/${id}`, updatedGame);
  }
}
