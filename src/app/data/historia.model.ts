export interface Historia {
  id: string;
  nombre: string;
  epoca: string;
  contexto: string;

  categoria: string[];
  temas: string[];
  valoresCds: string[];

  quienEs: string;
  contextoAmpliado: string;
  antesDelMomentoClave: string;
  momentoClave: string;
  loQueHizo: string;
  elAcompanamiento: string;

  historiaCompleta: string[];

  hechosDocumentados: string[];
  loQuePodemosObservar: string[];
  paraReflexionar: string[];

  reflexionCds: {
    claridad: string;
    disciplina: string;
    superacion: string;
  };

  unaIdeaParaLlevar: string;

  fuentes: {
    nombre: string;
    url: string;
  }[];
}
