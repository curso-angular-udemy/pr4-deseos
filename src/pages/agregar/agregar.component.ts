import { Component } from "@angular/core";
import { DeseosService } from '../../providers/deseos.service';
import { Lista } from '../../models/lista.model';
import { NavParams } from "ionic-angular";


@Component ({
  selector: 'page-agregar',
  templateUrl: 'agregar.component.html'
}) 

export class AgregarPage{

  lista: Lista;

  constructor(private deseosService: DeseosService,
              private navParams: NavParams){
                 const titulo = navParams.get('titulo').toUpperCase();
                 this.lista = new Lista(titulo);
    console.log(navParams);
  }

}