import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'juan lu';
  nombreUpper: string = 'JUAN LU';
  nombreCompleto: string = 'jUaN luiS arMAs';

  fecha: Date = new Date();

}
