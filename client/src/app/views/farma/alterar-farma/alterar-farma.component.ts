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

  constructor(private farmaService: FarmaService) { }

  ngOnInit(): void {
    
      }
  
  alterar(): void {
    this.farmaService.alterar(this.farma).subscribe((farma => {
      console.log(farma);
      //this.farma = farma;
    }));

/*   alterarbuscar(): void{
    this.farmaService.buscar(this.farma).subscribe((farma) => {
      console.log(farma);
      this.farma = farma;
  }); */

  }
}
