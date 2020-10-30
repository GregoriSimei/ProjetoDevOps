import { Component, ViewChild } from '@angular/core';
import { NavComponent } from './components/template/nav/nav.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent {

  @ViewChild(NavComponent, { static: false })
  filho: NavComponent;

  abrirMenu(valor) {
    this.filho.open = valor;
  }

}
