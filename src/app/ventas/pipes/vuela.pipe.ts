import { Pipe } from '@angular/core';
import { PipeTransform } from '@angular/core';


@Pipe({
    name: 'vuela'
})
export class VuelaPipe implements PipeTransform{
    transform(valor: boolean): string {
        return (valor) ? "si" : "no";
    }

}