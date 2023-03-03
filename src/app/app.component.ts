import { Component } from '@angular/core';
import { IdbService } from './idb.service';
import { Pelicula } from './pelicula';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'paco-app';

  constructor() {
  
  }
}
