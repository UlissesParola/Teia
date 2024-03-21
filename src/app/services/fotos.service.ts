import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Foto } from '../models/foto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FotosService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/photos';


  constructor(private http: HttpClient) { }

  getFotos(): Observable<Foto[]>{
    return this.http.get<Foto[]>(this.apiUrl);
  }
}
