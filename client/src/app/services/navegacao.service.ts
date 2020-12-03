import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Compra } from '../models/Compra';
import { Transacao } from '../models/Transacao';

@Injectable({
  providedIn: 'root'
})
export class NavegacaoService {

  private usuarioTipo = new Subject<String>();

  constructor() { }

  cliente$ = this.usuarioTipo.asObservable();

  alterarTipoUsuario(tipo: string) {
    this.usuarioTipo.next(tipo);
  }

}
