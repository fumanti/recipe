import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() selected = 'recipe';

  navClick(event) {
    this.selected = event.target.name;
  }
}
