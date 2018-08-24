import { Component } from "@angular/core";
import { DeseosService } from '../../providers/deseos.service';
import { Lista } from '../../models/lista.model';
import { AgregarPage } from '../agregar/agregar.component';
import { NavController, AlertController } from "ionic-angular";


@Component ({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.component.html'
}) 

export class PendientesPage{

  constructor(public deseosService: DeseosService,
              private navCtrl: NavController,
              private alertCtrl: AlertController){

  }

  listaSeleccionada(lista: Lista){
    console.log(lista)
  }

  agregarLista(){
    const alerta  = this.alertCtrl.create({
      title: 'Nueva Lista',
      message: 'Nombre de la nueva lista',
      inputs: [{
        name: 'titulo',
        placeholder: 'Nombre de la lista'
      }],
      buttons: [{
        text: 'Cancelar'
      },{
        text: 'Agregar',
        handler: data => {
          if(data.titulo.length == 0){
            return;
          }
          this.navCtrl.push( AgregarPage, {
            titulo: data.titulo
          });
        }}]
    })
    alerta.present();
  }
}