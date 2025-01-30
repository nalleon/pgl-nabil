import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gente',
  imports: [CommonModule],
  templateUrl: './gente.component.html',
  styleUrl: './gente.component.css'
})
export class GenteComponent {
  arrayGente = [
    {
      id: 1,
      nombre: 'Ana'
    },
    {
      id: 2,
      nombre: 'Mario'
    },
    {
      id: 3,
      nombre: 'Marta'
    }
  ]
}
