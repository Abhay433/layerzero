import { Component, ElementRef, ViewChild } from '@angular/core';
import { FeaturesComponent } from '../features/features.component';
import { CommonModule } from '@angular/common';
import { UsecaseComponent } from "../usecase/usecase.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule,FeaturesComponent,UsecaseComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  features = [
    { 
      title: 'Explainable AI', 
      desc: 'Every outcome with a chain of logic and explanation in human terms to deepen trust.', 
      icon: 'assets/ai-brain.png'
    },
    { 
      title: 'Explore & Visualize', 
      desc: 'Build custom machine learning models to analyze data, predict outcomes and create processes.',
      icon: 'assets/data-visualization.png'
    },
    { 
      title: 'Real time insights', 
      desc: 'Accelerate your decision making with high precision spatial data and automated insights generated in real time.', 
      icon: 'assets/insight.png'
    },
    { 
      title: 'Integrated Workspace', 
      desc: 'Streamline the entire process of data analysis, visualization and interpretation on a single interface.',
      icon: 'assets/grid.png' 
    }
  ];


  

  @ViewChild('heroVideo') heroVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    const video = this.heroVideo.nativeElement;
  
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
  
    const playVideo = () => {
      video.play().catch(err => {
        console.warn('Autoplay blocked:', err);
      });
    };
  
    playVideo();
  
    // 🔁 Force loop even if browser fails
    video.addEventListener('ended', () => {
      video.currentTime = 0;
      video.play();
    });
  
    // Fallback: play on first user interaction
    document.addEventListener('click', () => {
      playVideo();
    }, { once: true });
  }

  
  

  scrollToFeatures() {
    const element = document.getElementById('use-cases');
    if (element) {
      const yOffset = -80; // adjust if you have a fixed navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  
}

