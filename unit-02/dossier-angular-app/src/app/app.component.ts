import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PruebaComponent } from './practices/practice03/prueba/prueba.component';
import { GenteComponent } from './practices/practice04/gente.component';
import { Practice07Component } from './practices/practice07/practice07.component';
import { Practice072Component } from "./practices/practice07-2/practice07-2.component";
import { Practice8Component } from './practices/practice8/practice8.component';

@Component({
  selector: 'app-root',
  imports: [
    // //RouterOutlet,
    // //PruebaComponent,
    // //GenteComponent,
    // Practice07Component,
    // Practice072Component,
    Practice8Component
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nombre : string ='Nabil';
  apellido : string ='L. A.';
  title = 'dossier-angular-app';
  numArr = [1,2,3,4,5,6,7,8,9,10];
  result : number[]= [];
  tableResult : string[] = [];


  ejecutar(num : number){
    let arrTable : number[] = []
    for(let i=0; i< this.numArr.length; i++){
      arrTable[i] = num*this.numArr[i];
      this.tableResult[i] = '\n ' + num + ' * ' +  this.numArr[i] + ' = '+ arrTable[i];
    }
    this.result = arrTable;

    //alert(this.table);


  }

  arr = [
    { id:1,
      name: 'Ana'
    },

    { id:2,
      name: 'Mario'
    },


    { id:3,
      name: 'Marta'
    },
  ]

}

