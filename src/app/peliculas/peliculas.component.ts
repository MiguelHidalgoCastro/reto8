import { Component } from '@angular/core';
import { Pelicula } from '../pelicula';
import { IMDBService } from '../imdb.service';
import { AppComponent } from '../app.component';
import { IdbService } from '../idb.service';
import { MensajeComponent } from '../mensaje/mensaje.component';


@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent {
  public observable: any
  public observable2: any
  public conexion: any
  constructor(private peliculaService: IMDBService, private actoresService: IMDBService) {
    this.conexion = new IdbService(this.iniciado.bind(this))
  }

  list() {
    let input: any = document.getElementById('npelicula')
    let url: any = "https://imdb-api.com/en/API/SearchMovie/k_1uxldlee/" + input.value

    this.peliculaService.getLista(url).subscribe(peliculas => this.observable = peliculas)
    new MensajeComponent().crearmensaje('Buscar Peliculas', 'Mostrando resultados de ' + input.value, 'exito')
  }

  iniciado() {
    //console.log('iniciado');
  }
  save(peli: Pelicula) {
    this.conexion.insertar(peli, this.insertarOK.bind(this))
  }

  insertarOK() {
    new MensajeComponent().crearmensaje('Insertado', 'Se ha agregado película favorita correctamente', 'exito')
  }

  mostrarActores(peli: Pelicula) {
    let url: any = "https://imdb-api.com/en/API/FullCast/k_1uxldlee/" + peli.id
    this.actoresService.getActores(url).subscribe(actores => this.observable2 = actores)
    new MensajeComponent().crearmensaje('Buscar Actores', 'Mostrando Actores de ' + peli.title, 'exito')
  }


  borrarActores() {
    let divActores: HTMLElement = document.getElementById('tablaActores')!
    divActores.textContent = ''
    new MensajeComponent().crearmensaje('Borrando Actores', 'Borrando Actores', 'exito')
  }
}
