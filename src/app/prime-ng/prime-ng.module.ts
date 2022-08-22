import { NgModule } from '@angular/core';

import {ButtonModule} from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import { FieldsetModule } from 'primeng/fieldset';




@NgModule({
  declarations: [

  ],
  exports: [
    ButtonModule,
    BrowserAnimationsModule,
    FieldsetModule,
    CardModule,
    MenubarModule
  ],
})
export class PrimeNgModule { }
