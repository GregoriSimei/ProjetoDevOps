import { Farmacia } from './../../../models/Farmacia';
import { FarmaService } from './../../../services/farma.service';
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatTableDataSource } from '@angular/material/table';
import { Produto } from 'src/app/models/Produto';
import { ProdutoService } from 'src/app/services/produto.service';


@Component({
  selector: "app-list-farma-prod",
  templateUrl: "./list-farma-prod.component.html",
  styleUrls: ["./list-farma-prod.component.css"],
})
export class ListFarmaProdComponent implements OnInit {

  dataSource;
  displayedColumns: string[] = ['codigo', 'nome', 'preco', 'descricao', 'criacao', 'alterar', 'deletar'];

  produtos: Produto[] = [];
  produtosGuardados: Produto[] = null;

  farmacia: Farmacia = {
    cnpj: "",
    nome: ""
  };

  constructor(private router: Router, private farmaService: FarmaService, private prodService: ProdutoService) { }

  ngOnInit(): void {
    this.farmaService.buscar().subscribe((farma) => {
      this.farmacia = farma;
      this.produtos = farma.produtos;
      this.dataSource = new MatTableDataSource(this.produtos);
    });
  }

  alterarFarma(farma: Farmacia) {
    this.router.navigate(["farma/alterar/" + farma.cnpj]);
  }

  cadastrarProduto() {
    this.router.navigate(['farma/' + this.farmacia.cnpj + '/produto']);
  }

  removerProduto(produto: Produto) {
    this.produtos.splice(this.produtos.indexOf(produto), 1);
    this.dataSource = new MatTableDataSource(this.produtos);
    this.prodService.remover(produto, this.farmacia.cnpj);
  }

  alterarProduto(produto: Produto) {
    this.router.navigate(['farma/' + this.farmacia.cnpj + "/produto/" + produto.codigo]);
  }

  aplicarFiltro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
