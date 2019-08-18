import { Component, Input, ViewChild, OnChanges, DoCheck } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  @Input() feature = 'recipe';
  @ViewChild('header', {static: false}) header: HeaderComponent;

  ngDoCheck(): void {
    if (this.header !== undefined) {
      this.feature = this.header.selected;
    }
  }

}
