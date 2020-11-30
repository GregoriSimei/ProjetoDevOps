import { Farmacia } from "./../models/Farmacia";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FarmaService {

  cadastrarURL = 'http://localhost:1234/api/farmacia/cadastrar';
  buscarURL = 'http://localhost:1234/api/farmacia/buscar/';
  listarURL = 'http://localhost:1234/api/farmacia/listar';
  alterarURL = 'http://localhost:1234/api/farmacia/alterar';
  removerURL = 'http://localhost:1234/api/farmacia/remover/';

  constructor(private http: HttpClient) { }

  criarAutorizacao(headers: HttpHeaders): HttpHeaders {
    var token = JSON.parse(localStorage.getItem('token'));
    var httpHeaders: HttpHeaders = headers.set('authorization', token);
    return httpHeaders;
  }

  list(): Observable<Farmacia[]> {
    var headers = new HttpHeaders();
    headers = this.criarAutorizacao(headers);
    return this.http.get<Farmacia[]>(this.listarURL, { headers: headers });
  }

  create(farma: Farmacia): Observable<Farmacia> {
    var headers = new HttpHeaders();
    headers = this.criarAutorizacao(headers);
    return this.http.post<Farmacia>(this.cadastrarURL, farma, { headers: headers });
  }

  buscar(): Observable<Farmacia> {
    var headers = new HttpHeaders();
    headers = this.criarAutorizacao(headers);
    return this.http.get<Farmacia>(this.buscarURL, { headers: headers });
  }

  alterar(farma: Farmacia): Observable<Farmacia> {
    var headers = new HttpHeaders();
    headers = this.criarAutorizacao(headers);
    return this.http.put<Farmacia>(this.alterarURL, farma, { headers: headers });
  }

  remover(farma: Farmacia): Observable<Farmacia> {
    var headers = new HttpHeaders();
    headers = this.criarAutorizacao(headers);
    return this.http.delete<Farmacia>(this.removerURL + farma.cnpj, { headers: headers });
  }
}
