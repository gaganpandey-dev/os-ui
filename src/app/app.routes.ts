import { Routes } from '@angular/router';

import { Landing } from './features/landing/pages/landing/landing';
import { RegisterRequest } from './features/register-request/pages/register-request/register-request';


export const routes: Routes = [

  {
    path: '',
    component: Landing
  },

  {
    path: 'register-request',
    component: RegisterRequest
  },
{
  path: 'registration-status',
  loadComponent: () =>
    import('./features/register-request/pages/registration-status/registration-status')
      .then(m => m.RegistrationStatus)
},

  {
    path: 'about',
    loadComponent: () =>
      import('./features/landing/pages/about/about')
        .then(m => m.About)
  },

  {
    path: 'features',
    loadComponent: () =>
      import('./features/landing/pages/features/features')
        .then(m => m.Features)
  },
  {
  path: 'login',
  loadComponent: () =>
    import('./features/auth/pages/login/login')
      .then(m => m.Login)
},

{
  path: 'create-password',
  loadComponent: () =>
    import('./features/auth/pages/create-password/create-password')
      .then(m => m.CreatePassword)
}

];
