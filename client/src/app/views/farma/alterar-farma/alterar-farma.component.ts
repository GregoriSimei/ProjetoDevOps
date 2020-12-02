import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Farmacia } from "src/app/models/Farmacia";
import { FarmaService } from 'src/app/services/farma.service';


@Component({
  selector: 'app-alterar-farma',
  templateUrl: './alterar-farma.component.html',
  styleUrls: ['./alterar-farma.component.css']
})
export class AlterarFarmaComponent implements OnInit {

  farma: Farmacia = {
    nome: "",
    cnpj: ""
  };

  constructor(private router: Router, private route: ActivatedRoute, private farmaService: FarmaService) {
    this.route.params.subscribe(params => this.farma.cnpj = params['cnpj']);
  }

  ngOnInit(): void {
    this.farmaService.buscar().subscribe((farma) => {
      console.log(farma);
      this.farma = farma;

    });
  }

  alterar(): void {
    this.farmaService.alterar(this.farma).subscribe((farma => {
      console.log(farma);
    }));
  }

  retornarFarmacias() {
    this.router.navigate(['/farma/list']);
  }
}
