import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Compra } from '../models/Compra';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  URLBASE = "http://localhost:1234/api/compra";

  constructor(private http: HttpClient) { }

  criarAutorizacao(headers: HttpHeaders): HttpHeaders {
    var token = JSON.parse(localStorage.getItem('token'));
    var httpHeaders: HttpHeaders = headers.set('authorization', token);
    return httpHeaders;
  }

  comprar(compra: Compra) {
    var headers = new HttpHeaders();
    headers = this.criarAutorizacao(headers);
    return this.http.post<any>(this.URLBASE, compra, { headers: headers });
  }

}
