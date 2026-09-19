import { Historia } from './historia.model';
import { historiasDeportes } from './historias/deportes';

export type { Historia };

export const HISTORIAS: Historia[] = [
  ...historiasDeportes
];
