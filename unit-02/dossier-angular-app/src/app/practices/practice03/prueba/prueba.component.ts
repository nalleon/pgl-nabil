import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-prueba',
  imports: [],
  templateUrl: './prueba.component.html',
  styleUrl: './prueba.component.css'
})
export class PruebaComponent {
  @Input() name : string = "Nabil";
}
