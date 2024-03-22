import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Foto } from '../models/foto.model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FotosService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) { }

  getFotos(): Observable<Foto[]>{
    return this.http.get<Foto[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse){
    if (error.error instanceof ErrorEvent){
      console.error('Ocorreu um erro: ', error.error.message);
    } else {
      console.error(
        `O servidor retornou um erro: código: ${error.status}, mensagem: ${error.error}`);
    }

    return throwError(() => new Error('Não foi possível consluir a solicitação nesse momento. Tente mais tarde.'));
  }

}
