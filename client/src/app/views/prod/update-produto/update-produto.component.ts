import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from "src/app/models/Produto";
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-update-produto',
  templateUrl: './update-produto.component.html',
  styleUrls: ['./update-produto.component.css']
})
export class UpdateProdutoComponent implements OnInit {
  
  cnpj: String;
  produto: Produto = {
    nome: "",
    codigo: "",
    preco: 0.0,
    descricao: "",
    cnpjFarmacia: ""
  };

  constructor(private produtoService: ProdutoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.cnpj = params['cnpj']);
    this.produto.cnpjFarmacia = this.cnpj;
  }
  
  alterar(): void {
    this.produtoService.alterar(this.produto).subscribe((produto => {
      console.log(produto);
    }));
  }
}