import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isMobileMenuOpen = false;
  isScrolled = false;
  isSolutionsOpen = false;


  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {

    const target = event.target as HTMLElement;

    if (!target.closest('.nav-dropdown')) {
      this.isSolutionsOpen = false;
    }

  }


  toggleMobileMenu(): void {

    this.isMobileMenuOpen =
      !this.isMobileMenuOpen;

    if (!this.isMobileMenuOpen) {
      this.isSolutionsOpen = false;
    }

  }


  closeMobileMenu(): void {

    this.isMobileMenuOpen = false;
    this.isSolutionsOpen = false;

  }


  toggleSolutions(): void {

    this.isSolutionsOpen =
      !this.isSolutionsOpen;

  }


  closeSolutions(): void {

    this.isSolutionsOpen = false;

  }

}