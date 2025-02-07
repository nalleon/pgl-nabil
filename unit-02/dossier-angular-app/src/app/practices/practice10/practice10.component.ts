import { Component, inject } from '@angular/core';
import { Practice10Service } from '../practice10.service';
import { Game } from '../practice8/model/Game';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-practice10',
  imports: [CommonModule],
  templateUrl: './practice10.component.html',
  styleUrl: './practice10.component.css'
})
export class Practice10Component {

  gameService : Practice10Service = inject(Practice10Service);

  games : Game[] = [];

  constructor() {
    this.games = this.gameService.getAll();
  }
}
