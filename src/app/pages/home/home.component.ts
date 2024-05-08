import { Component } from '@angular/core';
import { OnMenuClickedService } from '../../services/onMenuClicked/on-menu-clicked.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private menuClicked: OnMenuClickedService) {}
  get isMenuClicked(): boolean {
    return this.menuClicked.isMenuOpen;
  }
  onClick() {
    console.log(this.isMenuClicked);
  }
}
