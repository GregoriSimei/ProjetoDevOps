import { Component, OnInit } from '@angular/core';
import { Farmacia } from "src/app/models/Farmacia";
import { FarmaService } from 'src/app/services/farma.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-buscar-farma',
  templateUrl: './buscar-farma.component.html',
  styleUrls: ['./buscar-farma.component.css']
})
export class BuscarFarmaComponent implements OnInit {

  farma: Farmacia = {
    nome: "",
    cnpj: ""
  };



  constructor(private router: Router, private farmaService: FarmaService) {}

  buscar(): void {
    this.farmaService.buscar(this.farma).subscribe((farma) => {
    console.log(farma);
    this.farma = farma;
    });
  }
  ngOnInit(): void {
    
  }

}
