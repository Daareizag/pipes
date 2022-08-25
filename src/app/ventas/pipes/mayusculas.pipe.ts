import { Pipe, PipeTransform } from "@angular/core";




@Pipe({
  name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

  transform(valor: string, enMayusculas: boolean = true) {
   // if (enMayusculas){
   //   return valor = valor.toUpperCase() + "!";
   // }else {
   //   return valor = valor.toLowerCase()+ "!"
   // }

   return (enMayusculas) ? valor.toUpperCase() : valor.toLowerCase()
  }

}
