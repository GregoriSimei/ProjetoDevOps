import { Component, OnInit } from '@angular/core';
import { Farmacia } from "src/app/models/Farmacia";
import { FarmaService } from 'src/app/services/farma.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-remover-farma',
  templateUrl: './remover-farma.component.html',
  styleUrls: ['./remover-farma.component.css']
})
export class RemoverFarmaComponent implements OnInit {
  farma: Farmacia = {
    nome: "",
    cnpj: ""
  };
  constructor(private router: Router, private farmaService: FarmaService) {}

  remover(): void {
    this.farmaService.remover(this.farma).subscribe((farma) => {
    console.log(farma);
    this.farma = farma;
    });
  }

  ngOnInit(): void {
  }

}
