import { Component, OnInit } from '@angular/core';
import { Transacao } from 'src/app/models/Transacao';
import { CompraService } from 'src/app/services/compra.service';
import { FarmaService } from 'src/app/services/farma.service';

@Component({
  selector: 'app-farma-transacao',
  templateUrl: './farma-transacao.component.html',
  styleUrls: ['./farma-transacao.component.css']
})
export class FarmaTransacaoComponent implements OnInit {

  cnpjFarmacia: String = "";
  transacoes: Transacao[] = [];
  displayedColumns: string[] = ['produto', 'usuario', 'valor', 'status', 'aprovar'];

  constructor(private farmaService: FarmaService, private compraService: CompraService) { }

  ngOnInit(): void {
    this.farmaService.buscar().subscribe((farma) => {
      this.cnpjFarmacia = farma.cnpj;
      this.compraService.pegarComprasFarmacia(this.cnpjFarmacia).subscribe(resposta => {
        this.transacoes = resposta;
      });
    });
  }

  aprovarTransacao(transacao) {
    transacao.status = "aprovado";
    this.compraService.atualizarTransacao(transacao).subscribe(resposta => {
      console.log(resposta);
    });
  }

}
