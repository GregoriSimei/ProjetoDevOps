import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/models/Produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-create-produto',
  templateUrl: './create-produto.component.html',
  styleUrls: ['./create-produto.component.css']
})
export class CreateProdutoComponent implements OnInit {

  cnpj: String;
  produto: Produto = {
    nome: "",
    codigo: "",
    preco: 0.0,
    descricao: "",
    cnpjFarmacia: ""
  };


  constructor(private route: ActivatedRoute,private service: ProdutoService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.cnpj = params['cnpj']);
    this.produto.cnpjFarmacia = this.cnpj;
  }
  cadastrar() {
    console.log(this.produto);
    this.service.cadastrar(this.produto).subscribe((produto) => {
      console.log(produto);
    });
  }

}
