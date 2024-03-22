import { Component, HostListener, OnInit } from '@angular/core';
import { FotosService } from '../services/fotos.service';
import { Foto } from '../models/foto.model';
import { RecarregarFotosService } from '../services/recarregar-fotos.service';
import { MatDialog } from '@angular/material/dialog';
import { FotoModalComponent } from '../foto-modal/foto-modal.component';

@Component({
  selector: 'app-listagem-fotos',
  templateUrl: './listagem-fotos.component.html',
  styleUrls: ['./listagem-fotos.component.css']
})
export class ListagemFotosComponent implements OnInit{
  fotos: Foto[] = [];
  cols: number = 0;

  constructor(
    private fotoService : FotosService, 
    private recarregarFotosServices: RecarregarFotosService,
    private dialog: MatDialog) {
      this.calcularColunas(window.innerWidth);
  }

  ngOnInit(): void{
    this.carregarFotos();
    this.recarregarFotosServices.recarregarFotos$.subscribe(()=> {
      this.carregarFotos();
    })
    this.calcularColunas(window.innerWidth);
  }

  carregarFotos(): void {
    this.fotos = [];
    this.fotoService.getFotos().subscribe({
      next: (fotos: Foto[]) => {
        this.fotos = fotos;
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  calcularColunas(largura: number){
    const larguraPorItem = 150;

    this.cols = Math.floor(largura / larguraPorItem);
    this.cols = Math.max(this.cols, 1);
  }

  @HostListener('window:resize')
  onResize() {
    this.calcularColunas(window.innerWidth);
  }

  abrirModalFoto(foto: Foto) {
    this.dialog.open(FotoModalComponent, {
      width: '40%',
      data: {url: foto.url, title: foto.title, album: `Álbum ${foto.albumId}`}
    })
  }
}
