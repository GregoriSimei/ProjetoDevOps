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
  displayedColumns: string[] = ['cnpj', 'nome', 'criado em', 'alterar', 'deletar'];

  farmas: Farmacia[] = [];

  constructor(private router: Router, private farmaService: FarmaService) { }

  ngOnInit(): void {
    this.farmaService.list().subscribe((lista) => {
      this.farmas = lista;
      this.dataSource = new MatTableDataSource(this.farmas);
    });
  }

  navigateToCreateFarma(): void {
    this.router.navigate(['farma/create']);
  }

  alterarFarma(farma: Farmacia) {
    this.router.navigate(["farma/alterar/" + farma.cnpj]);
  }

  removerFarma(farma: Farmacia) {
    this.farmas.splice(this.farmas.indexOf(farma), 1);
    this.dataSource = new MatTableDataSource(this.farmas);
    this.farmaService.remover(farma).subscribe((farma) => { });
  }

  aplicarFiltro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
