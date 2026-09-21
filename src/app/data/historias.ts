import { Historia } from './historia.model';
import { historiasDeportes } from './historias/deportes';
import { historiasLiderazgo } from './historias/liderazgo';
import { historiasMetaforas } from './historias/metaforas';
import { historiasSuperacionPersonal } from './historias/superacion-personal';
import { historiasTransformacion } from './historias/transformacion';
import { historiasClaridad } from './historias/claridad';
import { historiasInnovacion } from './historias/innovacion';

export type { Historia };

export const HISTORIAS: Historia[] = [
  ...historiasDeportes,
  ...historiasLiderazgo,
  ...historiasMetaforas,
  ...historiasSuperacionPersonal,
  ...historiasTransformacion,
  ...historiasClaridad,
  ...historiasInnovacion
];


