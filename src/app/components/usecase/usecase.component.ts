import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usecase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usecase.component.html',
  styleUrl: './usecase.component.css'
})
export class UsecaseComponent {
  constructor(private router: Router) {}

  onExplore(item: any) {
    console.log('Explore clicked for:', item.title);
    if(item.title === 'HIGH RESOLUTION BATHYMETRY') {
      this.router.navigate(['/bathymetry']);
    }
    if (item.title === 'DISASTER MANAGEMENT RESPONSE') {
      this.router.navigate(['/disaster']);
    }
    if (item.title === 'CRITICAL LOGISTICS') {
      this.router.navigate(['/critical']);
    }
    if(item.title === 'DEFENSE & COMBAT PRECISION') {
      this.router.navigate(['/defense']);
    }
  }
  stackItems = [
    { 
      title: 'HIGH RESOLUTION BATHYMETRY', 
      desc: 'LizoAI streams raw acoustic data from multibeam sonar systems to create clean bathymetry and backscatter products during live acquisition. Utilizing adaptive AI models, the platform automatically filters acoustic noise, corrects for vessel motion, and rejects outliers dynamically. It generates instant bathymetric grids and normalized backscatter mosaics directly onboard the vessel.' 
    },
   
    { 
      title: 'DISASTER MANAGEMENT RESPONSE', 
      desc: 'Transforming live airborne scanning data into instant, hydraulically reliable terrain models, LizoAI accelerates emergency flood response. Using AI-driven filtering, the platform accurately maps critical flow paths and infrastructure beneath dense vegetation in real-time. This allows command centers to immediately predict flood extents and coordinate safe evacuations without waiting for post-event data processing.' 
    },
    { 
      title: 'CRITICAL LOGISTICS', 
      desc: 'To determine off-road vehicle passability, LizoAI combines real-time land cover classification, soil moisture indexes, and Digital Elevation Model (DEM) slope calculations. By generating these dynamic traversability cost-surfaces, the platform ensures critical supply chain continuity.'
    },
   
    { 
      title: 'DEFENSE & COMBAT PRECISION', 
      desc: 'LizoAI automates the ingestion of daily Synthetic Aperture Radar (SAR) and high-resolution optical data to run continuous time-series change detection over strategic areas. Using pixel-based classification and deep learning object detection nodes, the platform practically isolates new infrastructure development, tracks heavy vehicle movements, and maps the expansion of defensive trenches.' 
    }
  ];
}