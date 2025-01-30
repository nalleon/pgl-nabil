import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule  } from '@angular/forms';
import { Persona } from './model/Persona';
@Component({
selector: 'app-persona-card',
standalone: true,
imports: [
    CommonModule,
    ReactiveFormsModule
  ],
templateUrl: './practice07.component.html',
styleUrl: './practice07.component.css',
})


export class Practice07Component {
  personaFormData = new FormGroup({
    nombre: new FormControl(''),
    peso: new FormControl(''),
    sexo: new FormControl(''),
    adulto: new FormControl(''),
    });

  guardarPersona() {
    let persona = new Persona();
    persona.nombre = this.personaFormData.value.nombre??"";
    persona.peso = parseInt(this.personaFormData.value.peso?? '0');
    persona.sexo = this.personaFormData.value.sexo??"Mujer";
    persona.adulto = this.personaFormData.value.adulto == "true";
    this.personas.push(persona);
    }

    personas: Persona[] = [];
}
