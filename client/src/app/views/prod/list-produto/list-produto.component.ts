import { Component, OnInit } from '@angular/core';
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

  produtoPesquisa: Produto = {
    codigo: "",
    nome: "",
    descricao: "",
    preco: 0.0,
    cnpjFarmacia: ""
  };

  farmacia: Farmacia = {
    nome: "",
    cnpj: ""
  };

  cnpjFarmacia: string;
  produtos: Produto[] = [];
  produtosGuardados: Produto[] = null;

  constructor(private router: Router, private route: ActivatedRoute, private serviceProd: ProdutoService, private serviceFarma: FarmaService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.cnpjFarmacia = params['cnpj']);
    this.serviceProd.listar(this.cnpjFarmacia).subscribe((lista) => {
      this.produtos = lista;
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
    this.serviceProd.remover(produto);
  }

  pesquisarProduto() {
    this.produtoPesquisa.cnpjFarmacia = this.cnpjFarmacia;

    if (this.produtosGuardados == null) {
      this.produtosGuardados = this.produtos;
    }

    if (this.produtoPesquisa.codigo != "") {
      this.serviceProd.buscar(this.produtoPesquisa).subscribe((produto) => {
        this.produtos = [];
        this.produtos.push(produto);
      });
    }
    else {
      this.produtos = this.produtosGuardados;
    }
  }

  alterarProduto(produto: Produto) {
    this.router.navigate(['farma/' + produto.cnpjFarmacia + "/produto/" + produto.codigo + "/atualizar"]);
  }

}
