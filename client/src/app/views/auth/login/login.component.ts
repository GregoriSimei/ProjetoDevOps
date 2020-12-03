import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private serviceAuth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logIn() {
    this.serviceAuth.logIn(this.user).subscribe(resposta => {
      var token = "Bearer " + resposta.token;
      localStorage.setItem('token', JSON.stringify(token));
      localStorage.setItem('user', JSON.stringify(resposta.user));
      if (resposta.user.tipo == "cliente") {
        this.router.navigate(['/cliente']);
      }
      else {
        this.router.navigate(['/farma']);
      }
    });
  }

  registrar() {
    this.serviceAuth.registar(this.user).subscribe(resposta => {
      this.logIn();
    })
  }
}
