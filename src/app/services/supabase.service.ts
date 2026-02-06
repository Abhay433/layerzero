import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  getClient() {
    return this.supabase;
  }
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      'https://gtpljesgoyaumleugwrs.supabase.co',   // ✅ your real Supabase URL
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0cGxqZXNnb3lhdW1sZXVnd3JzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAwMjM1MDQsImV4cCI6MjA4NTU5OTUwNH0.XYtuSmd9P7UQ6DgmjaXlLmvgSlpptwa4xs-ksG8qlwc'                   // ✅ rotated key
    );
  }

  async saveContact(formData: any) {
    return await this.supabase
      .from('contact_messages')
      .insert([formData]);
  }
}
