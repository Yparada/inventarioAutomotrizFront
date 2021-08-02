import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productoURL = 'http://localhost:8080/producto/'

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(this.productoURL);
  }

  public detail(id: number): Observable<Producto>{
    return this.httpClient.get<Producto>(this.productoURL + `${id}`);
  }

  public detailName(nombre: string): Observable<Producto>{
    return this.httpClient.get<Producto>(this.productoURL + `${nombre}`);
  }

  public save(producto: Producto): Observable<any>{
    return this.httpClient.post<any>(this.productoURL, producto);
  }

  public update(id: number,producto: Producto): Observable<any>{
    return this.httpClient.put<any>(this.productoURL + `${id}`, producto);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.productoURL + `${id}`);
  }


}
