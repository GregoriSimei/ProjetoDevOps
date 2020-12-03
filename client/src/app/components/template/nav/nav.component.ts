import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavegacaoService } from '../../../services/navegacao.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  open: boolean = true;
  tipoUsuario: String = "";

  constructor(private router: Router, private navService: NavegacaoService) {
    navService.cliente$.subscribe(tipo => {
      this.tipoUsuario = tipo;
    });
  }

  ngOnInit(): void {
  }

  opened(valor) {
    this.open = valor;
  }
}
