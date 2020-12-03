import { Component, OnInit } from '@angular/core';
import { Compra } from 'src/app/models/Compra';
import { CompraService } from 'src/app/services/compra.service';

@Component({
  selector: 'app-cliente-transacao',
  templateUrl: './cliente-transacao.component.html',
  styleUrls: ['./cliente-transacao.component.css']
})
export class ClienteTransacaoComponent implements OnInit {

  constructor(private compraService: CompraService) { }

  step = 1;
  compras: Compra[] = [];

  ngOnInit(): void {
    this.compraService.pegarComprasUsuario().subscribe(resposta => {
      this.compras = resposta;
    });
  }

  setStep(index: number) {
    this.step = index;
  }
}
