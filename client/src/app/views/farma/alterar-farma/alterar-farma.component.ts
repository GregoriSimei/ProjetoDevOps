import { ActivatedRoute } from '@angular/router';
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

  constructor(private router: ActivatedRoute, private farmaService: FarmaService) { 
    this.router.params.subscribe(params => this.farma.cnpj = params['cnpj']);
  }

  ngOnInit(): void {
    
      }
  
  alterar(): void {
    this.farmaService.alterar(this.farma).subscribe((farma => {
      console.log(farma);
    }));

  }
}
