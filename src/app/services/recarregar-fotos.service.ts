import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecarregarFotosService {
  private recarregarFotosSubject =  new Subject<void>();

  public recarregarFotos$ = this.recarregarFotosSubject.asObservable();

  public recarregar() {
    this.recarregarFotosSubject.next();
  }
}
