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

  cnpjFarmacia: Number;
  farmacia: Farmacia;
  produtos: Produto[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private serviceProd: ProdutoService, private serviceFarma: FarmaService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.cnpjFarmacia = params['cnpj']);
    this.serviceProd.listar(this.cnpjFarmacia).subscribe((lista) => {
      this.produtos = lista;
    });
  }

  cadastrar() {
    this.router.navigate(['farma/' + this.cnpjFarmacia + '/cadastrar/produto']);
  }

}
