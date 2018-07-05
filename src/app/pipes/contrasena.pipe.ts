import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform( contrasena: string, activar:boolean ):string {

    if (activar) {
      contrasena = '*'.repeat(contrasena.length);
    }

    return contrasena;
  }

}
