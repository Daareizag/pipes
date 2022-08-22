import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {
// i18nSelectPipe
  nombre: string = 'Carla'
  genero: string = 'femenino'

  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

//i18nPluralPipe
  clientes: string[] = ['Pedro', 'Pablo', 'Laura', 'Letys'];

  clientesMap={
    '=0': 'no tenemos a ningun cliente esperando.',
    '=1':  'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }




}
