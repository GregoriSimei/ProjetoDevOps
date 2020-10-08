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
  
  produto: Produto = {
    nome: "",
    codigo: "",
    preco: 0.0,
    descricao: "",
    cnpjFarmacia: ""
  };

  constructor(private produtoService: ProdutoService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.produto.codigo = params['codigo']);
    this.route.params.subscribe(params => this.produto.cnpjFarmacia = params['cnpj']);
   }

   ngOnInit(): void {
     console.log(this.produto.codigo);
     console.log(this.produto.cnpjFarmacia);
    this.produtoService.buscar(this.produto).subscribe((produto) => {
      this.produto = produto;
    
      });
    }
  
  alterar(): void {
    this.produtoService.alterar(this.produto).subscribe((produto => {
      console.log(produto);
    }));
  }
}