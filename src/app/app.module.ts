import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { FavoritasComponent } from './favoritas/favoritas.component';
import { CreditosComponent } from './creditos/creditos.component';
import { HttpClientModule } from '@angular/common/http';
import { MensajeComponent } from './mensaje/mensaje.component';
import { RepartoComponent } from './reparto/reparto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PeliculasComponent,
    FavoritasComponent,
    CreditosComponent,
    MensajeComponent,
    RepartoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
