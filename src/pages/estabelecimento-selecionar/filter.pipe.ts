import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(items: any[], distancia, busca): any[] {
    if(!items) return [];
    if(!distancia && !busca){
        return items;
    }

    busca = busca.toLowerCase();
    return items.filter( it => {
        if( it.distancia <= distancia ) {
          let show_marca = (it.pag_est_marca.toLowerCase().indexOf(busca) >= 0);
          let show_endereco = (it.pag_est_end_logradouro.toLowerCase().indexOf(busca) >= 0);
          let show_local_b2b = (it.pag_est_local_b2b.toLowerCase().indexOf(busca) >= 0);
          let show_local_b2c = (it.pag_est_local_b2c.toLowerCase().indexOf(busca) >= 0);
          return  show_marca || show_endereco || show_local_b2b || show_local_b2c;
        }
        return false;
    });
   }
}