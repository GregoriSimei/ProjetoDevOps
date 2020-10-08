import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Farmacia } from "src/app/models/Farmacia";
import { FarmaService } from 'src/app/services/farma.service';

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



  constructor(private router: ActivatedRoute,private router2: Router, private farmaService: FarmaService) {
    this.router.params.subscribe(params => this.farma.cnpj = params['cnpj']);
  }

  buscar(): void {
    this.farmaService.buscar(this.farma).subscribe((farma) => {
    console.log(farma);
    this.farma = farma;
    });
  }
  ngOnInit(): void {
    this.farmaService.buscar(this.farma).subscribe((farma) => {
      console.log(farma);
      this.farma = farma;
    
      });
    }

  navigateToUpdateFarma(): void {
    this.router2.navigate(['farma/alterar/'+this.farma.cnpj]);
  }

  navigateToRemoveFarma(): void {
    this.router2.navigate(['farma/remover/'+this.farma.cnpj]);
  }

}
