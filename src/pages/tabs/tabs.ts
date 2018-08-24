import { Component } from '@angular/core';

import { PendientesPage } from '../pendientes/pendientes.component';
import { TerminadasPage } from '../terminadas/terminadas.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PendientesPage;
  tab2Root = TerminadasPage;

  constructor() {

  }
}
