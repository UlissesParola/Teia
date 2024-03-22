import { Component, HostListener, OnInit } from '@angular/core';
import { FotosService } from '../services/fotos.service';
import { Foto } from '../models/foto.model';
import { RecarregarFotosService } from '../services/recarregar-fotos.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private snackBar: MatSnackBar) {
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
    this.fotoService.getFotos().subscribe({
      next: (fotos: Foto[]) => {
        this.fotos = fotos;
        this.snackBar.open('Fotos carregadas com sucesso!', 'Fechar', {
          duration: 3000,
        });
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
}
