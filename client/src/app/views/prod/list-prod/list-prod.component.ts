import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Farmacia } from 'src/app/models/Farmacia';
import { Produto } from 'src/app/models/Produto';
import { FarmaService } from 'src/app/services/farma.service';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-list-prod',
  templateUrl: './list-prod.component.html',
  styleUrls: ['./list-prod.component.css']
})
export class ListProdComponent implements OnInit {

  dataSource;
  displayedColumns: string[] = ['codigo', 'nome', 'preco', 'descricao', 'criacao', 'adicionar'];

  farmacias: Farmacia[] = [];
  produtos: Produto[] = [];

  constructor(private router: Router, private farmaService: FarmaService, private prodService: ProdutoService) { }

  ngOnInit(): void {
    this.farmaService.list().subscribe((lista) => {
      this.farmacias = lista;
      lista.forEach(farmacia => {
        farmacia.produtos.forEach(produto => {
          this.produtos.unshift(produto);
        });
      });
      console.log(this.produtos);
      this.dataSource = new MatTableDataSource(this.produtos);
    });
  }

  aplicarFiltro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
