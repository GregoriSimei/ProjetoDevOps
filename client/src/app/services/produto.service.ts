import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Produto } from '../models/Produto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  BaseURL = 'http://192.168.15.5:1234/api/farmacia';


  constructor(private http: HttpClient) { }

  criarAutorizacao(headers: HttpHeaders): HttpHeaders {
    var token = JSON.parse(localStorage.getItem('token'));
    var httpHeaders: HttpHeaders = headers.set('authorization', token);
    return httpHeaders;
  }

  cadastrar(produto: Produto, cnpj: string): Observable<Produto> {
    var headers = new HttpHeaders();
    headers = this.criarAutorizacao(headers);
    return this.http.post<Produto>(`${this.BaseURL}/${cnpj}/produto`, produto, { headers: headers });
  }

  buscar(produto: Produto, cnpj: string): Observable<Produto> {
    var headers = new HttpHeaders();
    headers = this.criarAutorizacao(headers);
    var codProduto = produto.codigo;
    return this.http.get<Produto>(`${this.BaseURL}/${cnpj}/produto/${codProduto}`, { headers: headers });
  }

  alterar(produto: Produto, cnpj: string): Observable<Produto> {
    var headers = new HttpHeaders();
    headers = this.criarAutorizacao(headers);
    return this.http.put<Produto>(`${this.BaseURL}/${cnpj}/produto`, produto, { headers: headers });
  }

  remover(produto: Produto, cnpj: string): void {
    var headers = new HttpHeaders();
    headers = this.criarAutorizacao(headers);
    var site = `${this.BaseURL}/${cnpj}/produto`;
    this.http.get(site, { headers: headers }).subscribe((resp) => { });
  }

}
