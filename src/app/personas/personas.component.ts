import { Component } from "@angular/core";

 @Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css']
 })
 export class PersonasComponent{

  deshabilitar = false;

  mensaje = 'no se ha agregado ninguna persona';

  Titulo = 'Ingeniero';

  mostrar = false;

  agregarPersona(){
    this.mostrar= true;
      this.mensaje ='Persona agregada';

  }

  // modificarTitulo(event: Event){
  //   console.log("entran a utilizar el metodo de modificar titulo")
  //     this.Titulo = (<HTMLInputElement>event.target).value;
  // }




 }
