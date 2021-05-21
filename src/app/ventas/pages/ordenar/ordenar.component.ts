import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  accionMayus: boolean = false;
  heroes: Heroe[] = [
    {
      nombre: 'Flash',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Thor',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Pecas',
      vuela: true,
      color: Color.negro
    },
    {
      nombre: 'Dardevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna verde',
      vuela: true,
      color: Color.verde
    }
  ];

  get colores(){
    return Color;
  }

  ordenarPor: string = '';

  cambiarMayus(){
    // this.accionMayus = (!this.accionMayus) ? true : false ;
    this.accionMayus = !this.accionMayus;
  }

  cambiarOrden( valor: string ){
    this.ordenarPor = valor;
  }

}
