import { Component, OnInit } from '@angular/core';
import { OnMenuClickedService } from '../../services/onMenuClicked/on-menu-clicked.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  name: string = 'bars';
  isMenuOpen = false;

  constructor(private menuClicked: OnMenuClickedService) {}
  onToggleMenu() {
    this.name = this.name === 'bars' ? 'close' : 'bars';
    this.isMenuOpen = this.menuClicked.onToggleMenu();
  }
  
}
