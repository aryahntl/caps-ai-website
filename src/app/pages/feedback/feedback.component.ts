import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {

  constructor(
    private router: Router
  ) {}


  /**
   * Scroll to the first real product showcase.
   */
  scrollToProduct(): void {
    this.scrollTo('product-showcase');
  }


  /**
   * Scroll to the capabilities area.
   *
   * The feature sections themselves are the main capabilities
   * on this page, so this takes the user to the first
   * capabilities-related section.
   */
  scrollToCapabilities(): void {
    this.scrollTo('product-showcase');
  }


  /**
   * Generic smooth scrolling helper.
   */
  private scrollTo(elementId: string): void {

    const element = document.getElementById(elementId);

    if (!element) {
      return;
    }

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }


  /**
   * Navigate to the demo/contact page.
   *
   * Change '/contact' only if your application's route
   * uses another path.
   */
  requestDemo(): void {
    this.router.navigate(['/contact']);
  }


  /**
   * Navigate to the CAPS AI platform page.
   *
   * Change '/platform' only if your application's route
   * uses another path.
   */
  explorePlatform(): void {
    this.router.navigate(['/platform']);
  }

}