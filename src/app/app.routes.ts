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
  path: 'inspiracion-cds',
  loadComponent: () =>
    import('./pages/inspiracion-cds/inspiracion-cds')
      .then(m => m.InspiracionCds)
},

{
  path: 'textos-inspiracion',
  loadComponent: () =>
    import('./pages/textos-inspiracion/textos-inspiracion')
      .then(m => m.TextosInspiracion)
},

{
  path: 'texto-inspiracion/:slug',
  loadComponent: () =>
    import('./pages/texto-inspiracion-detalle/texto-inspiracion-detalle')
      .then(m => m.TextoInspiracionDetalle)
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