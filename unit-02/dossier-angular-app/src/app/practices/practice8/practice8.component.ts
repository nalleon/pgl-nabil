import { Component, inject } from '@angular/core';
import { Game } from './model/Game';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Practice10Service } from '../practice10.service';
import { Practice10Component } from '../practice10/practice10.component';

@Component({
  selector: 'app-practice8',
  imports: [ReactiveFormsModule, CommonModule, FormsModule, Practice10Component],
  templateUrl: './practice8.component.html',
  styleUrl: './practice8.component.css'
})
export class Practice8Component {
  game : Game = new Game();
  gamesService : Practice10Service  = inject(Practice10Service);

  gameFormData = new FormGroup({
    uservalue: new FormControl(''),
  });

  play(){
    let userValue = this.gameFormData.value.uservalue?? "rock";
    this.game.compareElements(userValue);
    this.gamesService.add(this.game);
  }

  restart(){
    this.game = new Game();
  }
}
