import { Farmacia } from './../../../models/Farmacia';
import { FarmaService } from './../../../services/farma.service';
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: "app-list-farma",
  templateUrl: "./list-farma.component.html",
  styleUrls: ["./list-farma.component.css"],
})
export class ListFarmaComponent implements OnInit {

  dataSource;
  displayedColumns: string[] = ['cnpj', 'nome', 'criacao', 'alterar', 'deletar', 'listarProdutos'];

  farmacias: Farmacia[] = [];

  constructor(private router: Router, private farmaService: FarmaService) { }

  ngOnInit(): void {
    this.farmaService.list().subscribe((lista) => {
      this.farmacias = lista;
      this.dataSource = new MatTableDataSource(this.farmacias);
    });
  }

  cadastrarFarma() {
    this.router.navigate(['farma/create']);
  }

  removerFarma(farmacia: Farmacia) {
    this.farmacias.splice(this.farmacias.indexOf(farmacia), 1);
    this.dataSource = new MatTableDataSource(this.farmacias);
    this.farmaService.remover(farmacia);
  }

  alterarFarma(farma: Farmacia) {
    this.router.navigate(["farma/alterar/" + farma.cnpj]);
  }

  aplicarFiltro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  listarProdutos() {
    this.router.navigate(['/farma']);
  }

}
