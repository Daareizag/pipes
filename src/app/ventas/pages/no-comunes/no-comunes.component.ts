import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {
// i18nSelectPipe
  nombre: string = 'Fernando'
  genero: string = 'masculino'

  invitacionMap = {
    'Fernando': 'invitarlo',
    'Paula': 'invitarla'
  }

//i18nPluralPipe
  clientes: string[] = ['Pedro', 'Pablo', 'Laura', 'Letys'];

  clientesMap={
    '=0': 'no tenemos a ningun cliente esperando.',
    '=1':  'tenemos 1 cliente esperando',
    'other': 'tenemos # clientes esperando'
  };
//Cuando le de clic, debera cambiar de cliente
  cambiarCliente(){
    console.log(this.nombre)
      if (this.nombre == 'Fernando'){
        this.nombre = 'Paula'
      }else {
        this.nombre = 'Fernando'
      }
  }
// Cuando le de clic, debera borrar un cliente y se actualizara en tiempo real
  borrarCliente(){
    this.clientes.splice(0,1);
  }


// KeyValue Pipe
persona = {
  Nombre: 'Fernando',
  Edad: 35,
  Direccion: 'Ottawa, Canadá'
}

// Async Pipe
miObservable = interval(1000);

valorPromesa = new Promise((resolver, reject)=> {
  setTimeout(() => {
      resolver( "Tenemos data de promesa" )
    }, 3500 );
});




}
