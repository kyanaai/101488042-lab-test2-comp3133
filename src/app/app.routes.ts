import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { CharacterDetailsComponent } from './components/characterdetails/characterdetails';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'character/:id', component: CharacterDetailsComponent }
];