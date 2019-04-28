import { GamesService } from './../../services/games.service';
import { Game } from './../../models/Game';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  game: Game = {
    title:'',
    description: '',
    image: '',
  }

  constructor(private gamesService: GamesService) { }

  saveNewGame(){
    this.gamesService.saveGame(this.game)
    .subscribe(
      res=>{
        console.log(res);
      },
      err => console.error(err)
    );
  }

  ngOnInit() {
  }

}
