import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  imports: [CommonModule],
  templateUrl: './usecase.component.html',
  styleUrl: './usecase.component.css'
})
export class FeaturesComponent {
  stackItems = [
    { 
      title: 'DEFENSE & COMBAT PRECISION', 
      desc: 'Automatically flag anomalies in enemy activity, from the subtle establishment of new supply caches to the gradual reinforcement of defensive perimeters.' 
    },
    { 
      title: 'DISASTER MANAGEMENT RESPONSE', 
      desc: 'When a disaster strikes, Lizo provides a Real-Time Damage Assessment. This identifies blocked transit routes, dammed rivers, and structural failures within minutes, enabling command centers to coordinate rescue operations with absolute environmental clarity.' 
    },
    { 
      title: 'CRITICAL LOGISTICS', 
      desc: 'Using Terrain-Aware routing, Lizo Intelligence provides the spatial backbone for autonomous navigation and predictive sustainment, ensuring the flow of essentials remains uninterrupted where traditional infrastructure collapses.' 
    },
    { 
      title: 'HIGH RESOLUTION BATHYMETRY', 
      desc: 'Lizo integrates a combination of data for 3D Floor Mapping to provide an automated, repeatable and real-time reporting for anomaly detection.' 
    }
  ];
}