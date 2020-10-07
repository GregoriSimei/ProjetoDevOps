import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Farmacia } from "src/app/models/Farmacia";
import { FarmaService } from 'src/app/services/farma.service';

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
  constructor(private router: ActivatedRoute, private farmaService: FarmaService) {
    this.router.params.subscribe(params => this.farma.cnpj = params['cnpj']);
  }

  remover(): void {
    this.farmaService.remover(this.farma).subscribe((farma) => {
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

}
