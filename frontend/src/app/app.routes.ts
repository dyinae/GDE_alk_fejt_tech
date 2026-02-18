import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AccommodationsComponent } 
  from './pages/accommodations/accommodations';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [


  { path: '', component: HomeComponent },


  { path: 'register', component: RegisterComponent },


  { path: 'login', component: LoginComponent },


  { 
    path: 'accommodations',
    component: AccommodationsComponent,
    canActivate: [authGuard]
  },


  { path: '**', redirectTo: '' }

];
