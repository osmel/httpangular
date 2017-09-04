import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { MyComponentComponent } from './components/my-component/my-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule // modulo: proporciona una API simplificada para la funcionalidad HTTP 
    				 // proporciona el servicio  HttpClient, que se podrá inyectar en componentes o servicios
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
