import { Component } from '@angular/core';
import { RecarregarFotosService } from './services/recarregar-fotos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'teia_c071615';
  opened: boolean = false;

  constructor(private recarregarFotosService: RecarregarFotosService){
  }

  recarregarFotos(){
    this.recarregarFotosService.recarregar();
    console.log("recarregado");
  }
}

