import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SupabaseService } from '../../services/supabase.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-usecase',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './usecase.component.html',
  styleUrl: './usecase.component.css'
})
export class UsecaseComponent {

  emailExists: boolean = false;
  constructor(private router: Router,
    private supabaseService: SupabaseService

  ) {}

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

  form = {
    first_name: '',
    last_name: '',
    email: '',
    address: ''
  };
  isSubmitting = false;


  async checkEmailOnBlur() {
    // Don't check if the field is empty or invalid format
    if (!this.form.email || !this.form.email.includes('@')) return;
  
    const { data } = await this.supabaseService
      .getClient()
      .from('contact_messages') // Replace with your actual table name
      .select('email')
      .eq('email', this.form.email)
      .maybeSingle();
  
    this.emailExists = !!data; // Sets true if data exists, false if null
  }


  async onSubmit(contactForm: NgForm) {
    if (contactForm.invalid || this.isSubmitting) return;
  
    this.isSubmitting = true;
    
  
    try {
      // 1. Correct way to call the client from the service
      const { data, error: checkError } = await this.supabaseService
        .getClient() // Just call the function here
        .from('contact_messages') // Replace with your actual table name
        .select('email')
        .eq('email', this.form.email)
        .maybeSingle();
  
      if (data) {
        alert('⚠️ This email is already registered!');
        this.isSubmitting = false;
        return; 
      }
  
      // 2. Proceed if email is unique
      const { error } = await this.supabaseService.saveContact(this.form);
  
      if (error) {
        alert('❌ Failed to submit form');
      } else {
        alert('✅ Message sent successfully!');
        contactForm.resetForm();
        this.form = { first_name: '', last_name: '', email: '', address: '' };
      }
    } catch (err) {
      console.error('System error:', err);
    } finally {
      this.isSubmitting = false;
    }
  }


}