import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import {CardModule} from 'primeng/card';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    NoComunesComponent,
    BasicosComponent,
    NumerosComponent,
    OrdenarComponent
  ],
  exports: [
    NoComunesComponent,
    BasicosComponent,
    NumerosComponent,
    OrdenarComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    PrimeNgModule
  ]
})
export class VentasModule { }
