import { Component, inject } from '@angular/core';
import { Gato } from './model/Gato';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GatoServiceService, GatosApiArray } from './gato-service.service';

@Component({
  selector: 'app-practice07-2',
  imports: [
    ReactiveFormsModule, CommonModule
  ],
  templateUrl: './practice07-2.component.html',
  styleUrl: './practice07-2.component.css'
})
export class Practice072Component {

  gatosAPIArr : GatosApiArray[] = [];
  gatoService : GatoServiceService = inject(GatoServiceService)
  mascotas: Gato[] = [];

  gatito:Gato= new Gato();

  constructor(){
    this.gatoService.getGatosAPI().subscribe((data) =>  {
      this.gatosAPIArr = data;
    })
  }

  // mascotaFormData = new FormGroup({
  //     nombre: new FormControl(''),
  //     peso: new FormControl(''),
  //     edad: new FormControl(''),
  //   });

  // guardarMascota() {
  //   let gato = new Gato();

  //   gato.nombre = this.mascotaFormData?.value.nombre??"";
  //   gato.peso = parseInt(this.mascotaFormData?.value.peso?? '0');
  //   gato.edad = parseInt(this.mascotaFormData?.value.edad?? '0');
  //   gato.equivalenciahumana = this.calculo(gato.edad);
  //   this.gatito = gato;
  //   alert(JSON.stringify(this.gatito));

  //   this.mascotas.push(gato);
  // }

  // calculo(edad : number){
  //   if(edad == 1){
  //     return 1*12/12;
  //   } else if(edad == 2 || edad == 3){
  //     return 3*12/12;
  //   } else if(edad == 4){
  //     return 7*12/12;
  //   } else if (edad == 5){
  //     return 8*12/12;
  //   } else if(edad == 6){
  //     return 10*12/12;
  //   } else {
  //     return 666;
  //   }
  // }

}
