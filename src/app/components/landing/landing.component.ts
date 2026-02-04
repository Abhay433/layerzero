import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { FeaturesComponent } from '../features/features.component';
import { UsecaseComponent } from '../usecase/usecase.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [HomeComponent, FeaturesComponent, UsecaseComponent],
  template: `
    <section id="home"><app-home></app-home></section>
    <section id="features"><app-features></app-features></section>
    <section id="use-cases"><app-usecase></app-usecase></section>
  `
})
export class LandingComponent {}
