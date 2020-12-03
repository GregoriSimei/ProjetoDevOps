import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Usuario } from '../models/Usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URLBase = "http://localhost:1234";

  constructor(private http: HttpClient) { }

  logIn(usuario: Usuario) {
    return this.http.post<any>(`${this.URLBase}/autenticar`, usuario);
  }

  registar(usuario: Usuario) {
    return this.http.post<any>(`${this.URLBase}/registrar`, usuario);
  }

}
