import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Farmacia } from 'src/app/models/Farmacia';
import { Produto } from 'src/app/models/Produto';
import { Transacao } from 'src/app/models/Transacao';
import { FarmaService } from 'src/app/services/farma.service';
import { NavegacaoService } from 'src/app/services/navegacao.service';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-list-prod',
  templateUrl: './list-prod.component.html',
  styleUrls: ['./list-prod.component.css']
})
export class ListProdComponent implements OnInit {

  dataSource;
  produtos: Produto[] = [];
  displayedColumns: string[] = ['codigo', 'nome', 'preco', 'descricao', 'criacao', 'adicionar'];

  farmacias: Farmacia[] = [];
  transacoes: Transacao[] = [];

  transacoesCompra: Transacao[] = [];

  produto: Produto;

  constructor(private router: Router, private farmaService: FarmaService, private prodService: ProdutoService) { }

  ngOnInit(): void {
    this.farmaService.list().subscribe((lista) => {
      this.farmacias = lista;
      lista.forEach(farmacia => {
        farmacia.produtos.forEach(produto => {
          var transacao = new Transacao;
          transacao.cnpjFarmacia = farmacia.cnpj;
          transacao.produto = produto;
          transacao.qtd = 1;
          this.transacoes.push(transacao);
        });
      });
      this.dataSource = new MatTableDataSource(this.transacoes);
    });
  }

  aplicarFiltro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  addCarrinho(transacao): void {
    this.transacoesCompra.push(transacao);
    var carrinho = this.transacoesCompra;
    localStorage.setItem('transacoes', JSON.stringify(carrinho));
  }

}
