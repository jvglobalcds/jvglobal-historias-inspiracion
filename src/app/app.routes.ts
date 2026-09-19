import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'indice',
    pathMatch: 'full'
  },
  {
    path: 'indice',
    loadComponent: () =>
      import('./pages/indice/indice')
        .then(m => m.Indice)
  },
  {
    path: 'buscador',
    loadComponent: () =>
      import('./pages/buscador/buscador')
        .then(m => m.Buscador)
  },
  {
    path: 'categoria/:slug',
    loadComponent: () =>
      import('./pages/categoria/categoria')
        .then(m => m.Categoria)
  },
  {
    path: 'historia/:slug',
    loadComponent: () =>
      import('./pages/historia/historia')
        .then(m => m.Historia)
  }
];