import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

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
