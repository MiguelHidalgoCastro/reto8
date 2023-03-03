import { Injectable } from '@angular/core';
import { Pelicula } from './pelicula';
import { MensajeComponent } from './mensaje/mensaje.component';

@Injectable({
  providedIn: 'root'
})
export class IdbService {
  public conexion: any
  //public listaBusqueda: any[]
  constructor(callback: Function) {
    const peticion = indexedDB.open('paco-app', 1)
    peticion.onerror = () => { throw 'Error al conectar indexedDB' }
    peticion.onupgradeneeded = (event: any) => {
      this.conexion = event.target.result
      this.conexion.onerror = () => {
        console.log('Error al crear la bd')
      }
      this.crear()
    }
    peticion.onsuccess = (event: any) => {
      this.conexion = event.target.result
      callback()
    }
  }

  crear(): void {
    this.conexion.createObjectStore('favoritas', { keyPath: 'id' })
  }


  insertar(pelicula: Pelicula, callback: Function): void {
    const peticion = this.conexion.transaction(['favoritas'], 'readwrite').objectStore('favoritas').add(pelicula)
    peticion.onerror = () => {
      console.log('No se ha podido agregar el coche a la bbdd');
    }
    peticion.onsuccess = (event: any) => {
      pelicula.id = event.target.result
      callback()
    }
  }

  listar(callback: Function): void {
    const objectStore = this.conexion.transaction(['favoritas'], 'readwrite').objectStore('favoritas')
    const peticion = objectStore.getAll()
    peticion.onerror = () => {
      console.log("no se ha podido obtener elementos");
    }
    peticion.onsuccess = () => {
      callback(peticion.result)
      new MensajeComponent().crearmensaje('Listado','Se ha listado las películas correctamente','info')
    }
  }
}
