import { CursosService } from './../services/cursos.service';
import { Component, OnInit } from '@angular/core';

import { Curso } from './../model/curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit{

  cursos: Curso [] = [];
  displayedColumns = ['name','category'];
  //CursosService: CursosService;

  constructor(private cursosService: CursosService ){
    //this.CursosService = new CursosService();
    this.cursos = this.cursosService.list();
  }

  ngOnInit(): void{

  }
}
