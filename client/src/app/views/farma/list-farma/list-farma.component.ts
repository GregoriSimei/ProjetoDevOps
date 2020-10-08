import { Farmacia } from './../../../models/Farmacia';
import { FarmaService } from './../../../services/farma.service';
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";


@Component({
  selector: "app-list-farma",
  templateUrl: "./list-farma.component.html",
  styleUrls: ["./list-farma.component.css"],
})
export class ListFarmaComponent implements OnInit {

  farmaPesquisa: Farmacia = {
    cnpj: "",
    nome: ""
  };
  farmas: Farmacia[] = [];

  constructor(private router: Router, private farmaService: FarmaService) { }

  ngOnInit(): void {
    this.farmaService.list().subscribe((lista) => {
      console.log(lista);
      this.farmas = lista;
    });
  }

  navigateToCreateFarma(): void {
    this.router.navigate(['farma/create']);
  }

  pesquisarFarma() {
    this.router.navigate(["farma/buscar/" + this.farmaPesquisa.cnpj]);
  }

  alterarFarma(farma: Farmacia) {
    this.router.navigate(["farma/alterar/" + farma.cnpj]);
  }

  removerFarma(farma: Farmacia) {
    this.router.navigate(["farma/remover/" + farma.cnpj]);
  }

}
