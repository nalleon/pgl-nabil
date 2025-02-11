import { Injectable } from '@angular/core';

interface Person {
  name : string;
  weight: number;
  age: number;
  height : number;
  imc: number;
}


@Injectable({
  providedIn: 'root'
})


export class ImcServiceService {
  people : Person [] = [];

  constructor() { }
  add(person: Person){
    this.people.push(person);
  }

  getAll(): Person[]{
    return this.people;
  }
}
