import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() menu = new EventEmitter();
  open: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  opened() {
    if (this.open) {
      this.open = false;
    }
    else {
      this.open = true;
    }
    this.menu.emit(this.open);
  }
}
