import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FeaturesComponent } from './components/features/features.component';
import { UsecaseComponent } from './components/usecase/usecase.component';

export const routes: Routes = [
  {path: '',component: HomeComponent,title: 'LayerZero - Home'},
  { path: 'features', component: FeaturesComponent },
  { path: 'use-cases', component: UsecaseComponent }

];