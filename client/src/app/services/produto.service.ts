import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../models/Produto';
import { Observable } from 'rxjs';
import { Farmacia } from '../models/Farmacia';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  cadastrarURL = 'http://localhost:1234/produto/cadastrar';  /*   POST - Produto  */
  buscarURL = 'http://localhost:1234/produto/buscar/';       /*   /:cnpjFarmacia/:codigo - GET */
  listarURL = 'http://localhost:1234/produto/listar/';       /*   /:cnpjFarmacia - GET  */
  alterarURL = 'http://localhost:1234/produto/alterar/ ';    /*   POST - Produto  */
  removerURL = 'http://localhost:1234/produto/remover/';     /*   /:cnpjFarmacia/:codigo - GET */

  constructor(private http: HttpClient) { }

  cadastrar(produto: Produto) {
    this.http.post<Produto>(this.cadastrarURL, produto);
  }

  buscar(produto: Produto): Observable<Produto> {
    var codProduto = produto.codigo;
    var cnpjFarmacia = produto.cnpjFarmacia;
    return this.http.get<Produto>(`${this.buscarURL}/${cnpjFarmacia}/${codProduto}`);
  }

  listar(farmacia: Farmacia): Observable<Produto[]> {
    var cnpj = farmacia.cnpj;
    return this.http.get<Produto[]>(this.listarURL + "/" + cnpj);
  }

  alterar(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.alterarURL, produto);
  }

  remover(produto: Produto) {
    var cnpjFarmacia = produto.cnpjFarmacia;
    var codProduto = produto.codigo;
    this.http.get<Produto>(`${this.removerURL}/${cnpjFarmacia}/${codProduto}`);
  }

}
