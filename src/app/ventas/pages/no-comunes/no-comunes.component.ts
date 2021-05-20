import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent{

  // i18nSelect
  nombre: string = 'Juan Lu';
  genero: string = 'masculino';  
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural
  clientes: string[] = ['Lucia', 'Ines', 'Ariadna', 'Coral', 'Cristina'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Pepe',
    edad: 35,
    direccion: 'Hamburg, Deutschland'
  }

  // JSON Pipe
  heroes = [
    {
      nombre:'Ironman',
      vuela: true
    },
    {
      nombre:'Batman',
      vuela: false
    },
    {
      nombre:'Scarlet witch',
      vuela: true
    }
  ]

  // Async Pipe
  miObservable = interval(2000);
  // .pipe( tap( () => console.log('intervalo') ) );
  // Como esta escrito se producen dos llamadas al observable y por tanto
  // son independientes, el mensaje y los numeros van a paralelo,
  // por eso el mensaje tarda un poco en desaparecer, los tiempos no tienen que 
  // ser iguales
  valorPromesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Tenemos data de promesa')
      }, 3500);
  });


  cambiarPersona(){
    //cambiar nombre y genero
    this.nombre = (this.nombre === 'Lucia') ? 'Juan Lu' : 'Lucia';
    this.genero = (this.genero === 'femenino') ? 'masculino' : 'femenino';
  }

  borrarCliente(){
    //eliminar uno de clientes[]
    this.clientes.pop();
  }

  recargar(){
    this.clientes = ['Lucia', 'Ines', 'Ariadna', 'Coral', 'Cristina'];
  }



}
