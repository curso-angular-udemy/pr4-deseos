import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Services
import { DeseosService } from '../providers/deseos.service';

// Pipes
import { FiltroCompletadoPipe } from '../pipes/filtro-completado.pipe';

// Components
import { PendientesPage } from '../pages/pendientes/pendientes.component';
import { TerminadasPage } from '../pages/terminadas/terminadas.component';
import { AgregarPage } from '../pages/agregar/agregar.component';
import { ListasComponent } from '../components/listas/listas.component';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PendientesPage,
    TerminadasPage,
    AgregarPage,
    FiltroCompletadoPipe,
    ListasComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PendientesPage,
    TerminadasPage,
    AgregarPage
  ],
  providers: [
    DeseosService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
