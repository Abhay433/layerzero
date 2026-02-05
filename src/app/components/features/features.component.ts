import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { SupabaseService } from '../../services/supabase.service';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  capabilities = [
    { title: 'Unified 3D Workspace', desc: 'High-performance environment for multi-layer Earth data exploration and visualization.' },
    { title: 'Smart Remote Sensing', desc: 'Automated ingestion of Sentinel, Landsat, ASTER, and commercial imagery with AI processing.' },
    { title: 'AI Modeling Workflows', desc: 'Classification, prospectivity prediction, change detection, and geophysical inversion.' },
    { title: 'Raster & Vector Processing', desc: 'Load, visualize, and process complex geospatial datasets with customizable workflows.' },
    { title: 'Enterprise Grade & Scalable', desc: 'Built and trained by top researchers, engineers and industry professionals. Ability to handle massive data sets.' },
    { title: 'Custom feature development', desc: 'Customization ability to meet your business needs upto any level.' }
  ];

  

  
}