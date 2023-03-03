import { Component } from '@angular/core';
import { IdbService } from '../idb.service';
import { Pelicula } from '../pelicula';
@Component({
  selector: 'app-favoritas',
  templateUrl: './favoritas.component.html',
  styleUrls: ['./favoritas.component.css']
})
export class FavoritasComponent {
  public conexion: any
  public listadoPelis: any
  constructor() {
    this.conexion = new IdbService(this.iniciar.bind(this))
  }

  iniciar() {
    //console.log('iniciado favoritas');
    this.conexion.listar(this.listarOk.bind(this))
  }

  listarOk(object: Array<Pelicula>) {
    this.listadoPelis = object

  }
}
