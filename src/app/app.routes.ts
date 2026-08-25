import { Routes } from '@angular/router';

import { Landing } from './features/landing/pages/landing/landing';

import { RegisterRequest } from './features/register-request/pages/register-request/register-request';

import { Dashboard } from './features/dashboard/pages/dashboard/dashboard';

import { DashboardHome } from './features/dashboard/pages/dashboard-home/dashboard-home';

import { Notes } from './features/dashboard/pages/notes/notes';


export const routes: Routes = [

  // =========================
  // LANDING
  // =========================

  {
    path: '',
    component: Landing
  },


  // =========================
  // REGISTRATION
  // =========================

  {
    path: 'register-request',
    component: RegisterRequest
  },

  {
    path: 'registration-status',

    loadComponent: () =>
      import(
        './features/register-request/pages/registration-status/registration-status'
      )
      .then(m => m.RegistrationStatus)
  },


  // =========================
  // LANDING PAGES
  // =========================

  {
    path: 'about',

    loadComponent: () =>
      import(
        './features/landing/pages/about/about'
      )
      .then(m => m.About)
  },

  {
    path: 'features',

    loadComponent: () =>
      import(
        './features/landing/pages/features/features'
      )
      .then(m => m.Features)
  },


  // =========================
  // AUTH
  // =========================

  {
    path: 'login',

    loadComponent: () =>
      import(
        './features/auth/pages/login/login'
      )
      .then(m => m.Login)
  },

  {
    path: 'create-password',

    loadComponent: () =>
      import(
        './features/auth/pages/create-password/create-password'
      )
      .then(m => m.CreatePassword)
  },


  // =========================
  // DASHBOARD
  // =========================

  {
    path: 'dashboard',

    component: Dashboard,

    children: [

      // /dashboard
      {
        path: '',
        component: DashboardHome
      },

      // /dashboard/notes
      {
        path: 'notes',
        component: Notes
      }

    ]
  }

];
