import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/models/Produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-create-produto',
  templateUrl: './create-produto.component.html',
  styleUrls: ['./create-produto.component.css']
})
export class CreateProdutoComponent implements OnInit {

  cnpj: string;
  produto: Produto = {
    nome: "",
    codigo: "",
    preco: 0.0,
    descricao: ""
  };


  constructor(private router: Router, private route: ActivatedRoute, private service: ProdutoService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.cnpj = params['cnpj']);
  }
  cadastrar() {
    console.log(this.produto);
    this.service.cadastrar(this.produto, this.cnpj).subscribe((produto) => { });
  }

  retornarProdutos() {
    this.router.navigate(['farma/']);
  }

}
