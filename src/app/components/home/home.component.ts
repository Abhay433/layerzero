import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from "../usecase/usecase.component";
import { UsecaseComponent } from "../features/features.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  features = [
    { 
      title: 'Explainable AI', 
      desc: 'Every outcome with a chain of logic and explanation in human terms to deepen trust.' 
    },
    { 
      title: 'Explore & Visualize', 
      desc: 'Build custom machine learning models to analyze data, predict outcomes and create processes.' 
    },
    { 
      title: 'Real time insights', 
      desc: 'Refine your decisions and outcomes based on reasoned explanations in real time 24x7.' 
    },
    { 
      title: 'Integrated Workspace', 
      desc: 'Streamline the entire process of data analysis, visualization and interpretation on a single interface.' 
    }
  ];

  scrollToFeatures() {
    const element = document.getElementById('use-cases');
    if (element) {
      const yOffset = -80; // adjust if you have a fixed navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
  
}