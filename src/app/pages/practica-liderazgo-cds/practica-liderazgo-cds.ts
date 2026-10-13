import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

type GrupoSeleccion =
  | 'accionesSeleccionadas'
  | 'aprendizajesSeleccionados'
  | 'contribucionesSeleccionadas';

interface EjercicioLiderazgo {
  id: string;
  numero: string;
  titulo: string;
  enfoque: string;
  pregunta: string;
  accionesOpciones: string[];
  aprendizajesOpciones: string[];
  contribucionesOpciones: string[];
  accionesSeleccionadas: string[];
  aprendizajesSeleccionados: string[];
  contribucionesSeleccionadas: string[];
  accionPersonalizada: string;
  aprendizajePersonalizado: string;
  contribucionPersonalizada: string;
  cuando: string;
  accion: string;
  aprendizaje: string;
  contribucion: string;
}

@Component({
  selector: 'app-practica-liderazgo-cds',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './practica-liderazgo-cds.html',
  styleUrl: './practica-liderazgo-cds.css'
})
export class PracticaLiderazgoCds {
  private readonly claveGuardado = 'cds_practica_liderazgo';

  guardado = false;
  mensaje = '';

  plazos = [
    'Hoy',
    'Mañana',
    'Durante esta semana',
    'Durante las próximas dos semanas',
    'Este mes',
    'Elegiré otra fecha'
  ];

