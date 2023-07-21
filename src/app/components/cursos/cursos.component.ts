import { Component, OnInit } from '@angular/core';
import { CursoServiceService } from './curso-service.service';
import { Icursos } from './icursos';
import { Observable, Subject, catchError, of } from 'rxjs'

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit{

  cursos$: Observable<Icursos[]> | any

  error$ = new Subject<boolean>();


  constructor(private cursoService: CursoServiceService){
    this.cursos$ = {
      id: 0,
      name: '',
    }

   }

  ngOnInit(): void {
    this.cursos$ = this.cursoService.list()
    .pipe(
      catchError(error => {
        console.log(error)
        this.error$.next(true)
        return of(error)
      })
    )
  }

}
