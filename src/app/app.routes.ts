import { Routes } from '@angular/router';
// import { HomeComponent } from './components/home/home.component';
import { UsecaseComponent } from './components/usecase/usecase.component';
import { FeaturesComponent } from './components/features/features.component';
import { BathymetryComponent } from './components/bathymetry/bathymetry.component';
import { LandingComponent } from './components/landing/landing.component';
import { DisasterComponent } from './components/disaster/disaster.component';
import { CriticalComponent } from './components/critical/critical.component';
import { DefenseComponent } from './components/defense/defense.component';


export const routes: Routes = [
  {path: '',component: LandingComponent,title: 'LayerZero - Home'},
  { path: 'features', component: FeaturesComponent },
  { path: 'use-cases', component: UsecaseComponent },
  { path: 'bathymetry', component: BathymetryComponent },
  {path : 'disaster', component:DisasterComponent},
  {path : 'critical', component :CriticalComponent},
  {path : 'defense', component :DefenseComponent}
  

];