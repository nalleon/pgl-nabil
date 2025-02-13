import { Component, inject } from '@angular/core';
import { Practice10Service } from '../practice10.service';
import { Game } from '../practice8/model/Game';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ImcServiceService } from './imc-service.service';
import { ActivatedRoute } from '@angular/router';

interface Person {
  name : string;
  weight: number;
  age: number;
  height : number;
  imc: number;
}

@Component({
  selector: 'app-imccalc',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './imccalc.component.html',
  styleUrl: './imccalc.component.css'
})


export class ImcCalc {

  route : ActivatedRoute = inject(ActivatedRoute);
  people: Person[] = [];
  editingIndex: number = -1;

  personService : ImcServiceService  = inject(ImcServiceService);


  constructor(){
    this.editingIndex = Number(this.route?.snapshot.paramMap.get("id"));
    this.people = this.personService.getAll();
  }
  imcForm = new FormGroup({
        name: new FormControl(''),
        weight: new FormControl(''),
        age: new FormControl(''),
        height:new FormControl('')
      });

    saveIMC() {
      const person: Person = {
        name: this.imcForm.value.name ?? '',
        weight: parseFloat(this.imcForm.value.weight ?? '0'),
        age: parseInt(this.imcForm.value.age ?? '0'),
        height: parseFloat(this.imcForm.value.height ?? '0'),
        imc: this.calculateIMC()
      };

      if (this.editingIndex !== -1) {
        this.people[this.editingIndex] = person;
        this.editingIndex = -1;
      } else {
        this.people.push(person);
      }

      this.imcForm.reset();
    }

    calculateIMC(): number {
      const weight  : number= parseFloat(this.imcForm?.value.weight ?? '0');
      const height : number = parseFloat(this.imcForm?.value.height ?? '1')/100 ;
      const result : number = (weight / (height * height));
      return result;
    }

    editPerson(index: number) {
      const person = this.people[index];
      this.imcForm.setValue({
        name: person.name,
        weight: person.weight.toString(),
        age: person.age.toString(),
        height: person.height.toString()
      });
      this.editingIndex = index;
    }

}
