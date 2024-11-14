import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  constructor(private http: HttpClient) { }

  invocable_1(){
    let dato = "Funcion 1 invocada";
    return dato
  }

  invocable_2(){
    let dato = "Funcion 2 invocada";
    return dato
  }

  invocable_3(){
    let dato = "Funcion 3 invocada";
    return dato
  }

    invocable_sumar(numero:any){
    let dato = 5
    return(dato + numero)
  }
}
