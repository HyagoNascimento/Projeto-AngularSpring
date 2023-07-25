import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private httpClient: HttpClient) { }

  list(){
   return [
      {_id:'1', name:'Angular', category:'Front' }
    ]
  }
}
