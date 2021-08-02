import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarioURL = 'http://localhost:8080/usuario/'

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<any>{
    return this.httpClient.get(this.usuarioURL);
  }
}
