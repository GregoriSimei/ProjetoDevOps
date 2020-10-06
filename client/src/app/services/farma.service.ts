import { Farmacia } from "./../models/Farmacia";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FarmaService {

  cadastrarURL = 'http://localhost:1234/farmacia/cadastrar';
  buscarURL = 'http://localhost:1234/farmacia/buscar/';
  listarURL = 'http://localhost:1234/farmacia/listar';
  alterarURL = 'http://localhost:1234/farmacia/alterar';
  removerURL = 'http://localhost:1234/farmacia/remover/:cnpj';
  
  constructor(private http: HttpClient) {}

  list(): Observable<Farmacia[]> {
    return this.http.get<Farmacia[]>(this.listarURL);
  }
  create(farma: Farmacia): Observable<Farmacia>{
    return this.http.post<Farmacia>(this.cadastrarURL, farma);
  }
  buscar(farma: Farmacia): Observable<Farmacia>{
    //var cnpjFarmacia = farma.cnpj;
    return this.http.get<Farmacia>(this.buscarURL + farma.cnpj);
  }
}
