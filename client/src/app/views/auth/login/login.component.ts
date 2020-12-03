import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavegacaoService } from 'src/app/services/navegacao.service';
import { Usuario } from '../../../models/Usuario';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Usuario = {
    usuario: "",
    senha: "",
    tipo: ""
  };

  constructor(private serviceAuth: AuthService, private navService: NavegacaoService, private router: Router) { }

  ngOnInit(): void {
  }

  logIn() {
    this.serviceAuth.logIn(this.user).subscribe(resposta => {

      this.adicionarLocalmente(resposta);

      var tipo = resposta.user.tipo;
      this.navService.alterarTipoUsuario(tipo);

      if (tipo == "cliente") {
        this.router.navigate(['/cliente']);
      }
      else {
        this.router.navigate(['/farma']);
      }
    });
  }

  registrar() {
    this.serviceAuth.registar(this.user).subscribe(resposta => {
      this.adicionarLocalmente(resposta);
      if (resposta.user.tipo == "farmacia") {
        this.router.navigate(['farma/create']);
      }
      else {
        this.logIn();
      }
    })
  }

  adicionarLocalmente(any) {
    var token = "Bearer " + any.token;
    localStorage.setItem('token', JSON.stringify(token));
    localStorage.setItem('user', JSON.stringify(any.user));
  }
}
