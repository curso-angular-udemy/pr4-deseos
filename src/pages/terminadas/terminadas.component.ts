import { Component } from "@angular/core";
import { DeseosService } from '../../providers/deseos.service';


@Component ({
  selector: 'page-terminadas',
  templateUrl: 'terminadas.component.html'
})
export class TerminadasPage {

  constructor (public deseosService: DeseosService){

  }

  listaSeleccionada(lista){
    console.log(lista)
  }
}