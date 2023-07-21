import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosListaRoutingModule } from './cursos-lista-routing.module';
import { CursosComponent } from './cursos/cursos.component';



@NgModule({
  declarations: [CursosComponent],
  exports:[CursosComponent],
  imports: [
    CommonModule,
    CursosListaRoutingModule,
  ]
})
export class CursosListaModule { }
