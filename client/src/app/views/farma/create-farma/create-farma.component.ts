import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Farmacia } from "src/app/models/Farmacia";
import { FarmaService } from 'src/app/services/farma.service';
import { NavegacaoService } from 'src/app/services/navegacao.service';

@Component({
  selector: "app-create-farma",
  templateUrl: "./create-farma.component.html",
  styleUrls: ["./create-farma.component.css"],
})
export class CreateFarmaComponent implements OnInit {

  farma: Farmacia = {
    nome: "",
    cnpj: ""
  };

  constructor(private router: Router, private service: FarmaService, private navService: NavegacaoService) { }

  ngOnInit(): void {
    var user = JSON.parse(localStorage.getItem('user'));
    this.farma.usuarioId = user._id;
  }

  create(): void {
    this.service.create(this.farma).subscribe((farma) => {
      this.logIn();
    });
  }

  logIn() {
    this.navService.alterarTipoUsuario("farmacia");
    this.router.navigate(['farma']);
  }
}
