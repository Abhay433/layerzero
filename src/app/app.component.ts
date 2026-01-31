import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { FeaturesComponent } from './components/features/features.component';
import { UsecaseComponent } from './components/usecase/usecase.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, HomeComponent, FeaturesComponent, UsecaseComponent],
  template: `
    <app-header></app-header>
    
    <section id="home"><app-home></app-home></section>
    <section id="features"><app-features></app-features></section>
    <section id="use-cases"><app-usecase></app-usecase></section>
    
    <app-footer></app-footer>
  `
})
export class AppComponent {}