  ejercicios: EjercicioLiderazgo[] = [
    {
      id: 'aplicar',
      numero: '01',
      titulo: 'APLICAR',
      enfoque: 'Convertir el aprendizaje en una acción personal.',
      pregunta: '¿Qué enseñanza necesito llevar a la práctica en mi vida?',
      accionesOpciones: [
        'Mejorar un hábito personal.',
        'Organizar mejor mi tiempo.',
        'Cumplir un compromiso pendiente.',
        'Cambiar una actitud que me limita.',
        'Aprender algo que necesito para avanzar.',
        'Dar el primer paso hacia una meta.'
      ],
      aprendizajesOpciones: [
        'Descubrí que puedo avanzar paso a paso.',
        'Comprendí la importancia de la disciplina.',
        'Identifiqué algo que necesito mejorar.',
        'Aprendí de una dificultad o un error.',
        'Comprobé que actuar es más útil que posponer.'
      ],
      contribucionesOpciones: [
        'Mi ejemplo puede motivar a alguien.',
        'Puedo compartir lo que aprendí.',
        'Puedo cumplir mejor mis responsabilidades.',
        'Puedo estar más disponible para los demás.'
      ],
      accionesSeleccionadas: [],
      aprendizajesSeleccionados: [],
      contribucionesSeleccionadas: [],
      accionPersonalizada: '',
      aprendizajePersonalizado: '',
      contribucionPersonalizada: '',
      cuando: '',
      accion: '',
      aprendizaje: '',
      contribucion: ''
    },
    {
      id: 'acompanar',
      numero: '02',
      titulo: 'ACOMPAÑAR',
      enfoque: 'Escuchar y ayudar sin imponer nuestras respuestas.',
      pregunta: '¿A quién puedo escuchar y ayudar a encontrar su siguiente paso?',
      accionesOpciones: [
        'Escuchar a alguien sin juzgar.',
        'Preguntar qué necesita antes de aconsejar.',
        'Compartir una experiencia que pueda ayudar.',
        'Animar a alguien que atraviesa una dificultad.',
        'Ayudar a identificar posibles soluciones.',
        'Preguntar después cómo le fue.'
      ],
      aprendizajesOpciones: [
        'Comprendí que escuchar también es ayudar.',
        'Aprendí a respetar las decisiones de otra persona.',
        'Descubrí que no siempre necesito tener una respuesta.',
        'Reconocí la importancia de hacer buenas preguntas.',
        'Aprendí a acompañar sin imponer.'
      ],
      contribucionesOpciones: [
        'La otra persona pudo expresar lo que siente.',
        'Ayudé a aclarar una dificultad.',
        'Compartí una experiencia útil.',
        'La persona pudo identificar un siguiente paso.',
        'Fortalecí la confianza y la comunicación.'
      ],
      accionesSeleccionadas: [],
      aprendizajesSeleccionados: [],
      contribucionesSeleccionadas: [],
      accionPersonalizada: '',
      aprendizajePersonalizado: '',
      contribucionPersonalizada: '',
      cuando: '',
      accion: '',
      aprendizaje: '',
      contribucion: ''
    },
    {
      id: 'contribuir',
      numero: '03',
      titulo: 'CONTRIBUIR',
      enfoque: 'Poner nuestras capacidades al servicio de otras personas.',
      pregunta: '¿Qué puedo aportar para fortalecer a mi comunidad?',
      accionesOpciones: [
        'Compartir mis conocimientos o habilidades.',
        'Colaborar en una actividad de mi comunidad.',
        'Ayudar a resolver un problema concreto.',
        'Apoyar a alguien para que pueda avanzar.',
        'Proponer una idea que beneficie al grupo.',
        'Cumplir una tarea que asumí.'
      ],
      aprendizajesOpciones: [
        'Reconocí que mis capacidades pueden ser útiles.',
        'Aprendí a colaborar y coordinar con otros.',
        'Comprendí que los pequeños aportes importan.',
        'Descubrí una habilidad que puedo fortalecer.',
        'Aprendí a escuchar otras perspectivas.'
      ],
      contribucionesOpciones: [
        'Facilité una tarea para otra persona.',
        'Compartí conocimientos útiles.',
        'Ayudé a resolver una necesidad.',
        'Fortalecí la colaboración del grupo.',
        'Contribuí a crear un ambiente de apoyo.'
      ],
      accionesSeleccionadas: [],
      aprendizajesSeleccionados: [],
      contribucionesSeleccionadas: [],
      accionPersonalizada: '',
      aprendizajePersonalizado: '',
      contribucionPersonalizada: '',
      cuando: '',
      accion: '',
      aprendizaje: '',
      contribucion: ''
    },
    {
      id: 'formar',
      numero: '04',
      titulo: 'FORMAR',
      enfoque: 'Compartir lo aprendido para desarrollar autonomía en otros.',
      pregunta: '¿Qué puedo enseñar y cómo acompañaré su aplicación?',
      accionesOpciones: [
        'Enseñar una habilidad que domino.',
        'Compartir una experiencia y lo que aprendí.',
        'Explicar un proceso paso a paso.',
        'Ayudar a alguien a practicar una habilidad.',
        'Dar retroalimentación respetuosa.',
        'Acompañar a alguien para que pueda hacerlo por sí mismo.'
      ],
      aprendizajesOpciones: [
        'Comprendí que cada persona aprende a su ritmo.',
        'Aprendí a explicar con mayor claridad.',
        'Descubrí que enseñar también me ayuda a aprender.',
        'Reconocí la importancia de la paciencia.',
        'Aprendí a orientar sin hacer todo por los demás.'
      ],
      contribucionesOpciones: [
        'La persona desarrolló una nueva habilidad.',
        'Compartí una herramienta que puede utilizar.',
        'Ayudé a aumentar su confianza.',
        'Facilité que pudiera resolver algo por sí misma.',
        'Dejé un aprendizaje que puede compartir con otros.'
      ],
      accionesSeleccionadas: [],
      aprendizajesSeleccionados: [],
      contribucionesSeleccionadas: [],
      accionPersonalizada: '',
      aprendizajePersonalizado: '',
      contribucionPersonalizada: '',
      cuando: '',
      accion: '',
      aprendizaje: '',
      contribucion: ''
    }
  ];

  constructor() {
    this.cargarProgreso();
  }

  alternarSeleccion(
    ejercicio: EjercicioLiderazgo,
    grupo: GrupoSeleccion,
    opcion: string,
    seleccionado: boolean
  ): void {
    const seleccionadas = ejercicio[grupo];

    if (seleccionado && !seleccionadas.includes(opcion)) {
      seleccionadas.push(opcion);
    } else if (!seleccionado) {
      ejercicio[grupo] = seleccionadas.filter(
        elemento => elemento !== opcion
      );
    }

    this.guardado = false;
    this.mensaje = '';
  }

