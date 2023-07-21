import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Icursos } from './icursos';
import { delay, tap } from 'rxjs';
import { environment } from 'src/app/enviroments/enviroments';


@Injectable({
  providedIn: 'root'
})
export class CursoServiceService {

  private readonly API = `${environment.apiUrl}cursos`


  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Icursos[]>(this.API).pipe(
      delay(2000),
      tap(console.log),
    );
  }
}
