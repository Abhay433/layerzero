import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; // Added RouterModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router: Router) {}

  async scrollToContact() {
    // Check if we are already on the home page (LandingComponent)
    const element = document.getElementById('contact');

    if (!element) {
      // If element is missing, we navigate to the root path ('')
      await this.router.navigate(['/']);
      
      // We use a small timeout to ensure the LandingComponent has 
      // finished rendering before we look for the 'contact' ID
      setTimeout(() => {
        this.performScroll();
      }, 150); 
    } else {
      this.performScroll();
    }
  }

  private performScroll() {
    const element = document.getElementById('contact');
    if (element) {
      const yOffset = -105;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
  

}
