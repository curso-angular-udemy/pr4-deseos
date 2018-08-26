import { Component } from "@angular/core";
import { DeseosService } from '../../providers/deseos.service';
import { NavController } from "ionic-angular";

@Component ({
  selector: 'page-terminadas',
  templateUrl: 'terminadas.component.html'
})

export class TerminadasPage {

  constructor(public deseosService: DeseosService,
              private navCtrl: NavController){

  }
}