  async compartirWhatsApp(): Promise<void> {
    const bloques: string[] = [];

    for (const ejercicio of this.ejercicios) {
      const accion = this.combinar(
        ejercicio.accionesSeleccionadas,
        ejercicio.accionPersonalizada
      );

      const aprendizaje = this.combinar(
        ejercicio.aprendizajesSeleccionados,
        ejercicio.aprendizajePersonalizado
      );

      const contribucion = this.combinar(
        ejercicio.contribucionesSeleccionadas,
        ejercicio.contribucionPersonalizada
      );

      if (!accion && !aprendizaje && !contribucion) {
        continue;
      }

      const lineas = [
        `*${ejercicio.numero}. ${ejercicio.titulo}*`,
        ejercicio.pregunta
      ];

      if (accion) {
        lineas.push(`Acción que pondré en práctica:\n${accion}`);
      }

      if (aprendizaje) {
        lineas.push(`Lo que aprendí:\n${aprendizaje}`);
      }

      if (contribucion) {
        lineas.push(`Cómo puedo contribuir:\n${contribucion}`);
      }

      if (ejercicio.cuando) {
        lineas.push(`Plazo de mi compromiso: ${ejercicio.cuando}`);
      }

      bloques.push(lineas.join('\n'));
    }

    if (!bloques.length) {
      this.mensaje =
        'Selecciona al menos una respuesta o escribe una reflexión antes de compartir.';
      return;
    }

    const texto = [
      '*JV GLOBAL | PRÁCTICA DE LIDERAZGO CDS*',
      'Claridad · Disciplina · Superación',
      '',
      ...bloques,
      '',
      'Juntos Vencemos.'
    ].join('\n\n');

    // Abrir el grupo directamente desde el clic del usuario.
    window.open(
      'https://chat.whatsapp.com/IqiCDzdQorxHT6SpfMUs4j',
      '_blank'
    );

    try {
      await navigator.clipboard.writeText(texto);
      this.mensaje =
        '¡Reflexión copiada! En WhatsApp, pega el mensaje en el grupo y pulsa Enviar.';
    } catch {
      this.mensaje =
        'El grupo se ha abierto, pero no se pudo copiar automáticamente. Vuelve a intentarlo o revisa los permisos del navegador.';
    }
  }
  private combinar(opciones: string[], personalizada: string): string {
    return [
      ...opciones,
      ...(personalizada.trim() ? [personalizada.trim()] : [])
    ].join('\n');
  }

  private cargarProgreso(): void {
    try {
      const contenido = localStorage.getItem(this.claveGuardado);

      if (!contenido) {
        return;
      }

      const datos: unknown = JSON.parse(contenido);

      if (!Array.isArray(datos)) {
        return;
      }

      this.ejercicios = this.ejercicios.map(ejercicio => {
        const guardado = datos.find(
          (item: unknown) =>
            typeof item === 'object' &&
            item !== null &&
            'id' in item &&
            item.id === ejercicio.id
        );

        if (!guardado || typeof guardado !== 'object') {
          return ejercicio;
        }

        const anterior = guardado as Record<string, unknown>;

        const texto = (valor: unknown): string =>
          typeof valor === 'string' ? valor : '';

        const lista = (valor: unknown): string[] =>
          Array.isArray(valor)
            ? valor.filter((item): item is string => typeof item === 'string')
            : [];

        const resultado = { ...ejercicio };

        resultado.cuando = texto(anterior['cuando']);

        resultado.accionesSeleccionadas = lista(
          anterior['accionesSeleccionadas']
        );
        resultado.aprendizajesSeleccionados = lista(
          anterior['aprendizajesSeleccionados']
        );
        resultado.contribucionesSeleccionadas = lista(
          anterior['contribucionesSeleccionadas']
        );

        resultado.accionPersonalizada = texto(
          anterior['accionPersonalizada']
        );
        resultado.aprendizajePersonalizado = texto(
          anterior['aprendizajePersonalizado']
        );
        resultado.contribucionPersonalizada = texto(
          anterior['contribucionPersonalizada']
        );

        // Recuperar también las respuestas del formulario anterior.
        if (
          !resultado.accionesSeleccionadas.length &&
          !resultado.accionPersonalizada
        ) {
          resultado.accionPersonalizada = texto(anterior['accion']);
        }

        if (
          !resultado.aprendizajesSeleccionados.length &&
          !resultado.aprendizajePersonalizado
        ) {
          resultado.aprendizajePersonalizado = texto(
            anterior['aprendizaje']
          );
        }

        if (
          !resultado.contribucionesSeleccionadas.length &&
          !resultado.contribucionPersonalizada
        ) {
          resultado.contribucionPersonalizada = texto(
            anterior['contribucion']
          );
        }

        return resultado;
      });
    } catch {
      this.mensaje = 'No se pudo recuperar el progreso guardado.';
    }
  }
}

