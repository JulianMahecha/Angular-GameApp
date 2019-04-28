import { GamesService } from './../../services/games.service';
import { Game } from './../../models/Game';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

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

  constructor(private gamesService: GamesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  saveNewGame(){
    this.gamesService.saveGame(this.game)
    .subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/games']);
      },
      err => console.error(err)
    );
  }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if(params.id){
      this.gamesService.getGame(params.id).subscribe(
        res => {
          this.game = res;
        },
        err => console.error(err)
      )
    }
  }

}
