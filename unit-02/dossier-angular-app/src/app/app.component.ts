import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
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

