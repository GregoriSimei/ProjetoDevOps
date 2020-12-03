import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Compra } from '../models/Compra';
import { Transacao } from '../models/Transacao';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  URLBASE = "http://localhost:1234/api";

  constructor(private http: HttpClient) { }

  criarAutorizacao(headers: HttpHeaders): HttpHeaders {
    var token = JSON.parse(localStorage.getItem('token'));
    var httpHeaders: HttpHeaders = headers.set('authorization', token);
    return httpHeaders;
  }

  comprar(compra: Compra) {
    var headers = new HttpHeaders();
    headers = this.criarAutorizacao(headers);
    return this.http.post<any>(`${this.URLBASE}/compra`, compra, { headers: headers });
  }

  pegarComprasUsuario() {
    var headers = new HttpHeaders();
    headers = this.criarAutorizacao(headers);
    return this.http.get<any>(`${this.URLBASE}/usuario/compra`, { headers: headers });
  }

  pegarComprasFarmacia(cnpj: String) {
    var headers = new HttpHeaders();
    headers = this.criarAutorizacao(headers);
    return this.http.get<any>(`${this.URLBASE}/farmacia/compra/${cnpj}`, { headers: headers });
  }

  atualizarTransacao(transacao: Transacao) {
    var headers = new HttpHeaders();
    headers = this.criarAutorizacao(headers);
    return this.http.put<any>(`${this.URLBASE}/compra/transacao`, transacao, { headers: headers });
  }
}
