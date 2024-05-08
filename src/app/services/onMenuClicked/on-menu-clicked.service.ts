import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OnMenuClickedService {

  isMenuOpen: boolean = false;
  constructor() {}
  onToggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    return this.isMenuOpen;
  }
}
