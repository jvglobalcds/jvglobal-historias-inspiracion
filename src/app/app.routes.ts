
import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'inspiracion-cds',
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
    path: 'ensenanza-cds',
    loadComponent: () =>
      import('./pages/ensenanza-cds/ensenanza-cds')
        .then(m => m.EnsenanzaCds)
  },

  {
  path: 'liderazgo-cds',
  loadComponent: () =>
    import('./pages/liderazgo-cds/liderazgo-cds')
      .then(m => m.LiderazgoCds)
},

{
  path: 'practica-liderazgo-cds',
  loadComponent: () =>
    import('./pages/practica-liderazgo-cds/practica-liderazgo-cds')
      .then(m => m.PracticaLiderazgoCds)
},

{
  path: 'reto-una-ensenanza-una-accion',
  loadComponent: () =>
    import('./pages/reto-una-ensenanza-una-accion/reto-una-ensenanza-una-accion')
      .then(m => m.RetoUnaEnsenanzaUnaAccion)
},

{
  path: 'liderazgo-personal',
  loadComponent: () =>
    import('./pages/liderazgo-personal/liderazgo-personal')
      .then(m => m.LiderazgoPersonal)
},
{
  path: 'educar-antes-motivar',
  loadComponent: () =>
    import('./pages/educar-antes-motivar/educar-antes-motivar')
      .then(m => m.EducarAntesMotivar)
},
{
  path: 'construir-personas-comunidad',
  loadComponent: () =>
    import('./pages/construir-personas-comunidad/construir-personas-comunidad')
      .then(m => m.ConstruirPersonasComunidad)
},
{
  path: 'formar-lideres-otros',
  loadComponent: () =>
    import('./pages/formar-lideres-otros/formar-lideres-otros')
      .then(m => m.FormarLideresOtros)
},

  {
  path: 'ensenanza-cds/temporada-1',
  loadComponent: () =>
    import('./pages/ensenanza-temporada/ensenanza-temporada')
      .then(m => m.EnsenanzaTemporada)
},

{
  path: 'ensenanza-cds/temporada-1/:slug',
  loadComponent: () =>
    import('./pages/ensenanza-reflexion/ensenanza-reflexion')
      .then(m => m.EnsenanzaReflexion)
},

  {
  path: 'ensenanza-cds/:area/:leccion',
  loadComponent: () =>
    import('./pages/leccion-cds/leccion-cds')
      .then(m => m.LeccionCds)
},

  {
  path: 'ensenanza-cds/:slug',
  loadComponent: () =>
    import('./pages/ensenanza-area/ensenanza-area')
      .then(m => m.EnsenanzaArea)
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




