import { Component, OnInit } from '@angular/core';
import { Compra } from 'src/app/models/Compra';
import { CompraService } from '../../services/compra.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  displayedColumns: string[] = ['item', 'cost'];
  compra: Compra = {
    userId: "",
    transacoes: []
  }

  constructor(private compraService: CompraService) { }

  ngOnInit(): void {
    var userId = JSON.parse(localStorage.getItem('user'))._id;
    var transacoes = JSON.parse(localStorage.getItem('transacoes'));

    this.compra.userId = userId;
    this.compra.transacoes = transacoes;
  }

  getTotalCost() {
    var valor = 0;
    this.compra.transacoes.forEach(transacao => {
      valor += transacao.produto.preco;
    })
    return valor;
  }

  comprar() {
    this.compraService.comprar(this.compra).subscribe(resposta => { });
  }

}
