import { Component } from '@angular/core';
import { Mensaje } from '../mensaje';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent {

  public mensaje!: Mensaje

  crearmensaje(tit: string, desc: string, tip: string) {

    let divmensaje: HTMLElement = document.getElementById('mensaje')!
    divmensaje.textContent = ""
    let tarjeta: HTMLElement = document.createElement('div')
    let titulo: HTMLElement = document.createElement('span')
    let descripcion: HTMLElement = document.createElement('p')
    titulo.textContent = tit
    descripcion.textContent = desc

    switch (tip) {
      case 'info':
        tarjeta.style.border = '2px solid blue'
        break;
      case 'exito':
        tarjeta.style.border = '2px solid green'
        break;
      case 'aviso':
        tarjeta.style.border = '2px solid yellow'
        break;
      case 'error':
        tarjeta.style.border = '2px solid red'
        break;
    }
    tarjeta.style.marginBottom = '1vh'
    divmensaje.appendChild(tarjeta)
    tarjeta.appendChild(titulo)
    tarjeta.appendChild(descripcion)

    setTimeout(this.borrarMensajes, 5000)
  }

  borrarMensajes() {
    let divmensaje: HTMLElement = document.getElementById('mensaje')!
    divmensaje.textContent = ""
  }
}
