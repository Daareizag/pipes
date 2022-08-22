import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';
import { AppComponent } from './app.component';


import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';


import  localeAr  from "@angular/common/locales/es-AR";
import  localeFr  from "@angular/common/locales/fr";
import { registerLocaleData } from "@angular/common"
import localeFR from '@angular/common/locales/fr';

registerLocaleData( localeAr )
registerLocaleData( localeFR )

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PrimeNgModule,
    SharedModule,
    VentasModule,
    AppRouterModule

  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-AR'
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
