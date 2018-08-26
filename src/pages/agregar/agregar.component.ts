import { Component } from "@angular/core";
import { DeseosService } from '../../providers/deseos.service';
import { Lista } from '../../models/lista.model';
import { NavParams } from "ionic-angular";
import { ListaItems } from "../../models";


@Component ({
  selector: 'page-agregar',
  templateUrl: 'agregar.component.html'
}) 

export class AgregarPage{

  lista: Lista;
  nombreItem: string;

  constructor(private deseosService: DeseosService,
              private navParams: NavParams){
    if (this.navParams.get('lista')){
      this.lista = this.navParams.get('lista');
    } else {
      this.lista = new Lista(navParams.get('titulo'));
      this.deseosService.agregarLista(this.lista);
    }
  }

  agregarItem(){
    if ( this.nombreItem.length>0){
      this.lista.items.push(new ListaItems(this.nombreItem));
      this.lista.terminada = false;
      this.lista.terminadaEn = null;
      this.deseosService.guardarStorage();
      this.nombreItem='';
    }
  }

  actualizarTarea(item: ListaItems){
    item.completado=!item.completado;
    const pendientes = this.lista.items.filter( e => !e.completado ).length;
    if (pendientes == 0){
      this.lista.terminada = true;
      this.lista.terminadaEn = new Date();
    } else {
      this.lista.terminada = false;
      this.lista.terminadaEn = null;
    }
    this.deseosService.guardarStorage();
  }

  borrarItem(index){
    this.lista.items.splice(index,1);
    this.deseosService.guardarStorage();
  }


}