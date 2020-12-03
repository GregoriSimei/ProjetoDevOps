import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  open: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  opened(valor) {
    this.open = valor;
  }

}
