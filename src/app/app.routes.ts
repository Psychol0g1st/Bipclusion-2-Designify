import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/loading-screen',
    pathMatch: 'full',
  },
  {
    path: 'signin',
    loadComponent: () =>
      import('./pages/signin/signin.page').then((m) => m.SigninPage),
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./pages/signup/signup.page').then((m) => m.SignupPage),
  },
  {
    path: 'reset-password',
    loadComponent: () =>
      import('./pages/reset-password/reset-password.page').then(
        (m) => m.ResetPasswordPage
      ),
  },
  {
    path: 'landing',
    loadComponent: () =>
      import('./pages/landing/landing.page').then((m) => m.LandingPage),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'loading-screen',
    loadComponent: () =>
      import('./pages/loading-screen/loading-screen.page').then(
        (m) => m.LoadingScreenPage
      ),
  },
];
