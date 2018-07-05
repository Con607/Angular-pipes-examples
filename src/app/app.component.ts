import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  nombre:string = 'Manuel';
  nombre2:string = 'pedrO gOnzAles laYun';

  arreglo = [1,2,3,4,5,6,7,8,9,10];

  PI = Math.PI;

  a:number = 0.234;

  salario = 1234.5;

  heroe = {
    nombre: "Logan",
    clave: "Wolverine",
    edad: 500,
    direccion:{
      cale: "Primera",
      casa:"19"
    }
  }

  valorDeLaPromesa = new Promise( ( resolve, reject )=>{
    setTimeout( ()=>resolve('Llego la data'), 3500 );
  })

  fecha = new Date();

  video:string = "U2U1RbBTPHA"

  activar:boolean = true;

  isContrasenaActive():string {
    let contrasenaButtonText:string = "Activar";
    if (this.activar) {
        contrasenaButtonText = "Desactivar"
    }

    return contrasenaButtonText;
  }



}
