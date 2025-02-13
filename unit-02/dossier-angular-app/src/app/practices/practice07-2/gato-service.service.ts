import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface GatosApiArray {
  id: string,
  url: string,
  width: number,
  height: number,
  breeds: any[],
  favourite: Favourite
}

export interface Favourite{}

@Injectable({
  providedIn: 'root'
})



export class GatoServiceService {
  http = inject(HttpClient);
  getGatosAPI(){
    return this.http.get<GatosApiArray[]>(
      'https://api.thecatapi.com/v1/images/search?limit=10'
    );
  }
  constructor() { }
}
