import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Farmacia } from 'src/app/models/Farmacia';
import { Produto } from 'src/app/models/Produto';
import { FarmaService } from 'src/app/services/farma.service';
import { ProdutoService } from '../../../services/produto.service';

@Component({
  selector: 'app-list-produto',
  templateUrl: './list-produto.component.html',
  styleUrls: ['./list-produto.component.css']
})
export class ListProdutoComponent implements OnInit {

  farmacia: Farmacia = {
    nome: "",
    cnpj: ""
  };

  cnpjFarmacia: string;
  produtos: Produto[] = [];
  produtosGuardados: Produto[] = null;
  dataSource;
  displayedColumns: string[] = ['codigo', 'nome', 'preco', 'descricao', 'criacao', 'alterar', 'deletar'];

  constructor(private router: Router, private route: ActivatedRoute, private serviceProd: ProdutoService, private serviceFarma: FarmaService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.cnpjFarmacia = params['cnpj']);
    this.serviceProd.listar(this.cnpjFarmacia).subscribe((lista) => {
      this.produtos = lista;
      this.dataSource = new MatTableDataSource(this.produtos);
    });
    this.serviceFarma.buscar({ nome: "", cnpj: this.cnpjFarmacia }).subscribe((farma) => {
      this.farmacia = farma;
    });
  }

  cadastrarProduto() {
    this.router.navigate(['farma/' + this.cnpjFarmacia + '/cadastrar/produto']);
  }

  removerProduto(produto: Produto) {
    this.produtos.splice(this.produtos.indexOf(produto), 1);
    this.dataSource = new MatTableDataSource(this.produtos);
    this.serviceProd.remover(produto);
  }

  alterarProduto(produto: Produto) {
    this.router.navigate(['farma/' + produto.cnpjFarmacia + "/produto/" + produto.codigo + "/atualizar"]);
  }

  aplicarFiltro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  retornarHome() {
    this.router.navigate(['']);
  }
}
