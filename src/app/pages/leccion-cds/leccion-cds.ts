import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';

interface ConceptoCds {
  nombre: string;
  significado: string;
  ejemplo: string;
}

interface SeccionCds {
  titulo: string;
  parrafos: string[];
  destacado?: string;
  puntos?: string[];
  cierre?: string;
  conceptos?: ConceptoCds[];
}

@Component({
  selector: 'app-leccion-cds',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './leccion-cds.html',
  styleUrl: './leccion-cds.css'
})
export class LeccionCds implements OnInit {

    private leccionActual = '';

  titulo = 'Autoconocimiento y propósito';

  subtitulo =
    'Fundamentos para comprender quién eres, hacia dónde quieres avanzar y qué sentido deseas dar a tus decisiones.';

  objetivo =
    'Comprender la importancia del autoconocimiento como punto de partida para construir un propósito personal, identificar fortalezas y áreas de mejora, y establecer una dirección consciente para el desarrollo personal.';

  secciones: SeccionCds[] = [
    {
      titulo: 'Introducción: conocerte antes de avanzar',
      parrafos: [
        'Muchas personas tienen deseos, sueños y aspiraciones, pero no siempre se detienen a reflexionar sobre quiénes son, qué quieren realmente y por qué desean alcanzar determinadas metas.',
        'Es posible avanzar durante años siguiendo expectativas ajenas, comparándose con otras personas o persiguiendo objetivos sin comprender si realmente corresponden a los propios valores.',
        'El autoconocimiento permite hacer una pausa y observar nuestra realidad con honestidad.',
        'Conocerse no significa tener todas las respuestas. Significa estar dispuesto a formular preguntas importantes, reconocer las propias capacidades, aceptar las limitaciones y descubrir qué aspectos de nuestra vida necesitan atención.'
      ],
      destacado:
        'La claridad comienza cuando dejamos de avanzar en automático y empezamos a comprender nuestras decisiones.'
    },
    {
      titulo: '¿Qué es el autoconocimiento?',
      parrafos: [
        'El autoconocimiento es el proceso consciente de identificar y comprender nuestros pensamientos, emociones, valores, capacidades, comportamientos, motivaciones y experiencias.',
        'Es una práctica continua que nos permite observar nuestra realidad personal sin depender exclusivamente de la opinión de los demás.'
      ],
      puntos: [
        'Identidad: reconocer quién eres y qué aspectos te hacen una persona única.',
        'Valores: identificar los principios que orientan tus decisiones.',
        'Fortalezas: reconocer tus habilidades, conocimientos y capacidades.',
        'Áreas de mejora: descubrir hábitos, actitudes o conocimientos que puedes desarrollar.',
        'Motivaciones: comprender qué impulsa tus decisiones y esfuerzos.',
        'Experiencias: aprender de los acontecimientos que han influido en tu manera de pensar y actuar.'
      ],
      cierre:
        'El autoconocimiento no consiste en juzgarte constantemente, sino en comprenderte para tomar decisiones más conscientes.'
    },
    {
      titulo: 'Diferencia entre deseos, metas y propósito',
      parrafos: [
        'Aunque estos conceptos se relacionan, no significan lo mismo.'
      ],
      conceptos: [
        {
          nombre: 'Deseo',
          significado: 'Algo que te gustaría experimentar o conseguir.',
          ejemplo: 'Quiero tener una vida con mayor libertad.'
        },
        {
          nombre: 'Meta',
          significado: 'Un resultado concreto que puedes planificar y trabajar.',
          ejemplo: 'Ahorrar una cantidad determinada durante 12 meses.'
        },
        {
          nombre: 'Propósito',
          significado: 'Una dirección que da sentido a tus esfuerzos y decisiones.',
          ejemplo: 'Desarrollar mis capacidades para construir una vida de aprendizaje, servicio y autonomía.'
        }
      ],
      cierre:
        'Un deseo puede convertirse en una meta cuando se define con claridad. Las metas, a su vez, pueden formar parte de un propósito más amplio.'
    },
    {
      titulo: 'El propósito personal: encontrar una dirección',
      parrafos: [
        'El propósito personal es una orientación que ayuda a dar sentido a nuestras acciones. Está relacionado con lo que valoramos, lo que deseamos construir y la manera en que queremos contribuir a nuestro entorno.',
        'No existe una fórmula universal para descubrirlo. Cada persona puede construir su propósito a partir de sus experiencias, intereses, responsabilidades y aspiraciones.'
      ],
      puntos: [
        '¿Qué actividades despiertan mi interés y curiosidad?',
        '¿Qué situaciones me gustaría mejorar en mi vida?',
        '¿Qué valores no quiero abandonar, incluso cuando enfrento dificultades?',
        '¿Qué conocimientos y habilidades deseo desarrollar?',
        '¿Cómo quiero que mis acciones contribuyan a mi familia, comunidad o entorno?'
      ],
      cierre:
        'No necesitas responder todas estas preguntas en un solo día. El propósito puede aclararse gradualmente, mediante la reflexión y la experiencia.'
    },
    {
      titulo: 'Los obstáculos que dificultan el autoconocimiento',
      parrafos: [
        'Algunos hábitos y circunstancias pueden impedir que una persona se conozca con mayor profundidad.'
      ],
      puntos: [
        'Vivir comparándose: medir constantemente el propio progreso con los resultados de otras personas puede generar expectativas poco realistas.',
        'Buscar aprobación permanente: tomar decisiones únicamente para satisfacer a los demás puede dificultar la identificación de los propios valores.',
        'Evitar la reflexión: mantenerse siempre ocupado, sin dedicar tiempo a pensar sobre las propias decisiones, puede hacer que se repitan comportamientos sin comprender sus consecuencias.',
        'Temer al cambio: reconocer que una creencia, un hábito o una meta ya no representa lo que queremos puede resultar incómodo.',
        'Confundir errores con identidad: cometer un error no significa ser una persona incapaz. Es importante diferenciar entre una acción que puede corregirse y una valoración negativa de toda nuestra identidad.'
      ],
      cierre:
        'La claridad no exige perfección. Exige disposición para observar, aprender y ajustar el rumbo.'
    },
    {
      titulo: 'De la reflexión a la acción',
      parrafos: [
        'El autoconocimiento adquiere mayor valor cuando se traduce en decisiones y comportamientos concretos.',
        'Elige una acción pequeña que puedas realizar durante los próximos siete días.'
      ],
      puntos: [
        'Reservar 15 minutos diarios para reflexionar y escribir.',
        'Investigar una habilidad que deseas desarrollar.',
        'Revisar una meta que ya no coincide con tus prioridades.',
        'Conversar con una persona de confianza sobre tus fortalezas y oportunidades de mejora.',
        'Establecer una actividad semanal que esté alineada con tus valores.'
      ],
      cierre:
        'Procura que la acción sea específica, realista y verificable. Al terminar la semana, evalúa qué aprendiste y qué necesitas ajustar.'
    }
  ];

  reflexiones = [
    {
      titulo: 'Mis fortalezas',
      pregunta: '¿Qué capacidades, conocimientos o cualidades reconozco en mí?'
    },
    {
      titulo: 'Mis valores',
      pregunta: '¿Qué principios orientan mis decisiones y cuáles quiero fortalecer?'
    },
    {
      titulo: 'Mis áreas de mejora',
      pregunta: '¿Qué hábitos, actitudes o conocimientos necesito desarrollar?'
    },
    {
      titulo: 'Mis motivaciones',
      pregunta: '¿Qué actividades o logros me producen satisfacción y sentido?'
    },
    {
      titulo: 'Mi dirección',
      pregunta: '¿Qué me gustaría construir en los próximos 12 meses y por qué?'
    }
  ];

  preguntas = [
    {
      texto: '¿Cuál es la finalidad principal del autoconocimiento?',
      opciones: [
        'Conocer y comprender mejor nuestros pensamientos, valores y comportamientos',
        'Evitar cometer cualquier error',
        'Conseguir la aprobación de otras personas'
      ],
      correcta: 0,
      explicacion:
        'El autoconocimiento ayuda a comprender nuestra realidad personal y tomar decisiones más conscientes.'
    },
    {
      texto: '¿Qué diferencia existe entre una meta y un propósito?',
      opciones: [
        'Son exactamente lo mismo',
        'La meta es un resultado concreto; el propósito ofrece una dirección con sentido',
        'El propósito siempre debe ser económico'
      ],
      correcta: 1,
      explicacion:
        'Las metas son resultados que podemos planificar; el propósito orienta nuestros esfuerzos.'
    },
    {
      texto: '¿Qué debemos hacer cuando descubrimos un área de mejora?',
      opciones: [
        'Considerarla una prueba de incapacidad',
        'Ignorarla para evitar incomodidad',
        'Reconocerla y buscar oportunidades para desarrollarla'
      ],
      correcta: 2,
      explicacion:
        'Reconocer una oportunidad de mejora permite aprender y ajustar nuestros comportamientos.'
    }
  ];

  respuestas: number[] = [];
  evaluacionEnviada = false;
  leccionCompletada = false;
  calificacion = 0;
  totalCorrectas = 0;
  mensajeEvaluacion = '';

  private readonly clavesLecciones: Record<string, string> = {
    'autoconocimiento-y-proposito': 'jv-leccion-autoconocimiento-proposito',
    'vision-personal-y-objetivos': 'jv-leccion-vision-personal-objetivos',
    'pensamiento-consciente': 'jv-leccion-pensamiento-consciente',
    'toma-de-decisiones': 'jv-leccion-toma-de-decisiones',
    'planificacion-y-direccion': 'jv-leccion-planificacion-y-direccion',
    'habitos-y-constancia': 'jv-leccion-habitos-y-constancia',
    'organizacion-personal': 'jv-leccion-organizacion-personal',
    'gestion-del-tiempo': 'jv-leccion-gestion-del-tiempo',
    'compromiso-y-responsabilidad': 'jv-leccion-compromiso-y-responsabilidad',
    'ejecucion-y-seguimiento': 'jv-leccion-ejecucion-y-seguimiento',
    'resiliencia': 'jv-leccion-resiliencia',
    'aprendizaje-de-los-errores': 'jv-leccion-aprendizaje-errores',
    'gestion-de-desafios': 'jv-leccion-gestion-desafios',
    'desarrollo-del-potencial': 'jv-leccion-desarrollo-potencial',
    'adaptacion-y-mejora-continua': 'jv-leccion-adaptacion-mejora-continua',
    'mentalidad-emprendedora': 'jv-leccion-mentalidad-emprendedora',
    'modelos-de-negocio': 'jv-leccion-modelos-de-negocio',
    'propuesta-de-valor': 'jv-leccion-propuesta-de-valor',
    'ventas-y-servicio': 'jv-leccion-ventas-y-servicio',
    'creacion-y-desarrollo-de-proyectos':
    'jv-leccion-creacion-y-desarrollo-de-proyectos',
    'liderazgo-consciente': 'jv-leccion-liderazgo-consciente',
    'comunicacion-efectiva': 'jv-leccion-comunicacion-efectiva',
    'trabajo-en-equipo': 'jv-leccion-trabajo-en-equipo',
    'responsabilidad-y-servicio': 'jv-leccion-responsabilidad-y-servicio',
    'acompanamiento-y-desarrollo-de-personas':
    'jv-leccion-acompanamiento-desarrollo-personas',
    };

  private readonly contenidoBase = {
    titulo: this.titulo,
    subtitulo: this.subtitulo,
    objetivo: this.objetivo,
    secciones: this.secciones,
    reflexiones: this.reflexiones,
    preguntas: this.preguntas
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.leccionActual = params.get('leccion') ?? '';

      this.restablecerEstadoEvaluacion();
      this.restablecerContenidoBase();

      switch (this.leccionActual) {
        case 'autoconocimiento-y-proposito':
          break;

        case 'vision-personal-y-objetivos':
          this.cargarLeccionVision();
          break;

        case 'pensamiento-consciente':
          this.cargarLeccionPensamiento();
          break;

        case 'toma-de-decisiones':
          this.cargarLeccionTomaDecisiones();
          break;

        case 'planificacion-y-direccion':
          this.cargarLeccionPlanificacion();
          break;

        case 'habitos-y-constancia':
          this.cargarLeccionHabitos();
          break;

        case 'organizacion-personal':
          this.cargarLeccionOrganizacion();
          break;

        case 'gestion-del-tiempo':
          this.cargarLeccionTiempo();
          break;

        case 'compromiso-y-responsabilidad':
          this.cargarLeccionCompromiso();
          break;

        case 'ejecucion-y-seguimiento':
          this.cargarLeccionEjecucion();
          break;

          case 'mentalidad-emprendedora':
          this.cargarLeccionMentalidadEmprendedora();
          break;

       case 'modelos-de-negocio':
       this.cargarLeccionModelosNegocio();
       break;

       case 'propuesta-de-valor':
       this.cargarLeccionPropuestaValor();
       break;

        case 'ventas-y-servicio':
        this.cargarLeccionVentasServicio();
        break;

        case 'creacion-y-desarrollo-de-proyectos':
        this.cargarLeccionCreacionProyectos();
        break;

        case 'resiliencia':
          this.cargarLeccionResiliencia();
          break;

         case 'aprendizaje-de-los-errores':
           this.cargarLeccionAprendizajeErrores();
           break;

           case 'gestion-de-desafios':
           this.cargarLeccionGestionDesafios();
           break;

           case 'desarrollo-del-potencial':
           this.cargarLeccionDesarrolloPotencial();
           break;

          case 'adaptacion-y-mejora-continua':
          this.cargarLeccionAdaptacionMejora();
          break;

          case 'liderazgo-consciente':
          this.cargarLeccionLiderazgoConsciente();
          break;

          case 'trabajo-en-equipo':
          this.cargarLeccionTrabajoEnEquipo();
          break;

          case 'responsabilidad-y-servicio':
          this.cargarLeccionResponsabilidadYServicio();
          break;

          case 'acompanamiento-y-desarrollo-de-personas':
          this.cargarLeccionAcompanamientoDesarrolloPersonas();
          break;

          case 'comunicacion-efectiva':
          this.cargarLeccionComunicacionEfectiva();
          break;

         default:
          this.leccionActual = 'autoconocimiento-y-proposito';
          break;
      }

      this.actualizarEstadoLeccion();
    });
  }

    private restablecerEstadoEvaluacion(): void {
    this.respuestas = [];
    this.evaluacionEnviada = false;
    this.calificacion = 0;
    this.totalCorrectas = 0;
    this.mensajeEvaluacion = '';
    this.leccionCompletada = false;
  }

  private restablecerContenidoBase(): void {
    this.titulo = this.contenidoBase.titulo;
    this.subtitulo = this.contenidoBase.subtitulo;
    this.objetivo = this.contenidoBase.objetivo;
    this.secciones = this.contenidoBase.secciones;
    this.reflexiones = this.contenidoBase.reflexiones;
    this.preguntas = this.contenidoBase.preguntas;
  }

  private actualizarEstadoLeccion(): void {
    const clave = this.clavesLecciones[this.leccionActual];

    this.leccionCompletada = clave
      ? localStorage.getItem(clave) === 'completada'
      : false;
  }


    private cargarLeccionVision(): void {

    this.titulo = 'Visión personal y objetivos';

    this.subtitulo =
      'Aprende a construir una visión clara de tu futuro y convertirla en objetivos concretos que orienten tus decisiones.';

    this.objetivo =
      'Comprender la importancia de tener una visión personal clara, establecer objetivos coherentes con ella y transformar esa dirección en acciones concretas y verificables.';

    this.secciones = [

      {
        titulo: 'Introducción: mirar hacia adelante',

        parrafos: [
          'Toda construcción comienza con una dirección. Antes de decidir qué hacer, es importante detenerse a pensar qué tipo de vida queremos construir.',
          'Una visión personal permite imaginar un futuro posible y establecer una dirección que ayude a ordenar nuestras decisiones.',
          'No se trata de predecir exactamente lo que ocurrirá, sino de definir aquello hacia lo que queremos avanzar.',
          'Cuando una persona tiene mayor claridad sobre su dirección, puede evaluar mejor qué oportunidades, decisiones y acciones están alineadas con sus objetivos.'
        ],

        destacado:
          'La visión no determina todo tu futuro, pero puede ayudarte a decidir hacia dónde dirigir tus esfuerzos.'
      },

      {
        titulo: '¿Qué es una visión personal?',

        parrafos: [
          'La visión personal es una descripción consciente del futuro que deseas construir en diferentes áreas de tu vida.',
          'Puede incluir aspectos relacionados con tu desarrollo personal, educación, trabajo, relaciones, proyectos, contribución y estilo de vida.',
          'Una visión útil debe ser suficientemente clara para orientar tus decisiones, pero también flexible para adaptarse al aprendizaje y a las circunstancias.'
        ],

        puntos: [
          'Dirección: define hacia dónde deseas avanzar.',
          'Valores: refleja aquello que consideras importante.',
          'Aspiraciones: incorpora aquello que deseas desarrollar o construir.',
          'Coherencia: busca que tus decisiones actuales tengan relación con el futuro que deseas.',
          'Flexibilidad: permite ajustar el camino cuando aprendes algo nuevo.'
        ],

        cierre:
          'Una visión personal no es una obligación ni una predicción. Es una herramienta para pensar conscientemente sobre el futuro que deseas construir.'
      },

      {
        titulo: 'De la visión a los objetivos',

        parrafos: [
          'Una visión puede ser amplia. Los objetivos permiten convertir esa dirección general en resultados concretos.',
          'Por ejemplo, una persona puede tener la visión de desarrollar una carrera profesional sólida. Para avanzar hacia ella puede establecer objetivos relacionados con formación, experiencia, habilidades y proyectos.',
          'Los objetivos ayudan a transformar una intención general en algo que puede organizarse, trabajarse y revisarse.'
        ],

        conceptos: [
          {
            nombre: 'Visión',
            significado: 'Dirección general del futuro que deseas construir.',
            ejemplo: 'Construir una vida profesional basada en aprendizaje, autonomía y contribución.'
          },

          {
            nombre: 'Objetivo',
            significado: 'Resultado concreto que deseas alcanzar dentro de un período determinado.',
            ejemplo: 'Completar una formación específica durante los próximos seis meses.'
          },

          {
            nombre: 'Acción',
            significado: 'Actividad concreta que realizas para avanzar hacia un objetivo.',
            ejemplo: 'Estudiar una hora diaria de lunes a viernes.'
          }
        ],

        cierre:
          'La visión establece una dirección. Los objetivos concretan esa dirección y las acciones permiten avanzar hacia ellos.'
      },

      {
        titulo: 'Cómo construir objetivos claros',

        parrafos: [
          'No todos los objetivos tienen la misma utilidad. Un objetivo demasiado general puede dificultar saber qué hacer y cómo medir el avance.',
          'Por eso conviene definir objetivos concretos, realistas y verificables.',
          'Antes de establecer un objetivo puedes preguntarte qué quieres conseguir, por qué es importante, cuándo deseas alcanzarlo y qué acciones requiere.'
        ],

        puntos: [
          'Define exactamente qué deseas conseguir.',
          'Establece un período de tiempo.',
          'Determina cómo podrás comprobar el avance.',
          'Divide el objetivo en acciones más pequeñas.',
          'Revisa periódicamente si continúa siendo coherente con tu visión.'
        ],

        cierre:
          'Un objetivo claro reduce la ambigüedad y facilita transformar una intención en un plan de acción.'
      },

      {
        titulo: 'Obstáculos que pueden desviar nuestra dirección',

        parrafos: [
          'Tener una visión no significa que el camino será siempre sencillo.',
          'Existen circunstancias, decisiones y hábitos que pueden alejarnos de aquello que queremos construir.',
          'Reconocer estos obstáculos permite anticiparlos y desarrollar estrategias para responder ante ellos.'
        ],

        puntos: [
          'Falta de claridad: no saber exactamente qué queremos construir.',
          'Objetivos contradictorios: perseguir resultados que compiten entre sí.',
          'Exceso de objetivos: intentar avanzar en demasiadas direcciones al mismo tiempo.',
          'Falta de seguimiento: establecer objetivos sin revisar los avances.',
          'Desmotivación temporal: interpretar una dificultad como una razón para abandonar toda la dirección.'
        ],

        cierre:
          'La dirección puede mantenerse incluso cuando es necesario modificar el camino. Ajustar una estrategia no significa abandonar una visión.'
      },

      {
        titulo: 'De la visión a la acción',

        parrafos: [
          'Una visión adquiere valor cuando influye en las decisiones cotidianas.',
          'Elige un objetivo que sea importante para ti y conviértelo en acciones concretas que puedas comenzar esta semana.',
          'No necesitas transformar toda tu vida de una sola vez. El avance puede comenzar con una decisión específica y sostenible.'
        ],

        puntos: [
          'Escribe una visión personal para los próximos tres años.',
          'Selecciona un objetivo relacionado con esa visión.',
          'Divide el objetivo en tres acciones concretas.',
          'Define cuándo realizarás cada acción.',
          'Revisa al final de la semana qué funcionó y qué necesitas ajustar.'
        ],

        cierre:
          'Una visión orienta. Un objetivo organiza. Una acción demuestra que has comenzado a avanzar.'
      }

    ];

this.reflexiones = [
  {
    titulo: 'Mi planificación',
    pregunta:
      '¿Qué objetivo necesitas convertir en acciones concretas?'
  },
  {
    titulo: 'Mi seguimiento',
    pregunta:
      '¿Cómo puedes revisar el avance de tus actividades?'
  },
  {
    titulo: 'Mi siguiente acción',
    pregunta:
      '¿Qué tarea específica puedes realizar hoy para avanzar?'
  }
];

this.preguntas = [
  {
    texto: '¿Qué significa ejecutar un plan?',
    opciones: [
      'Pensar constantemente en el objetivo.',
      'Esperar el momento perfecto.',
      'Transformar la planificación en acciones concretas.',
      'Cambiar de objetivo cada día.'
    ],
    correcta: 2,
    explicacion:
      'La ejecución consiste en llevar las decisiones y los planes a la práctica mediante acciones concretas.'
  },
  {
    texto: '¿Para qué sirve el seguimiento?',
    opciones: [
      'Para evitar revisar los resultados.',
      'Para observar el avance e identificar ajustes necesarios.',
      'Para garantizar resultados inmediatos.',
      'Para eliminar la planificación.'
    ],
    correcta: 1,
    explicacion:
      'El seguimiento permite comprobar el avance, reconocer tareas pendientes y ajustar las acciones cuando sea necesario.'
  },
  {
    texto: '¿Qué conviene hacer cuando una acción no produce el resultado esperado?',
    opciones: [
      'Ignorar el resultado.',
      'Abandonar siempre el objetivo.',
      'Revisar la información y ajustar la estrategia.',
      'Repetir exactamente lo mismo sin analizarlo.'
    ],
    correcta: 2,
    explicacion:
      'Analizar los resultados permite identificar qué debe modificarse para continuar avanzando.'
  }
];

this.respuestas = [];
this.evaluacionEnviada = false;
}

  private cargarLeccionPensamiento(): void {

  this.titulo = 'Pensamiento consciente';

  this.subtitulo =
    'Aprende a observar tus pensamientos, cuestionar tus interpretaciones y tomar decisiones con mayor claridad.';

  this.objetivo =
    'Comprender cómo influyen los pensamientos en nuestras decisiones y desarrollar una actitud consciente que permita analizar situaciones antes de reaccionar.';

  this.secciones = [

    {
      titulo: 'Introducción: aprender a observar lo que pensamos',

      parrafos: [
        'Pensar es una actividad constante. Durante el día interpretamos situaciones, recordamos experiencias, imaginamos posibilidades y tomamos decisiones.',
        'Sin embargo, no todos nuestros pensamientos representan hechos. Muchas veces interpretamos la realidad a partir de experiencias anteriores, emociones, creencias o información incompleta.',
        'El pensamiento consciente comienza cuando aprendemos a observar aquello que pensamos antes de actuar automáticamente.',
        'Esto no significa eliminar los pensamientos negativos ni intentar controlar cada pensamiento. Significa desarrollar la capacidad de observarlos y analizarlos.'
      ],

      destacado:
        'No todo pensamiento es un hecho. Aprender a observarlo antes de actuar puede cambiar la manera en que tomamos decisiones.'
    },

    {
      titulo: 'Pensamiento, interpretación y realidad',

      parrafos: [
        'Una situación puede ser real, pero la interpretación que hacemos de ella puede variar.',
        'Dos personas pueden experimentar un acontecimiento similar y darle significados diferentes según sus conocimientos, experiencias y expectativas.',
        'Por eso es importante distinguir entre lo que ocurrió, lo que interpretamos y la respuesta que elegimos.'
      ],

      conceptos: [
        {
          nombre: 'Hecho',
          significado: 'Aquello que podemos identificar como ocurrido o verificable.',
          ejemplo: 'Una persona no respondió un mensaje durante varias horas.'
        },

        {
          nombre: 'Interpretación',
          significado: 'El significado que atribuimos al hecho.',
          ejemplo: 'Pensar que la persona está molesta conmigo.'
        },

        {
          nombre: 'Respuesta',
          significado: 'La acción o reacción que elegimos después de interpretar la situación.',
          ejemplo: 'Preguntar directamente antes de sacar una conclusión.'
        }
      ],

      cierre:
        'Separar los hechos de nuestras interpretaciones nos permite analizar mejor las situaciones y reducir conclusiones apresuradas.'
    },

    {
      titulo: 'Preguntas que ayudan a pensar con mayor claridad',

      parrafos: [
        'Cuando aparece un pensamiento que influye fuertemente en una decisión, podemos detenernos y formular preguntas que ayuden a analizarlo.',
        'El objetivo no es buscar una respuesta perfecta, sino ampliar nuestra perspectiva antes de actuar.'
      ],

      puntos: [
        '¿Qué ocurrió realmente?',
        '¿Qué parte de mi pensamiento es un hecho y qué parte es una interpretación?',
        '¿Qué información tengo para sostener esta conclusión?',
        '¿Existe otra explicación posible?',
        '¿Qué consecuencias podría tener actuar impulsivamente?',
        '¿Qué decisión estaría más alineada con mis valores y objetivos?'
      ],

      cierre:
        'Una buena pregunta puede ayudarnos a observar una situación desde una perspectiva diferente.'
    },

    {
      titulo: 'Pensamiento consciente y toma de decisiones',

      parrafos: [
        'Las decisiones no dependen únicamente de la información disponible. También están influenciadas por emociones, hábitos, experiencias y creencias.',
        'Pensar conscientemente permite crear un pequeño espacio entre lo que sucede y la respuesta que elegimos.',
        'Ese espacio puede ayudarnos a considerar alternativas y actuar de manera más coherente con nuestros objetivos.'
      ],

      puntos: [
        'Detenerse antes de reaccionar.',
        'Identificar la situación concreta.',
        'Reconocer las emociones presentes.',
        'Analizar las interpretaciones que estamos haciendo.',
        'Considerar diferentes alternativas.',
        'Elegir una respuesta coherente con nuestros valores.'
      ],

      cierre:
        'La conciencia no elimina las emociones. Nos permite reconocerlas y tomar decisiones sin depender exclusivamente de una reacción inmediata.'
    },

    {
      titulo: 'Hábitos que fortalecen el pensamiento consciente',

      parrafos: [
        'El pensamiento consciente también puede desarrollarse mediante pequeñas prácticas repetidas.',
        'No necesitas dedicar horas a la reflexión. Lo importante es crear momentos en los que puedas observar tus decisiones y aprender de ellas.'
      ],

      puntos: [
        'Escribir brevemente aquello que estás pensando antes de una decisión importante.',
        'Preguntar qué evidencia tienes antes de aceptar una conclusión.',
        'Escuchar opiniones diferentes sin asumir inmediatamente que son incorrectas.',
        'Revisar una decisión después de haberla tomado y analizar qué aprendiste.',
        'Dedicar algunos minutos al día a observar tus pensamientos sin reaccionar automáticamente.'
      ],

      cierre:
        'El pensamiento consciente se fortalece con práctica. Cada situación puede convertirse en una oportunidad para observar, analizar y aprender.'
    },

    {
      titulo: 'De la conciencia a la acción',

      parrafos: [
        'El conocimiento sobre nuestros pensamientos tiene mayor valor cuando modifica nuestras acciones.',
        'Durante los próximos siete días, observa una situación cotidiana en la que normalmente reaccionas de manera automática.',
        'Antes de responder, realiza una pausa y aplica las preguntas aprendidas en esta lección.'
      ],

      puntos: [
        'Identifica el hecho.',
        'Reconoce tu primera interpretación.',
        'Observa qué emoción aparece.',
        'Considera una interpretación alternativa.',
        'Elige conscientemente tu respuesta.',
        'Después, analiza qué aprendiste de la experiencia.'
      ],

      cierre:
        'Pensar conscientemente no significa pensar demasiado. Significa aprender a elegir nuestras respuestas con mayor claridad.'
    }

  ];

  this.reflexiones = [

    {
      titulo: 'Mis pensamientos',
      pregunta: '¿Qué tipo de pensamientos suelen influir más en mis decisiones?'
    },

    {
      titulo: 'Mis interpretaciones',
      pregunta: '¿En qué situaciones suelo sacar conclusiones rápidamente?'
    },

    {
      titulo: 'Mis reacciones',
      pregunta: '¿Qué situaciones hacen que reaccione antes de analizar?'
    },

    {
      titulo: 'Mis alternativas',
      pregunta: '¿Qué puedo hacer para considerar diferentes perspectivas antes de decidir?'
    },

    {
      titulo: 'Mi práctica',
      pregunta: '¿Qué situación quiero observar conscientemente durante los próximos siete días?'
    }

  ];

  this.preguntas = [

    {
      texto: '¿Qué diferencia existe entre un hecho y una interpretación?',

      opciones: [
        'El hecho describe algo ocurrido; la interpretación es el significado que atribuimos',
        'Son exactamente lo mismo',
        'La interpretación siempre es más importante que el hecho'
      ],

      correcta: 0,

      explicacion:
        'Distinguir hechos de interpretaciones ayuda a analizar las situaciones con mayor claridad.'
    },

    {
      texto: '¿Qué puede ayudarnos a pensar conscientemente antes de actuar?',

      opciones: [
        'Reaccionar inmediatamente',
        'Detenernos, analizar la situación y considerar alternativas',
        'Ignorar nuestras emociones'
      ],

      correcta: 1,

      explicacion:
        'Crear una pausa permite observar la situación y considerar diferentes respuestas antes de actuar.'
    },

    {
      texto: '¿Qué busca desarrollar el pensamiento consciente?',

      opciones: [
        'Eliminar todos los pensamientos negativos',
        'Controlar completamente las emociones',
        'Observar, analizar y elegir respuestas de manera más consciente'
      ],

      correcta: 2,

      explicacion:
        'El pensamiento consciente busca mejorar la manera en que observamos y respondemos a las situaciones.'
    }

  ];

  this.respuestas = [];

  this.evaluacionEnviada = false;
}

private cargarLeccionTomaDecisiones(): void {

  this.titulo = 'Toma de decisiones';

  this.subtitulo =
    'Aprende a analizar alternativas, valorar consecuencias y elegir con mayor claridad y responsabilidad.';

  this.objetivo =
    'Comprender un proceso consciente para tomar decisiones, identificar los factores que influyen en ellas y desarrollar la capacidad de elegir acciones coherentes con nuestros objetivos y valores.';

  this.secciones = [

    {
      titulo: 'Introducción: decidir también es avanzar',

      parrafos: [
        'Nuestra vida está formada por decisiones. Algunas son pequeñas y cotidianas, mientras que otras pueden influir significativamente en nuestro desarrollo personal, profesional y familiar.',
        'No siempre podemos controlar las circunstancias que enfrentamos, pero normalmente podemos participar en la manera en que respondemos ante ellas.',
        'Tomar decisiones de manera consciente no significa garantizar que siempre elegiremos correctamente. Significa aprender a analizar las opciones disponibles y asumir responsabilidad por nuestras elecciones.'
      ],

      destacado:
        'Una decisión consciente no garantiza un resultado perfecto, pero permite actuar con mayor claridad sobre las razones que la sustentan.'
    },

    {
      titulo: '¿Qué influye en nuestras decisiones?',

      parrafos: [
        'Las decisiones pueden estar influenciadas por diferentes factores. Reconocerlos permite comprender mejor por qué elegimos determinadas opciones.',
        'Las emociones, experiencias, creencias, hábitos, información disponible y opiniones de otras personas pueden influir en nuestra manera de decidir.',
        'Identificar estos factores no significa ignorarlos. Significa evitar que actúen automáticamente sin que los hayamos considerado.'
      ],

      puntos: [
        'Información: qué datos conocemos sobre la situación.',
        'Experiencias: qué hemos aprendido de situaciones anteriores.',
        'Emociones: qué sentimos frente a las diferentes alternativas.',
        'Valores: qué principios consideramos importantes.',
        'Consecuencias: qué efectos podrían producir nuestras opciones.',
        'Objetivos: hacia dónde queremos avanzar.'
      ],

      cierre:
        'Comprender qué influye en nuestras decisiones nos permite observarlas con mayor conciencia antes de actuar.'
    },

    {
      titulo: 'Analizar antes de elegir',

      parrafos: [
        'Cuando una decisión es importante, puede ser útil detenerse antes de responder impulsivamente.',
        'Analizar no significa complicar todas las decisiones. Significa dedicar el nivel de atención necesario según la importancia de la situación.',
        'Un proceso sencillo puede ayudarnos a ordenar nuestras ideas.'
      ],

      puntos: [
        'Definir claramente qué decisión necesitas tomar.',
        'Identificar las alternativas disponibles.',
        'Buscar información relevante.',
        'Considerar ventajas y posibles dificultades.',
        'Evaluar las consecuencias de cada alternativa.',
        'Elegir una opción y establecer el siguiente paso.'
      ],

      cierre:
        'Una decisión se vuelve más clara cuando pasamos de una preocupación general a una situación concreta que podemos analizar.'
    },

    {
      titulo: 'Decisiones y consecuencias',

      parrafos: [
        'Toda decisión puede producir consecuencias. Algunas aparecen inmediatamente y otras pueden manifestarse con el tiempo.',
        'Considerar las consecuencias no significa intentar predecir absolutamente todo. Significa reconocer los efectos razonablemente previsibles de nuestras opciones.',
        'También es importante distinguir entre consecuencias que podemos controlar, consecuencias que podemos influir y circunstancias que están fuera de nuestro control.'
      ],

      conceptos: [
        {
          nombre: 'Consecuencia inmediata',
          significado: 'Un efecto que puede aparecer poco después de tomar una decisión.',
          ejemplo: 'Organizar el tiempo para estudiar puede reducir el tiempo disponible para otras actividades.'
        },

        {
          nombre: 'Consecuencia a largo plazo',
          significado: 'Un efecto que puede desarrollarse durante un período más prolongado.',
          ejemplo: 'Mantener un hábito de aprendizaje puede contribuir al desarrollo de nuevas capacidades.'
        },

        {
          nombre: 'Responsabilidad',
          significado: 'Reconocer nuestra participación en las decisiones que tomamos y aprender de sus resultados.',
          ejemplo: 'Revisar una decisión después de conocer sus resultados y utilizar lo aprendido para futuras elecciones.'
        }
      ],

      cierre:
        'Evaluar consecuencias ayuda a conectar nuestras decisiones presentes con los resultados que deseamos construir.'
    },

    {
      titulo: 'Errores, aprendizaje y ajuste',

      parrafos: [
        'No todas las decisiones producen los resultados esperados. Una elección puede ser razonable con la información disponible y aun así generar un resultado diferente al previsto.',
        'Cuando ocurre algo inesperado, podemos revisar qué información teníamos, qué supusimos y qué podríamos hacer de manera diferente.',
        'Aprender de una decisión no significa castigarnos por haber elegido. Significa convertir la experiencia en información para futuras decisiones.'
      ],

      puntos: [
        'Reconocer el resultado sin negarlo.',
        'Analizar qué factores influyeron.',
        'Identificar qué información faltaba.',
        'Reconocer qué estuvo bajo nuestro control.',
        'Extraer un aprendizaje concreto.',
        'Ajustar futuras decisiones cuando sea necesario.'
      ],

      cierre:
        'Una decisión que no produjo el resultado esperado también puede convertirse en una fuente de aprendizaje.'
    },

    {
      titulo: 'De la claridad a la decisión',

      parrafos: [
        'La claridad se demuestra cuando podemos transformar una reflexión en una acción concreta.',
        'Elige una decisión real que necesites tomar durante los próximos días y aplica el proceso aprendido.',
        'Define la situación, identifica tus alternativas, analiza la información disponible y considera las posibles consecuencias.'
      ],

      puntos: [
        'Escribe claramente qué necesitas decidir.',
        'Anota las alternativas que tienes disponibles.',
        'Identifica qué información necesitas conocer.',
        'Considera las posibles consecuencias.',
        'Relaciona la decisión con tus valores y objetivos.',
        'Elige un siguiente paso concreto.'
      ],

      cierre:
        'Decidir conscientemente no significa tener certeza absoluta. Significa avanzar utilizando la información, reflexión y responsabilidad disponibles.'
    }

  ];

  this.reflexiones = [

    {
      titulo: 'Mis decisiones',
      pregunta: '¿Qué tipo de decisiones suelo tomar rápidamente sin analizarlas demasiado?'
    },

    {
      titulo: 'Mis influencias',
      pregunta: '¿Qué factores suelen influir más en mis decisiones?'
    },

    {
      titulo: 'Mis alternativas',
      pregunta: '¿Qué puedo hacer para considerar más de una alternativa antes de decidir?'
    },

    {
      titulo: 'Mis consecuencias',
      pregunta: '¿Qué consecuencias debería considerar antes de tomar una decisión importante?'
    },

    {
      titulo: 'Mi próxima decisión',
      pregunta: '¿Qué decisión concreta necesito analizar durante los próximos días?'
    }

  ];

  this.preguntas = [

    {
      texto: '¿Qué significa tomar una decisión de manera consciente?',

      opciones: [
        'Analizar la situación y considerar las alternativas disponibles antes de actuar',
        'Esperar siempre a que otra persona decida',
        'Garantizar que nunca cometeremos errores'
      ],

      correcta: 0,

      explicacion:
        'Una decisión consciente implica analizar la situación y considerar las alternativas disponibles antes de actuar.'
    },

    {
      texto: '¿Por qué es útil considerar las consecuencias de una decisión?',

      opciones: [
        'Porque permite conocer absolutamente todo lo que ocurrirá',
        'Porque ayuda a reconocer posibles efectos de nuestras alternativas',
        'Porque elimina cualquier riesgo'
      ],

      correcta: 1,

      explicacion:
        'Considerar consecuencias ayuda a comprender posibles efectos, aunque no permite predecir todo lo que ocurrirá.'
    },

    {
      texto: '¿Qué podemos hacer cuando una decisión no produce el resultado esperado?',

      opciones: [
        'Ignorar lo ocurrido',
        'Evitar tomar decisiones nuevamente',
        'Analizar la experiencia y utilizar lo aprendido para futuras decisiones'
      ],

      correcta: 2,

      explicacion:
        'Revisar una experiencia permite identificar aprendizajes y ajustar futuras decisiones.'
    }

  ];

  this.respuestas = [];

  this.evaluacionEnviada = false;
}

  seleccionarRespuesta(pregunta: number, opcion: number): void {
    if (this.evaluacionEnviada) return;

    if (
      pregunta < 0 ||
      pregunta >= this.preguntas.length ||
      opcion < 0 ||
      opcion >= this.preguntas[pregunta].opciones.length
    ) {
      return;
    }

    const nuevasRespuestas = [...this.respuestas];
    nuevasRespuestas[pregunta] = opcion;
    this.respuestas = nuevasRespuestas;
  }

  comprobarEvaluacion(): void {
    if (this.evaluacionEnviada) return;

    const todasRespondidas = this.preguntas.every(
      (_, indice) => this.respuestas[indice] !== undefined
    );

    if (!todasRespondidas) {
      this.mensajeEvaluacion =
        'Responde todas las preguntas antes de enviar la evaluación.';
      return;
    }

    this.totalCorrectas = 0;

    this.preguntas.forEach((pregunta, indice) => {
      if (this.respuestas[indice] === pregunta.correcta) {
        this.totalCorrectas++;
      }
    });

    this.calificacion = Math.round(
      (this.totalCorrectas / this.preguntas.length) * 100
    );

    this.evaluacionEnviada = true;
    this.mensajeEvaluacion =
      `Evaluación finalizada. Obtuviste ${this.totalCorrectas} de ${this.preguntas.length} respuestas correctas (${this.calificacion}%).`;

  }

  private cargarLeccionPlanificacion(): void {

  this.titulo = 'Planificación y dirección';

  this.subtitulo =
    'Aprende a transformar tus objetivos en acciones organizadas y avanzar con mayor claridad hacia lo que deseas construir.';

  this.objetivo =
    'Comprender la importancia de planificar, establecer prioridades y organizar acciones concretas para avanzar de manera consciente hacia nuestros objetivos.';

  this.secciones = [

    {
      titulo: 'Introducción: convertir la intención en dirección',

      parrafos: [
        'Tener claridad sobre lo que queremos alcanzar es un primer paso, pero una visión necesita dirección para convertirse en acciones concretas.',
        'La planificación nos permite organizar nuestros recursos, establecer prioridades y definir qué podemos hacer para avanzar.',
        'Planificar no significa controlar absolutamente todo lo que ocurrirá. Significa prepararnos mejor para actuar con intención y adaptarnos cuando las circunstancias cambien.'
      ],

      destacado:
        'Una buena planificación convierte una intención general en pasos concretos que podemos comenzar a ejecutar.'
    },

    {
      titulo: 'De los objetivos a las acciones',

      parrafos: [
        'Un objetivo puede parecer lejano cuando lo observamos como un resultado completo. Dividirlo en acciones más pequeñas puede hacerlo más comprensible y manejable.',
        'La planificación comienza cuando transformamos lo que queremos lograr en acciones que podamos identificar y realizar.',
        'Cada acción debe estar relacionada con el objetivo que queremos alcanzar.'
      ],

      puntos: [
        'Definir claramente el objetivo.',
        'Identificar qué necesitamos hacer para avanzar.',
        'Dividir el objetivo en acciones concretas.',
        'Establecer un orden de prioridades.',
        'Determinar qué recursos necesitamos.',
        'Comenzar con el siguiente paso posible.'
      ],

      cierre:
        'Un objetivo se vuelve más accionable cuando sabemos cuál es el siguiente paso que podemos realizar.'
    },

    {
      titulo: 'Prioridades y enfoque',

      parrafos: [
        'No todas las actividades tienen la misma importancia. Una planificación consciente requiere distinguir aquello que realmente contribuye a nuestros objetivos.',
        'Cuando intentamos atender demasiadas cosas al mismo tiempo, podemos perder claridad sobre lo que necesita nuestra atención.',
        'Establecer prioridades permite concentrar nuestros esfuerzos en las acciones que tienen mayor relación con nuestros objetivos actuales.'
      ],

      puntos: [
        'Identificar lo más importante.',
        'Diferenciar lo urgente de lo importante.',
        'Reducir actividades que no aportan al objetivo.',
        'Concentrar la atención en una acción a la vez.',
        'Revisar periódicamente las prioridades.'
      ],

      cierre:
        'El enfoque permite utilizar mejor nuestro tiempo y energía en aquello que realmente queremos construir.'
    },

    {
      titulo: 'Organizar recursos y tiempo',

      parrafos: [
        'Toda acción requiere recursos. Algunos pueden ser tiempo, conocimientos, herramientas, dinero, información o apoyo de otras personas.',
        'Reconocer los recursos disponibles permite crear planes más realistas y detectar aquello que necesitamos aprender, conseguir o desarrollar.',
        'También es importante considerar el tiempo disponible y evitar establecer planes que dependan de capacidades o recursos que todavía no tenemos.'
      ],

      puntos: [
        'Tiempo disponible.',
        'Conocimientos y habilidades.',
        'Herramientas necesarias.',
        'Recursos económicos cuando correspondan.',
        'Información relevante.',
        'Personas o redes de apoyo.'
      ],

      cierre:
        'Planificar también significa reconocer con qué contamos y qué necesitamos desarrollar para avanzar.'
    },

    {
      titulo: 'Revisar, ajustar y continuar',

      parrafos: [
        'Un plan no tiene que permanecer exactamente igual desde el principio hasta el final. Las circunstancias pueden cambiar y aportar nueva información.',
        'Revisar el avance permite identificar qué está funcionando, qué necesita modificarse y qué nuevas acciones pueden ser necesarias.',
        'Ajustar un plan no significa abandonar el objetivo. Puede significar encontrar una manera más adecuada de continuar avanzando.'
      ],

      puntos: [
        'Revisar lo realizado.',
        'Observar los resultados obtenidos.',
        'Identificar dificultades.',
        'Ajustar las acciones cuando sea necesario.',
        'Mantener el objetivo presente.',
        'Continuar con el siguiente paso.'
      ],

      cierre:
        'La planificación se fortalece cuando combina dirección, acción, revisión y capacidad de adaptación.'
    },

    {
      titulo: 'De la planificación a la acción',

      parrafos: [
        'La planificación tiene sentido cuando nos ayuda a actuar.',
        'Elige un objetivo personal, académico o profesional que quieras desarrollar y conviértelo en un pequeño plan de acción.',
        'Define qué quieres lograr, qué acciones necesitas realizar y cuál será el primer paso que puedes comenzar.'
      ],

      puntos: [
        'Escribe un objetivo concreto.',
        'Define las principales acciones necesarias.',
        'Establece prioridades.',
        'Identifica los recursos que necesitas.',
        'Define un primer paso.',
        'Establece cuándo comenzarás.'
      ],

      cierre:
        'La dirección aparece cuando sabemos hacia dónde queremos avanzar y qué acción podemos realizar ahora.'
    }

  ];

  this.reflexiones = [

    {
      titulo: 'Mi objetivo',
      pregunta: '¿Qué objetivo quiero convertir en un plan concreto?'
    },

    {
      titulo: 'Mis prioridades',
      pregunta: '¿Qué actividades deberían recibir mayor atención para avanzar hacia ese objetivo?'
    },

    {
      titulo: 'Mis recursos',
      pregunta: '¿Qué conocimientos, herramientas, tiempo o apoyo necesito para avanzar?'
    },

    {
      titulo: 'Mi organización',
      pregunta: '¿Qué puedo organizar mejor para utilizar de manera más consciente mi tiempo y energía?'
    },

    {
      titulo: 'Mi primer paso',
      pregunta: '¿Cuál es la primera acción concreta que puedo realizar para comenzar?'
    }

  ];

  this.preguntas = [

    {
      texto: '¿Qué permite hacer una planificación consciente?',

      opciones: [
        'Convertir objetivos en acciones organizadas y concretas',
        'Garantizar que nunca aparecerán dificultades',
        'Evitar tener que tomar decisiones'
      ],

      correcta: 0,

      explicacion:
        'La planificación ayuda a transformar objetivos en acciones organizadas y permite avanzar con mayor dirección.'
    },

    {
      texto: '¿Por qué es importante establecer prioridades?',

      opciones: [
        'Porque todas las actividades tienen exactamente la misma importancia',
        'Porque permite concentrar esfuerzos en las acciones más relacionadas con nuestros objetivos',
        'Porque elimina la necesidad de organizar el tiempo'
      ],

      correcta: 1,

      explicacion:
        'Establecer prioridades ayuda a concentrar tiempo y energía en aquello que tiene mayor relación con nuestros objetivos.'
    },

    {
      texto: '¿Qué podemos hacer cuando las circunstancias cambian?',

      opciones: [
        'Abandonar automáticamente nuestro objetivo',
        'Mantener el plan sin importar lo que ocurra',
        'Revisar el plan y ajustar las acciones cuando sea necesario'
      ],

      correcta: 2,

      explicacion:
        'Un plan puede revisarse y ajustarse cuando aparecen nuevas circunstancias o información.'
    }

  ];

  this.respuestas = [];

  this.evaluacionEnviada = false;
}

cargarLeccionHabitos(): void {
  if (this.leccionActual !== 'habitos-y-constancia') return;

  this.titulo = 'Hábitos y constancia';
  this.subtitulo = 'Construir prácticas cotidianas que permitan sostener nuestras decisiones y avanzar con disciplina.';
  this.objetivo = 'Comprender cómo se forman los hábitos, reconocer la importancia de la constancia y desarrollar acciones cotidianas sostenibles.';

  this.secciones = [
    {
      titulo: '¿Qué son los hábitos?',
      parrafos: [
        'Los hábitos son comportamientos que repetimos con frecuencia y que, con el tiempo, pueden convertirse en parte de nuestra rutina.',
        'Un hábito puede estar relacionado con el aprendizaje, la organización, la salud, el trabajo o cualquier otra dimensión de nuestra vida.',
        'Los hábitos influyen en nuestros resultados porque conectan las decisiones con las acciones cotidianas.'
      ],
      destacado: 'Lo que repetimos diariamente puede influir en la dirección de nuestro crecimiento.'
    },
    {
      titulo: 'La importancia de la constancia',
      parrafos: [
        'La constancia consiste en mantener el esfuerzo y continuar actuando incluso cuando el entusiasmo inicial disminuye.',
        'No significa que todos los días debamos tener el mismo rendimiento. Significa conservar el compromiso y retomar el camino cuando aparecen dificultades.',
        'La constancia permite que las acciones pequeñas se acumulen y formen parte de un proceso de desarrollo.'
      ]
    },
    {
      titulo: 'De las decisiones a los hábitos',
      parrafos: [
        'Una decisión puede marcar el inicio de un cambio, pero su continuidad depende de las acciones que realizamos.',
        'Cuando una acción se repite en circunstancias similares, puede convertirse progresivamente en un hábito.',
        'Por eso, es importante transformar las intenciones generales en comportamientos concretos y realizables.'
      ]
    },
    {
      titulo: 'Cómo construir hábitos sostenibles',
      parrafos: [
        'Para desarrollar un hábito, conviene comenzar con acciones pequeñas y definir claramente cuándo y dónde se realizarán.',
        'También ayuda preparar el entorno, registrar los avances y revisar periódicamente qué está funcionando.',
        'Si un día no cumples lo previsto, puedes retomar la práctica sin convertir una interrupción en abandono.'
      ],
      puntos: [
        'Comienza con una acción sencilla.',
        'Define un horario o momento específico.',
        'Prepara un entorno que facilite la práctica.',
        'Registra tus avances.',
        'Retoma el hábito después de una interrupción.'
      ],
      cierre: 'Un hábito sostenible se construye mediante acciones realistas que pueden mantenerse y ajustarse con el tiempo.'
    },
    {
      titulo: 'Disciplina y motivación',
      parrafos: [
        'La motivación puede impulsarnos a comenzar una actividad, pero no siempre se mantiene constante.',
        'La disciplina ayuda a sostener el compromiso cuando el entusiasmo disminuye o aparecen distracciones.',
        'Ambas pueden complementarse: la motivación inspira el inicio y la disciplina favorece la continuidad.'
      ]
    },
    {
      titulo: 'La conexión con la Filosofía CDS',
      parrafos: [
        'La Claridad permite reconocer qué hábito queremos desarrollar y por qué es importante.',
        'La Disciplina ayuda a sostener las acciones necesarias para construirlo.',
        'La Superación nos permite aprender de la experiencia, corregir errores y continuar avanzando.'
      ],
      destacado: 'Claridad para elegir el rumbo. Disciplina para sostener el esfuerzo. Superación para seguir aprendiendo.'
    }
  ];

  this.reflexiones = [
    { titulo: 'Mi hábito', pregunta: '¿Qué hábito quiero desarrollar o fortalecer?' },
    { titulo: 'Mi propósito', pregunta: '¿Por qué es importante para mí incorporar este hábito?' },
    { titulo: 'Mi acción diaria', pregunta: '¿Qué acción concreta puedo repetir cada día?' },
    { titulo: 'Mi horario', pregunta: '¿En qué momento específico realizaré esta acción?' },
    { titulo: 'Mi compromiso', pregunta: '¿Cómo retomaré la práctica si un día no consigo cumplirla?' }
  ];

  this.preguntas = [
    {
      texto: '¿Qué es un hábito?',
      opciones: [
        'Una acción que realizamos una sola vez',
        'Un comportamiento que repetimos con frecuencia',
        'Una actividad que siempre requiere motivación'
      ],
      correcta: 1,
      explicacion: 'Un hábito es un comportamiento que se repite y puede incorporarse a nuestra rutina.'
    },
    {
      texto: '¿Qué significa actuar con constancia?',
      opciones: [
        'Sostener el esfuerzo y retomar el camino ante las dificultades',
        'Exigir el mismo rendimiento todos los días',
        'Evitar modificar cualquier planificación'
      ],
      correcta: 0,
      explicacion: 'La constancia implica mantener el compromiso y continuar después de las dificultades.'
    },
    {
      texto: '¿Qué relación existe entre las decisiones y los hábitos?',
      opciones: [
        'Las decisiones no influyen en nuestros comportamientos',
        'Los hábitos impiden tomar nuevas decisiones',
        'Los hábitos ayudan a convertir decisiones en acciones cotidianas'
      ],
      correcta: 2,
      explicacion: 'La repetición permite transformar decisiones conscientes en prácticas cotidianas.'
    },
    {
      texto: '¿Qué favorece la construcción de un hábito sostenible?',
      opciones: [
        'Realizar acciones pequeñas en momentos definidos',
        'Esperar a tener motivación permanente',
        'Cambiar de objetivo todos los días'
      ],
      correcta: 0,
      explicacion: 'Las acciones pequeñas y específicas facilitan la continuidad.'
    },
    {
      texto: '¿Qué papel cumple la disciplina cuando disminuye la motivación?',
      opciones: [
        'Obliga a abandonar la actividad',
        'Ayuda a sostener el compromiso',
        'Hace innecesaria la planificación'
      ],
      correcta: 1,
      explicacion: 'La disciplina favorece la continuidad incluso cuando el entusiasmo inicial disminuye.'
    }
  ];

  this.respuestas = [];
  this.evaluacionEnviada = false;
}

cargarLeccionOrganizacion(): void {
  if (this.leccionActual !== 'organizacion-personal') return;

  this.titulo = 'Organización personal';
  this.subtitulo = 'Desarrollar una forma consciente de organizar actividades, responsabilidades y recursos.';
  this.objetivo = 'Comprender la importancia de la organización personal y aplicar herramientas sencillas para ordenar las actividades y cumplir compromisos.';

  this.secciones = [
    {
      titulo: '¿Qué es la organización personal?',
      parrafos: [
        'La organización personal es la capacidad de ordenar nuestras actividades, responsabilidades y recursos para avanzar con mayor claridad.',
        'Organizarse no significa llenar cada minuto del día. Significa reconocer qué necesitamos hacer, establecer prioridades y distribuir nuestras tareas de manera consciente.',
        'Una buena organización facilita el cumplimiento de los compromisos y ayuda a reducir la improvisación.'
      ],
      destacado: 'Organizarse es dar estructura a nuestras acciones para avanzar con dirección.'
    },
    {
      titulo: 'La importancia del orden',
      parrafos: [
        'Cuando las tareas están desordenadas o no tenemos claridad sobre nuestras responsabilidades, es más fácil olvidar actividades importantes o dedicar demasiado tiempo a asuntos secundarios.',
        'El orden permite identificar qué debemos hacer, qué recursos necesitamos y cuáles son los siguientes pasos.',
        'También facilita revisar nuestros avances y realizar ajustes cuando las circunstancias cambian.'
      ]
    },
    {
      titulo: 'Prioridades y responsabilidades',
      parrafos: [
        'No todas las actividades tienen la misma importancia ni requieren atención inmediata.',
        'Establecer prioridades significa reconocer qué tareas están más relacionadas con nuestros objetivos y compromisos.',
        'Es importante diferenciar entre lo urgente, lo importante y aquello que puede esperar o delegarse cuando sea posible.'
      ],
      puntos: [
        'Identificar las tareas pendientes.',
        'Reconocer cuáles tienen mayor importancia.',
        'Considerar los plazos y compromisos.',
        'Asignar tiempo a las actividades prioritarias.',
        'Revisar las tareas que pueden posponerse o reorganizarse.'
      ]
    },
    {
      titulo: 'Herramientas para organizarse',
      parrafos: [
        'Existen herramientas sencillas que pueden ayudar a organizar las actividades diarias y semanales.',
        'Una agenda, un calendario, una lista de tareas o una planificación semanal pueden servir para visualizar responsabilidades y recordar compromisos.',
        'La herramienta más útil es aquella que podemos utilizar de manera constante y que se adapta a nuestra realidad.'
      ],
      puntos: [
        'Utilizar una lista de tareas.',
        'Registrar fechas y compromisos en un calendario.',
        'Planificar las actividades de la semana.',
        'Dividir las tareas grandes en acciones pequeñas.',
        'Revisar periódicamente las actividades pendientes.'
      ],
      cierre: 'Una herramienta de organización es útil cuando facilita la acción, no cuando se convierte en una carga adicional.'
    },
    {
      titulo: 'Organización y flexibilidad',
      parrafos: [
        'Una planificación puede cambiar debido a imprevistos, nuevas responsabilidades o modificaciones en nuestras prioridades.',
        'Organizarse no significa seguir un plan de manera rígida, sino contar con una estructura que pueda adaptarse.',
        'Cuando algo no sale como estaba previsto, podemos revisar las prioridades y reorganizar las acciones sin abandonar nuestros objetivos.'
      ],
      destacado: 'La organización aporta estructura; la flexibilidad permite responder a la realidad.'
    },
    {
      titulo: 'La organización dentro de la Filosofía CDS',
      parrafos: [
        'La Claridad permite identificar objetivos y responsabilidades.',
        'La Disciplina ayuda a mantener el orden y cumplir las actividades planificadas.',
        'La Superación impulsa a revisar nuestros métodos, aprender de la experiencia y mejorar nuestra organización.'
      ]
    }
  ];

  this.reflexiones = [
    {
      titulo: 'Mis responsabilidades',
      pregunta: '¿Cuáles son las principales responsabilidades que debo atender actualmente?'
    },
    {
      titulo: 'Mis prioridades',
      pregunta: '¿Qué actividades requieren mayor atención esta semana y por qué?'
    },
    {
      titulo: 'Mi herramienta',
      pregunta: '¿Qué herramienta sencilla puedo utilizar para organizar mis tareas?'
    },
    {
      titulo: 'Mi planificación',
      pregunta: '¿Cómo puedo distribuir mis actividades para cumplir mis compromisos?'
    },
    {
      titulo: 'Mi mejora',
      pregunta: '¿Qué aspecto de mi organización personal necesito mejorar?'
    }
  ];

  this.preguntas = [
    {
      texto: '¿Cuál es el propósito de la organización personal?',
      opciones: [
        'Mantener todas las horas del día ocupadas',
        'Ordenar actividades, responsabilidades y recursos para avanzar con claridad',
        'Evitar cualquier cambio en nuestros planes'
      ],
      correcta: 1,
      explicacion: 'La organización personal permite estructurar nuestras acciones y responsabilidades de manera consciente.'
    },
    {
      texto: '¿Por qué es importante establecer prioridades?',
      opciones: [
        'Porque todas las tareas tienen la misma importancia',
        'Porque permite evitar cualquier responsabilidad',
        'Porque ayuda a concentrar la atención en las actividades más importantes'
      ],
      correcta: 2,
      explicacion: 'Las prioridades permiten orientar el tiempo y el esfuerzo hacia las tareas relevantes.'
    },
    {
      texto: '¿Qué herramienta puede ayudar a organizar las actividades?',
      opciones: [
        'Una agenda o una lista de tareas',
        'Dejar todas las actividades para el último momento',
        'Depender únicamente de la memoria'
      ],
      correcta: 0,
      explicacion: 'Las agendas y listas permiten visualizar y recordar las actividades pendientes.'
    },
    {
      texto: '¿Qué debemos hacer cuando cambian nuestras circunstancias?',
      opciones: [
        'Abandonar todos nuestros objetivos',
        'Revisar las prioridades y reorganizar las actividades',
        'Ignorar los nuevos compromisos'
      ],
      correcta: 1,
      explicacion: 'La organización también requiere flexibilidad para adaptarse a situaciones nuevas.'
    },
    {
      texto: '¿Cómo se relaciona la organización con la Filosofía CDS?',
      opciones: [
        'La organización elimina la necesidad de aprender',
        'La organización depende únicamente de la motivación',
        'La Claridad orienta, la Disciplina sostiene y la Superación impulsa la mejora'
      ],
      correcta: 2,
      explicacion: 'Los tres principios CDS se complementan en la organización y el desarrollo personal.'
    }
  ];

  this.respuestas = [];
  this.evaluacionEnviada = false;
}

cargarLeccionTiempo(): void {
  if (this.leccionActual !== 'gestion-del-tiempo') return;

  this.titulo = 'Gestión del tiempo';

  this.subtitulo =
    'Aprende a organizar tu tiempo con intención, disciplina y enfoque.';

  this.objetivo =
    'Desarrollar la capacidad de administrar el tiempo de manera consciente, establecer prioridades y mantener el enfoque en las actividades que contribuyen al crecimiento personal.';

  this.secciones = [
    {
      titulo: '1. El tiempo es un recurso limitado',
      parrafos: [
        'El tiempo es uno de los recursos más importantes de nuestra vida. A diferencia del dinero o de otros recursos, no podemos recuperar el tiempo que ya ha pasado.',
        'Gestionar el tiempo no significa llenar cada minuto con actividades. Significa utilizarlo conscientemente, dando prioridad a aquello que realmente importa.',
        'Una persona disciplinada comprende que sus decisiones diarias influyen directamente en sus resultados a largo plazo.'
      ],
      destacado:
        'No se trata de hacer más cosas, sino de dedicar tiempo a las cosas correctas.'
    },
    {
      titulo: '2. Aprende a establecer prioridades',
      parrafos: [
        'No todas las actividades tienen la misma importancia. Algunas contribuyen directamente a nuestros objetivos, mientras que otras consumen tiempo sin aportar un beneficio significativo.',
        'Establecer prioridades consiste en identificar qué actividades necesitan atención inmediata, cuáles son importantes para el futuro y cuáles pueden esperar o eliminarse.',
        'Cuando no establecemos prioridades, corremos el riesgo de dedicar la mayor parte del día a tareas urgentes y descuidar nuestros objetivos importantes.'
      ],
      puntos: [
        'Identifica tus objetivos principales.',
        'Distingue las tareas importantes de las secundarias.',
        'Organiza tus actividades según su prioridad.',
        'Aprende a decir no a las distracciones y compromisos innecesarios.'
      ]
    },
    {
      titulo: '3. Planificación diaria y semanal',
      parrafos: [
        'La planificación permite transformar las intenciones en acciones concretas. Cuando organizamos nuestras actividades, tenemos una visión más clara de lo que debemos hacer y del tiempo que necesitamos.',
        'Una planificación efectiva debe ser realista. No es conveniente llenar la agenda con más tareas de las que realmente podemos cumplir.',
        'Dedicar unos minutos al inicio o al final del día para organizar las actividades ayuda a mantener el rumbo y reducir la improvisación.'
      ],
      puntos: [
        'Define entre una y tres prioridades principales para el día.',
        'Asigna un horario aproximado a cada actividad.',
        'Reserva espacios para imprevistos y descansos.',
        'Revisa al finalizar el día lo que lograste y lo que debes ajustar.'
      ]
    },
    {
      titulo: '4. Identifica y controla las distracciones',
      parrafos: [
        'Las distracciones pueden interrumpir nuestra concentración y dificultar el cumplimiento de las tareas importantes.',
        'El uso descontrolado del teléfono, las redes sociales, las interrupciones constantes y la falta de un espacio organizado pueden fragmentar nuestro tiempo.',
        'La disciplina consiste en reconocer aquello que nos distrae y establecer límites para proteger nuestra atención.'
      ],
      puntos: [
        'Silencia las notificaciones que no sean necesarias.',
        'Evita revisar constantemente el teléfono mientras trabajas.',
        'Organiza un espacio que facilite la concentración.',
        'Trabaja en una tarea a la vez cuando necesites atención profunda.'
      ]
    },
    {
      titulo: '5. Constancia, descanso y evaluación',
      parrafos: [
        'Una buena gestión del tiempo no depende de un solo día de productividad. Se construye mediante hábitos que se mantienen y mejoran con el tiempo.',
        'El descanso también forma parte de una organización responsable. Trabajar sin pausas puede afectar la concentración y dificultar el cumplimiento de los objetivos.',
        'Evaluar cómo utilizamos nuestro tiempo nos permite identificar errores, reconocer avances y realizar cambios para mejorar.'
      ],
      cierre:
        'La disciplina se demuestra cuando organizas tu tiempo y mantienes tus compromisos incluso cuando la motivación disminuye.'
    }
  ];

  this.reflexiones = [
    {
      titulo: 'Reflexión personal',
      pregunta:
        '¿En qué actividades se está yendo la mayor parte de tu tiempo y cuáles de ellas contribuyen realmente a tus objetivos?'
    },
    {
      titulo: 'Compromiso de acción',
      pregunta:
        '¿Qué cambio concreto puedes realizar desde hoy para administrar mejor tu tiempo?'
    }
  ];

  this.preguntas = [
    {
      texto: '¿Qué significa gestionar correctamente el tiempo?',
      opciones: [
        'Llenar cada minuto con actividades.',
        'Realizar tantas tareas como sea posible.',
        'Utilizar el tiempo conscientemente y priorizar lo importante.',
        'Evitar todos los momentos de descanso.'
      ],
      correcta: 2,
      explicacion:
        'Gestionar el tiempo significa organizar las actividades de acuerdo con su importancia y utilizar los recursos disponibles con intención.'
    },
    {
      texto: '¿Por qué es importante establecer prioridades?',
      opciones: [
        'Porque todas las tareas deben realizarse al mismo tiempo.',
        'Porque permite dedicar atención a las actividades que más contribuyen a nuestros objetivos.',
        'Porque elimina la necesidad de planificar.',
        'Porque permite evitar cualquier imprevisto.'
      ],
      correcta: 1,
      explicacion:
        'Las prioridades ayudan a distinguir las tareas importantes de las secundarias y a dirigir nuestros esfuerzos hacia los objetivos.'
    },
    {
      texto: '¿Cuál es una práctica adecuada de planificación diaria?',
      opciones: [
        'Programar más tareas de las que podemos cumplir.',
        'Dejar todas las decisiones para el último momento.',
        'Definir prioridades y reservar tiempo para imprevistos.',
        'Realizar únicamente las actividades más fáciles.'
      ],
      correcta: 2,
      explicacion:
        'Una planificación realista contempla las prioridades, el tiempo disponible y posibles imprevistos.'
    },
    {
      texto: '¿Qué acción ayuda a reducir las distracciones?',
      opciones: [
        'Revisar las notificaciones constantemente.',
        'Realizar varias tareas exigentes al mismo tiempo.',
        'Mantener el teléfono siempre visible.',
        'Silenciar notificaciones innecesarias durante las tareas importantes.'
      ],
      correcta: 3,
      explicacion:
        'Reducir las interrupciones ayuda a proteger la concentración y a dedicar atención a las tareas importantes.'
    },
    {
      texto: '¿Qué papel cumple el descanso en la gestión del tiempo?',
      opciones: [
        'Es una pérdida de tiempo que debe eliminarse.',
        'Forma parte de una organización responsable y ayuda a mantener el rendimiento.',
        'Debe realizarse únicamente cuando todas las tareas estén terminadas.',
        'No tiene relación con la disciplina.'
      ],
      correcta: 1,
      explicacion:
        'El descanso forma parte de una planificación equilibrada y contribuye a sostener la concentración y la constancia.'
    }
  ];

  this.respuestas = [];
  this.evaluacionEnviada = false;
}

private cargarLeccionCompromiso(): void {
  this.titulo = 'Compromiso y responsabilidad';
  this.subtitulo = 'Convertir las decisiones en acciones sostenidas';
  this.objetivo =
    'Comprender el papel del compromiso y la responsabilidad personal para transformar las decisiones en acciones coherentes y sostenidas.';

  this.secciones = [
    {
      titulo: 'El compromiso comienza con una decisión',
      parrafos: [
        'El compromiso implica asumir una decisión de manera consciente y estar dispuesto a actuar de acuerdo con ella.',
        'No depende únicamente de la motivación del momento, sino de la capacidad de mantener una dirección incluso cuando aparecen dificultades.'
      ],
      destacado:
        'Comprometerse significa asumir responsabilidad sobre aquello que has decidido construir.'
    },
    {
      titulo: 'Responsabilidad personal',
      parrafos: [
        'La responsabilidad personal consiste en reconocer que nuestras decisiones generan consecuencias y que nuestras acciones tienen un papel importante en los resultados que construimos.',
        'Esto no significa controlar todas las circunstancias, sino actuar sobre aquello que sí está bajo nuestro control.'
      ],
      puntos: [
        'Reconocer las propias decisiones.',
        'Cumplir los acuerdos establecidos.',
        'Aprender de los errores.',
        'Actuar con coherencia.',
        'Mantener constancia ante las dificultades.'
      ],
      cierre:
        'La responsabilidad aumenta cuando dejamos de esperar que otros resuelvan aquello que depende de nosotros.'
    },
    {
      titulo: 'Compromiso sostenido',
      parrafos: [
        'Un compromiso real se demuestra mediante acciones repetidas a lo largo del tiempo.',
        'La constancia permite convertir una intención en un comportamiento y un comportamiento sostenido en un hábito.'
      ],
      conceptos: [
        {
          nombre: 'Decisión',
          significado: 'Elegir conscientemente una dirección.',
          ejemplo: 'Definir qué objetivo quieres alcanzar.'
        },
        {
          nombre: 'Compromiso',
          significado: 'Asumir la decisión y actuar de acuerdo con ella.',
          ejemplo: 'Establecer acciones concretas para avanzar.'
        },
        {
          nombre: 'Constancia',
          significado: 'Mantener las acciones necesarias a través del tiempo.',
          ejemplo: 'Continuar trabajando aunque el progreso sea gradual.'
        }
      ],
      cierre:
        'La claridad permite decidir; el compromiso permite comenzar; la constancia permite avanzar.'
    }
  ];

  this.reflexiones = [
    {
      titulo: 'Mi compromiso actual',
      pregunta: '¿Qué decisión importante necesitas asumir con mayor responsabilidad?'
    },
    {
      titulo: 'Mis acciones',
      pregunta: '¿Qué acción concreta puedes comenzar a realizar desde hoy?'
    },
    {
      titulo: 'Mi constancia',
      pregunta: '¿Qué hábito necesitas mantener para avanzar hacia tu objetivo?'
    }
  ];

  this.preguntas = [
    {
      texto: '¿Qué caracteriza principalmente al compromiso?',
      opciones: [
        'Depender de la motivación del momento',
        'Asumir una decisión y actuar de acuerdo con ella',
        'Esperar que otros resuelvan las dificultades',
        'Evitar cualquier error'
      ],
      correcta: 1,
      explicacion:
        'El compromiso implica asumir una decisión y actuar de manera coherente con ella.'
    },
    {
      texto: '¿Qué significa responsabilidad personal?',
      opciones: [
        'Controlar todas las circunstancias',
        'Evitar asumir errores',
        'Reconocer nuestras decisiones y actuar sobre aquello que podemos controlar',
        'Esperar resultados inmediatos'
      ],
      correcta: 2,
      explicacion:
        'La responsabilidad personal consiste en reconocer nuestras decisiones y actuar sobre aquello que está bajo nuestro control.'
    },
    {
      texto: '¿Qué permite la constancia?',
      opciones: [
        'Convertir una intención en acciones sostenidas',
        'Evitar cualquier dificultad',
        'Obtener resultados sin esfuerzo',
        'Eliminar la necesidad de aprender'
      ],
      correcta: 0,
      explicacion:
        'La constancia permite mantener las acciones necesarias a través del tiempo.'
    }
  ];
}

private cargarLeccionEjecucion(): void {
  this.titulo = 'Ejecución y seguimiento';
  this.subtitulo = 'Convertir la planificación en acción';
  this.objetivo =
    'Comprender cómo transformar los planes en acciones concretas y utilizar el seguimiento para mantener una dirección clara.';

  this.secciones = [
    {
      titulo: 'De la intención a la acción',
      parrafos: [
        'Una meta puede estar bien definida y aun así no producir avances si no se transforma en acciones concretas.',
        'La ejecución consiste en llevar una decisión o un plan al terreno de la práctica.'
      ],
      destacado:
        'Una dirección clara necesita acciones concretas para convertirse en avance.'
    },
    {
      titulo: 'Acciones concretas',
      parrafos: [
        'Una acción útil debe poder identificarse claramente y realizarse dentro de un período determinado.',
        'Dividir un objetivo en acciones pequeñas permite reducir la incertidumbre y facilita el seguimiento.'
      ],
      puntos: [
        'Definir qué se debe hacer.',
        'Establecer cuándo se realizará.',
        'Determinar qué recursos se necesitan.',
        'Registrar el avance.',
        'Ajustar cuando sea necesario.'
      ],
      cierre:
        'La ejecución mejora cuando sabemos exactamente cuál es el siguiente paso.'
    },
    {
      titulo: 'Seguimiento y ajuste',
      parrafos: [
        'El seguimiento permite observar qué se ha realizado, qué permanece pendiente y qué necesita ser modificado.',
        'Revisar el avance no significa abandonar el plan ante una dificultad, sino utilizar la información disponible para tomar mejores decisiones.'
      ],
      conceptos: [
        {
          nombre: 'Ejecución',
          significado: 'Convertir una planificación en acciones reales.',
          ejemplo: 'Realizar hoy una tarea concreta relacionada con el objetivo.'
        },
        {
          nombre: 'Seguimiento',
          significado: 'Revisar periódicamente el avance.',
          ejemplo: 'Comprobar cada semana qué acciones fueron realizadas.'
        },
        {
          nombre: 'Ajuste',
          significado: 'Modificar una acción cuando la información indica que es necesario.',
          ejemplo: 'Cambiar una estrategia que no está produciendo el avance esperado.'
        }
      ],
      cierre:
        'Planificar orienta, ejecutar mueve y hacer seguimiento permite corregir el rumbo.'
    }
  ];

this.reflexiones = [
  {
    titulo: 'Mi planificación',
    pregunta:
      '¿Qué plan tienes pendiente de convertir en acciones concretas?'
  },
  {
    titulo: 'Mi seguimiento',
    pregunta:
      '¿Cómo puedes comprobar si estás avanzando de acuerdo con lo planificado?'
  },
  {
    titulo: 'Mi siguiente acción',
    pregunta:
      '¿Qué acción específica puedes realizar hoy para avanzar hacia tu objetivo?'
  }
];

this.preguntas = [
  {
    texto: '¿Qué significa ejecutar un plan?',
    opciones: [
      'Pensar constantemente en el objetivo.',
      'Esperar a que aparezca la motivación.',
      'Transformar la planificación en acciones concretas.',
      'Cambiar de objetivo cada vez que aparece una dificultad.'
    ],
    correcta: 2,
    explicacion:
      'La ejecución consiste en llevar una planificación a la práctica mediante acciones concretas.'
  },
  {
    texto: '¿Para qué sirve el seguimiento?',
    opciones: [
      'Para comprobar avances, identificar pendientes y revisar resultados.',
      'Para garantizar que nunca habrá errores.',
      'Para evitar realizar cambios.',
      'Para sustituir la planificación.'
    ],
    correcta: 0,
    explicacion:
      'El seguimiento permite observar el progreso y obtener información para tomar decisiones.'
  },
  {
    texto: '¿Qué debemos hacer cuando una acción no produce el resultado esperado?',
    opciones: [
      'Ignorar lo ocurrido.',
      'Abandonar siempre el objetivo.',
      'Continuar sin revisar nada.',
      'Analizar el resultado y ajustar la estrategia cuando sea necesario.'
    ],
    correcta: 3,
    explicacion:
      'Analizar los resultados permite identificar qué ajustes pueden mejorar las siguientes acciones.'
  }
];

this.respuestas = [];
this.evaluacionEnviada = false;
}
  private cargarLeccionResiliencia(): void {
    this.titulo = 'Resiliencia';

    this.subtitulo =
      'Desarrollar la capacidad de afrontar dificultades, aprender de las experiencias y continuar avanzando con mayor claridad.';

    this.objetivo =
      'Comprender qué es la resiliencia, reconocer cómo puede desarrollarse y aprender a responder de manera consciente ante las dificultades y los cambios.';

    this.secciones = [
      {
        titulo: 'Comprender la resiliencia',
        parrafos: [
          'La vida presenta situaciones que no siempre podemos controlar: cambios inesperados, pérdidas, dificultades, errores, frustraciones o períodos de incertidumbre.',
          'La resiliencia es la capacidad de afrontar estas experiencias, adaptarse a las circunstancias y continuar avanzando sin negar lo que está ocurriendo.',
          'Ser resiliente no significa evitar las dificultades ni permanecer siempre fuerte. Significa desarrollar recursos para responder ante ellas y aprender de la experiencia.'
        ],
        destacado:
          'La resiliencia no elimina las dificultades; fortalece nuestra capacidad para atravesarlas y seguir avanzando.'
      },
      {
        titulo: 'Lo que sí podemos controlar',
        parrafos: [
          'Ante una situación difícil, es importante diferenciar aquello que podemos controlar de aquello que no depende directamente de nosotros.',
          'No siempre podemos cambiar una circunstancia, pero podemos trabajar sobre nuestra manera de responder, las decisiones que tomamos y las acciones que realizamos.'
        ],
        puntos: [
          'La actitud con la que enfrentamos una situación.',
          'Las decisiones que tomamos.',
          'Las acciones que podemos realizar.',
          'La manera en que buscamos información o apoyo.',
          'La disposición para aprender de la experiencia.'
        ],
        cierre:
          'La claridad aumenta cuando dejamos de concentrarnos únicamente en lo que no podemos cambiar y dirigimos nuestra atención hacia lo que sí podemos hacer.'
      },
      {
        titulo: 'Aprender de las dificultades',
        parrafos: [
          'Una dificultad puede convertirse en una experiencia de aprendizaje cuando analizamos lo ocurrido y buscamos comprender qué podemos hacer diferente en el futuro.',
          'Esto no significa justificar una situación negativa ni asumir que toda dificultad tiene un resultado positivo inmediato. Significa utilizar la experiencia como una fuente de información para continuar desarrollándonos.'
        ],
        puntos: [
          'Reconocer lo ocurrido.',
          'Identificar qué estuvo bajo nuestro control.',
          'Observar qué decisiones produjeron determinados resultados.',
          'Extraer aprendizajes.',
          'Definir una respuesta diferente cuando sea necesario.'
        ],
        cierre:
          'Aprender de una experiencia permite convertir información del pasado en mayor claridad para las decisiones futuras.'
      },
      {
        titulo: 'Recursos que fortalecen la resiliencia',
        parrafos: [
          'La resiliencia puede fortalecerse mediante hábitos y recursos que ayudan a afrontar mejor los períodos de dificultad.',
          'Estos recursos no hacen desaparecer los problemas, pero pueden facilitar una respuesta más consciente y organizada.'
        ],
        conceptos: [
          {
            nombre: 'Autoconocimiento',
            significado: 'Comprender nuestras emociones, capacidades, límites y formas habituales de responder.',
            ejemplo: 'Reconocer qué situaciones generan mayor dificultad y cómo solemos reaccionar ante ellas.'
          },
          {
            nombre: 'Adaptación',
            significado: 'Modificar estrategias cuando las circunstancias cambian.',
            ejemplo: 'Buscar una nueva forma de avanzar cuando el plan inicial deja de ser viable.'
          },
          {
            nombre: 'Apoyo',
            significado: 'Reconocer cuándo es útil buscar orientación o acompañamiento.',
            ejemplo: 'Conversar con una persona de confianza para analizar una situación desde otra perspectiva.'
          }
        ],
        cierre:
          'La resiliencia se fortalece cuando desarrollamos recursos internos y aprendemos a utilizar adecuadamente los recursos disponibles en nuestro entorno.'
      },
      {
        titulo: 'Resiliencia y superación',
        parrafos: [
          'Superarse no significa competir permanentemente contra otras personas. También significa desarrollar la capacidad de aprender, ajustar el rumbo y continuar construyendo después de una dificultad.',
          'Cada experiencia puede aportar información sobre nuestras capacidades, nuestros límites y las áreas que necesitamos seguir desarrollando.',
          'La resiliencia permite mantener una dirección mientras aprendemos a responder a las circunstancias que aparecen en el camino.'
        ],
        destacado:
          'Superar una dificultad no siempre significa regresar al punto anterior; en ocasiones significa avanzar con una comprensión diferente.'
      },
      {
        titulo: 'De la experiencia a la acción',
        parrafos: [
          'La resiliencia se desarrolla mediante la práctica. Por eso, una forma de comenzar es observar una dificultad actual y analizarla con mayor claridad.',
          'El objetivo no es encontrar una solución perfecta, sino identificar un siguiente paso que esté dentro de nuestras posibilidades.'
        ],
        puntos: [
          'Identifica una dificultad que estés enfrentando actualmente.',
          'Separa los aspectos que puedes controlar de los que no puedes controlar.',
          'Escribe qué aprendizaje puedes extraer de la situación.',
          'Define una acción concreta que puedas realizar.',
          'Revisa posteriormente qué ocurrió y qué necesitas ajustar.'
        ],
        cierre:
          'La superación comienza cuando transformamos la experiencia en aprendizaje y el aprendizaje en una acción consciente.'
      }
    ];

    this.reflexiones = [
      {
        titulo: 'Una dificultad',
        pregunta:
          '¿Qué situación difícil has enfrentado recientemente y qué aprendiste de ella?'
      },
      {
        titulo: 'Lo que puedo controlar',
        pregunta:
          'Ante una dificultad actual, ¿qué aspectos sí dependen de tus decisiones y acciones?'
      },
      {
        titulo: 'Mi siguiente paso',
        pregunta:
          '¿Qué acción concreta puedes realizar para avanzar frente a una dificultad?'
      }
    ];

    this.preguntas = [
      {
        texto: '¿Qué describe mejor la resiliencia?',
        opciones: [
          'Evitar todas las dificultades de la vida',
          'Afrontar dificultades, adaptarse y continuar avanzando',
          'Nunca experimentar emociones negativas',
          'Controlar todas las circunstancias'
        ],
        correcta: 1,
        explicacion:
          'La resiliencia implica afrontar las dificultades, adaptarse a las circunstancias y continuar avanzando.'
      },
      {
        texto: '¿Qué podemos hacer cuando una situación está fuera de nuestro control?',
        opciones: [
          'Concentrarnos únicamente en lo que no podemos cambiar',
          'Esperar que otra persona resuelva la situación',
          'Dirigir nuestra atención hacia las decisiones y acciones que sí podemos realizar',
          'Evitar analizar lo ocurrido'
        ],
        correcta: 2,
        explicacion:
          'Aunque no podamos controlar todas las circunstancias, podemos trabajar sobre nuestras decisiones, acciones y respuestas.'
      },
      {
        texto: '¿Cómo puede una dificultad convertirse en una experiencia de aprendizaje?',
        opciones: [
          'Ignorando lo ocurrido',
          'Culpando siempre a otras personas',
          'Analizando la experiencia, identificando aprendizajes y ajustando nuestras acciones',
          'Evitando enfrentar situaciones similares'
        ],
        correcta: 2,
        explicacion:
          'Analizar lo ocurrido permite identificar aprendizajes y utilizar esa información para tomar mejores decisiones en el futuro.'
      }
    ];
  }

    private cargarLeccionAprendizajeErrores(): void {
    this.titulo = 'Aprendizaje de los errores';

    this.subtitulo =
      'Transformar las experiencias y los errores en información para mejorar nuestras decisiones y acciones.';

    this.objetivo =
      'Comprender cómo analizar los errores de manera consciente, identificar aprendizajes y utilizar esa información para mejorar las decisiones y comportamientos futuros.';

    this.secciones = [
      {
        titulo: 'Los errores forman parte del aprendizaje',
        parrafos: [
          'Aprender implica experimentar, tomar decisiones, recibir resultados y ajustar nuestras acciones. En ese proceso pueden aparecer errores.',
          'Un error no define por completo a una persona. Puede convertirse en una fuente de información cuando existe disposición para analizar lo ocurrido y aprender de ello.',
          'Evitar cualquier error no siempre es posible. Lo importante es desarrollar la capacidad de responder de manera consciente cuando ocurre.'
        ],
        destacado:
          'Un error puede convertirse en información cuando estamos dispuestos a observarlo, comprenderlo y aprender de él.'
      },
      {
        titulo: 'Diferenciar error, resultado y aprendizaje',
        parrafos: [
          'Es importante distinguir entre la acción realizada, el resultado obtenido y la interpretación que hacemos de esa experiencia.',
          'Un resultado diferente al esperado no significa automáticamente que todo el proceso haya sido inútil. Puede mostrar qué funcionó, qué no funcionó y qué necesita ser revisado.'
        ],
        conceptos: [
          {
            nombre: 'Error',
            significado: 'Una acción, decisión o comportamiento que produce un resultado diferente al esperado o que puede mejorarse.',
            ejemplo: 'Utilizar una estrategia que no produce el resultado previsto.'
          },
          {
            nombre: 'Resultado',
            significado: 'La consecuencia obtenida después de una acción o decisión.',
            ejemplo: 'Una meta que no se alcanza dentro del plazo establecido.'
          },
          {
            nombre: 'Aprendizaje',
            significado: 'La comprensión obtenida a partir de una experiencia que puede utilizarse posteriormente.',
            ejemplo: 'Descubrir qué aspecto de una estrategia debe modificarse.'
          }
        ],
        cierre:
          'Analizar una experiencia permite pasar de simplemente vivirla a obtener información útil de ella.'
      },
      {
        titulo: 'Evitar la culpa como única respuesta',
        parrafos: [
          'Cuando ocurre un error, una reacción frecuente puede ser concentrarse únicamente en la culpa o en el resultado negativo.',
          'Reconocer la responsabilidad es importante, pero también lo es identificar qué puede hacerse diferente en el futuro.',
          'La responsabilidad permite aprender cuando se acompaña de análisis y disposición para corregir.'
        ],
        puntos: [
          'Reconocer lo ocurrido sin ocultarlo.',
          'Identificar qué decisiones estuvieron bajo nuestro control.',
          'Comprender las posibles causas.',
          'Aceptar las consecuencias cuando corresponda.',
          'Definir qué podemos hacer diferente.'
        ],
        cierre:
          'Asumir responsabilidad no significa quedarse atrapado en el error; significa utilizarlo para mejorar.'
      },
      {
        titulo: 'Cómo analizar un error',
        parrafos: [
          'Un análisis sencillo puede ayudar a convertir una experiencia negativa en una oportunidad de aprendizaje.',
          'La intención no es justificar lo ocurrido, sino comprenderlo suficientemente para tomar mejores decisiones posteriormente.'
        ],
        puntos: [
          '¿Qué ocurrió exactamente?',
          '¿Qué decisión o acción produjo el resultado?',
          '¿Qué factores estaban bajo mi control?',
          '¿Qué información no tuve en ese momento?',
          '¿Qué haría diferente si enfrentara nuevamente una situación similar?',
          '¿Qué acción puedo realizar ahora para corregir o mejorar?'
        ],
        cierre:
          'Las preguntas correctas pueden convertir una experiencia difícil en una fuente de claridad.'
      },
      {
        titulo: 'Convertir el aprendizaje en mejora',
        parrafos: [
          'Identificar un aprendizaje es solamente una parte del proceso. El aprendizaje adquiere valor cuando modifica nuestras decisiones o acciones.',
          'Si una experiencia muestra que una estrategia necesita cambiar, el siguiente paso consiste en aplicar ese conocimiento.'
        ],
        puntos: [
          'Registrar el aprendizaje.',
          'Modificar la estrategia cuando sea necesario.',
          'Probar nuevamente con el ajuste realizado.',
          'Observar el nuevo resultado.',
          'Continuar aprendiendo del proceso.'
        ],
        destacado:
          'Aprender de un error significa permitir que la experiencia influya en nuestras próximas decisiones.'
      },
      {
        titulo: 'Una práctica para esta semana',
        parrafos: [
          'Elige una experiencia reciente en la que el resultado no haya sido el esperado.',
          'Analízala sin utilizarla para descalificarte. Busca información concreta que pueda ayudarte a mejorar.',
          'Después identifica una acción que puedas aplicar durante los próximos siete días.'
        ],
        cierre:
          'La superación se construye cuando convertimos la experiencia en conocimiento y el conocimiento en una nueva acción.'
      }
    ];

    this.reflexiones = [
      {
        titulo: 'Un error reciente',
        pregunta:
          '¿Qué experiencia reciente no produjo el resultado que esperabas?'
      },
      {
        titulo: 'Mi aprendizaje',
        pregunta:
          '¿Qué información útil puedes obtener de esa experiencia?'
      },
      {
        titulo: 'Mi próxima acción',
        pregunta:
          '¿Qué harías diferente si volvieras a enfrentar una situación similar?'
      }
    ];

    this.preguntas = [
      {
        texto: '¿Qué puede representar un error dentro del proceso de aprendizaje?',
        opciones: [
          'Una definición permanente de nuestra identidad',
          'Una fuente de información para mejorar',
          'Una razón para evitar cualquier nueva experiencia',
          'Una prueba de que nunca podemos aprender'
        ],
        correcta: 1,
        explicacion:
          'Un error puede proporcionar información útil cuando analizamos lo ocurrido y buscamos mejorar.'
      },
      {
        texto: '¿Qué significa asumir responsabilidad ante un error?',
        opciones: [
          'Culpar siempre a otras personas',
          'Ignorar las consecuencias',
          'Reconocer lo ocurrido e identificar qué podemos corregir',
          'Pensar que nunca podremos mejorar'
        ],
        correcta: 2,
        explicacion:
          'La responsabilidad implica reconocer lo ocurrido, analizar nuestras decisiones y buscar formas de corregir o mejorar.'
      },
      {
        texto: '¿Cuándo el aprendizaje de un error se convierte en mejora?',
        opciones: [
          'Cuando simplemente recordamos lo ocurrido',
          'Cuando evitamos hablar del error',
          'Cuando utilizamos el aprendizaje para modificar nuestras próximas acciones',
          'Cuando culpamos a las circunstancias'
        ],
        correcta: 2,
        explicacion:
          'El aprendizaje produce mejora cuando influye en nuestras decisiones y acciones posteriores.'
      }
    ];
  }

    private cargarLeccionGestionDesafios(): void {
    this.titulo = 'Gestión de desafíos';

    this.subtitulo =
      'Aprender a enfrentar situaciones difíciles con claridad, organización y capacidad de adaptación.';

    this.objetivo =
      'Comprender cómo analizar los desafíos, establecer prioridades y desarrollar respuestas conscientes que permitan avanzar ante situaciones complejas.';

    this.secciones = [
      {
        titulo: 'Los desafíos forman parte del camino',
        parrafos: [
          'En cualquier proceso de crecimiento pueden aparecer situaciones que exigen esfuerzo adicional, adaptación y toma de decisiones.',
          'Un desafío puede surgir en el ámbito personal, educativo, profesional o en cualquier proyecto que implique alcanzar un objetivo.',
          'Gestionar un desafío no significa eliminar todas las dificultades, sino aprender a responder ante ellas de una manera organizada y consciente.'
        ],
        destacado:
          'Un desafío puede exigir más esfuerzo, pero también puede revelar capacidades que todavía necesitamos desarrollar.'
      },
      {
        titulo: 'Comprender el desafío',
        parrafos: [
          'Antes de actuar ante una situación difícil, conviene comprender qué está ocurriendo realmente.',
          'Cuando enfrentamos un problema sin analizarlo, podemos reaccionar impulsivamente o concentrarnos en aspectos secundarios.',
          'La claridad permite identificar cuál es el problema principal, qué factores lo están afectando y qué resultado queremos alcanzar.'
        ],
        puntos: [
          'Definir cuál es el desafío.',
          'Identificar sus principales causas o factores.',
          'Distinguir hechos de interpretaciones.',
          'Reconocer qué aspectos podemos controlar.',
          'Determinar qué resultado queremos construir.'
        ],
        cierre:
          'Comprender correctamente un desafío es el primer paso para responder de manera adecuada.'
      },
      {
        titulo: 'Priorizar antes de actuar',
        parrafos: [
          'No todos los aspectos de un desafío tienen la misma importancia ni requieren atención inmediata.',
          'Establecer prioridades permite utilizar mejor nuestro tiempo, energía y recursos.',
          'Una situación compleja puede resultar más manejable cuando se divide en partes y se identifica cuál debe atenderse primero.'
        ],
        puntos: [
          'Identificar lo urgente.',
          'Identificar lo importante.',
          'Separar lo que puede esperar.',
          'Definir el siguiente paso.',
          'Evitar intentar resolver todo al mismo tiempo.'
        ],
        cierre:
          'Priorizar permite convertir una situación compleja en una serie de acciones más claras.'
      },
      {
        titulo: 'Estrategias para afrontar desafíos',
        parrafos: [
          'Una estrategia es una forma organizada de actuar para acercarnos a un resultado determinado.',
          'Ante un desafío, puede ser necesario probar diferentes alternativas, buscar información o solicitar orientación.',
          'No todas las estrategias producen el resultado esperado. Por eso, observar y ajustar forma parte del proceso.'
        ],
        conceptos: [
          {
            nombre: 'Análisis',
            significado: 'Observar la situación para comprender sus elementos principales.',
            ejemplo: 'Identificar qué está provocando una dificultad antes de tomar una decisión.'
          },
          {
            nombre: 'Prioridad',
            significado: 'Determinar qué debe atenderse primero.',
            ejemplo: 'Resolver primero una tarea necesaria para poder continuar con las siguientes.'
          },
          {
            nombre: 'Estrategia',
            significado: 'Definir una forma organizada de actuar.',
            ejemplo: 'Dividir un desafío grande en acciones concretas y ordenadas.'
          },
          {
            nombre: 'Ajuste',
            significado: 'Modificar la estrategia cuando la información demuestra que es necesario.',
            ejemplo: 'Cambiar el método después de comprobar que no está produciendo avances.'
          }
        ],
        cierre:
          'Gestionar desafíos requiere observar, decidir, actuar y ajustar cuando sea necesario.'
      },
      {
        titulo: 'Mantener la dirección',
        parrafos: [
          'Un desafío puede generar frustración cuando los resultados no aparecen inmediatamente.',
          'Mantener una dirección no significa insistir de manera ciega en una única estrategia. Significa recordar el objetivo y estar dispuesto a modificar el camino cuando sea necesario.',
          'La disciplina y la claridad ayudan a sostener las acciones mientras se evalúan los resultados.'
        ],
        destacado:
          'Mantener la dirección no significa mantener siempre el mismo camino.'
      },
      {
        titulo: 'De la dificultad al siguiente paso',
        parrafos: [
          'Cuando una situación parece demasiado grande, puede ser útil concentrarse en la siguiente acción posible.',
          'No siempre necesitamos resolver todo inmediatamente. En ocasiones, avanzar consiste simplemente en identificar qué podemos hacer hoy.'
        ],
        puntos: [
          'Define el desafío que estás enfrentando.',
          'Escribe cuál sería un resultado deseable.',
          'Identifica qué puedes controlar.',
          'Determina la acción más importante que puedes realizar ahora.',
          'Revisa posteriormente el resultado y decide el siguiente paso.'
        ],
        cierre:
          'La superación también consiste en aprender a avanzar paso a paso frente a situaciones que inicialmente parecen difíciles.'
      }
    ];

    this.reflexiones = [
      {
        titulo: 'Mi desafío actual',
        pregunta:
          '¿Qué desafío estás enfrentando actualmente y por qué es importante para ti?'
      },
      {
        titulo: 'Mi prioridad',
        pregunta:
          '¿Cuál es el aspecto más importante de ese desafío que deberías atender primero?'
      },
      {
        titulo: 'Mi siguiente paso',
        pregunta:
          '¿Qué acción concreta puedes realizar para comenzar a gestionar mejor esa situación?'
      }
    ];

    this.preguntas = [
      {
        texto: '¿Qué significa gestionar un desafío?',
        opciones: [
          'Eliminar cualquier dificultad inmediatamente',
          'Responder de manera organizada y consciente ante una situación difícil',
          'Evitar tomar decisiones',
          'Esperar que el problema desaparezca'
        ],
        correcta: 1,
        explicacion:
          'Gestionar un desafío implica comprender la situación y desarrollar respuestas organizadas y conscientes.'
      },
      {
        texto: '¿Por qué es importante establecer prioridades?',
        opciones: [
          'Para intentar resolver todo al mismo tiempo',
          'Para evitar cualquier esfuerzo',
          'Para determinar qué debe atenderse primero',
          'Para eliminar la necesidad de planificar'
        ],
        correcta: 2,
        explicacion:
          'Priorizar permite concentrar los recursos disponibles en los aspectos más importantes.'
      },
      {
        texto: '¿Qué debemos hacer cuando una estrategia no produce el resultado esperado?',
        opciones: [
          'Continuar exactamente igual sin observar los resultados',
          'Abandonar siempre el objetivo',
          'Analizar la información y realizar los ajustes necesarios',
          'Evitar volver a intentarlo'
        ],
        correcta: 2,
        explicacion:
          'Observar los resultados permite determinar cuándo una estrategia necesita ser modificada.'
      }
    ];
  }

    private cargarLeccionDesarrolloPotencial(): void {
    this.titulo = 'Desarrollo del potencial';

    this.subtitulo =
      'Reconocer capacidades, desarrollar habilidades y convertir las posibilidades personales en acciones concretas.';

    this.objetivo =
      'Comprender qué significa desarrollar el potencial personal, identificar capacidades que pueden fortalecerse y establecer acciones concretas para continuar creciendo mediante el aprendizaje y la práctica.';

    this.secciones = [
      {
        titulo: 'El potencial no es un resultado terminado',
        parrafos: [
          'Cada persona posee capacidades, conocimientos, experiencias e intereses que pueden desarrollarse a lo largo del tiempo.',
          'El potencial no debe entenderse como una característica fija ni como una garantía de éxito. Representa posibilidades que pueden fortalecerse mediante aprendizaje, práctica, disciplina y experiencia.',
          'Reconocer el potencial personal permite identificar áreas en las que vale la pena invertir tiempo y esfuerzo.'
        ],
        destacado:
          'El potencial representa una posibilidad; el desarrollo comienza cuando esa posibilidad se convierte en aprendizaje y acción.'
      },
      {
        titulo: 'Reconocer nuestras capacidades',
        parrafos: [
          'Para desarrollar nuestro potencial primero necesitamos reconocer las capacidades que ya poseemos y aquellas que todavía necesitamos fortalecer.',
          'Las capacidades pueden encontrarse en diferentes áreas: conocimientos, habilidades prácticas, comunicación, creatividad, organización, liderazgo, aprendizaje y muchas otras.'
        ],
        puntos: [
          'Identificar conocimientos que ya posees.',
          'Reconocer habilidades que utilizas con facilidad.',
          'Observar actividades en las que puedes aportar valor.',
          'Identificar capacidades que deseas fortalecer.',
          'Reconocer experiencias que han contribuido a tu desarrollo.'
        ],
        cierre:
          'Conocer nuestras capacidades permite tomar decisiones más conscientes sobre aquello que queremos seguir desarrollando.'
      },
      {
        titulo: 'Potencial y aprendizaje',
        parrafos: [
          'Una capacidad puede desarrollarse mediante el aprendizaje. Esto requiere adquirir información, practicar, recibir retroalimentación y aplicar lo aprendido.',
          'Aprender no consiste únicamente en acumular información. También implica desarrollar la capacidad de utilizar ese conocimiento en situaciones reales.'
        ],
        conceptos: [
          {
            nombre: 'Conocimiento',
            significado: 'Información y comprensión adquirida mediante estudio, experiencia o investigación.',
            ejemplo: 'Comprender los principios básicos de una determinada disciplina.'
          },
          {
            nombre: 'Habilidad',
            significado: 'Capacidad desarrollada para realizar una actividad de manera efectiva.',
            ejemplo: 'Aplicar un conocimiento para resolver una tarea concreta.'
          },
          {
            nombre: 'Práctica',
            significado: 'Repetición consciente de una actividad para desarrollar mayor dominio.',
            ejemplo: 'Practicar regularmente una habilidad que deseas fortalecer.'
          },
          {
            nombre: 'Retroalimentación',
            significado: 'Información que permite identificar avances y aspectos que pueden mejorarse.',
            ejemplo: 'Revisar el resultado de un trabajo y detectar qué puede hacerse mejor.'
          }
        ],
        cierre:
          'El desarrollo del potencial requiere combinar conocimiento, práctica, experiencia y disposición para aprender.'
      },
      {
        titulo: 'Salir de la zona de comodidad',
        parrafos: [
          'Desarrollar una capacidad nueva suele implicar enfrentarse a situaciones que todavía no dominamos.',
          'Al principio es normal cometer errores, avanzar lentamente o necesitar orientación. Estas experiencias forman parte del proceso de aprendizaje.',
          'Salir de la comodidad no significa asumir riesgos innecesarios. Significa estar dispuesto a aprender y practicar cuando una capacidad nueva requiere esfuerzo.'
        ],
        puntos: [
          'Elegir una habilidad que quieras desarrollar.',
          'Comenzar con un nivel de dificultad adecuado.',
          'Aceptar que el aprendizaje requiere tiempo.',
          'Practicar de manera constante.',
          'Evaluar el progreso y ajustar la práctica.'
        ],
        cierre:
          'El desarrollo ocurre cuando combinamos desafío suficiente con aprendizaje y práctica sostenida.'
      },
      {
        titulo: 'Convertir el potencial en acción',
        parrafos: [
          'Una capacidad potencial solamente comienza a desarrollarse cuando se convierte en una práctica concreta.',
          'Por eso es importante pasar de la intención a una acción verificable.',
          'Un objetivo amplio puede dividirse en pequeñas acciones que permitan construir progreso con el tiempo.'
        ],
        puntos: [
          'Define una capacidad que deseas desarrollar.',
          'Determina qué conocimiento necesitas adquirir.',
          'Elige una forma concreta de practicar.',
          'Establece una frecuencia de práctica.',
          'Revisa periódicamente tu avance.'
        ],
        destacado:
          'El potencial se desarrolla mediante acciones repetidas, no únicamente mediante intención.'
      },
      {
        titulo: 'Una práctica para esta semana',
        parrafos: [
          'Elige una habilidad que consideres importante para tu desarrollo personal.',
          'Investiga qué necesitas aprender para comenzar a desarrollarla y establece una pequeña práctica que puedas realizar durante los próximos siete días.',
          'Al finalizar la semana, observa qué aprendiste, qué dificultad encontraste y qué deberías ajustar.'
        ],
        cierre:
          'La superación se construye cuando identificamos posibilidades y trabajamos conscientemente para convertirlas en capacidades.'
      }
    ];

    this.reflexiones = [
      {
        titulo: 'Mi potencial',
        pregunta:
          '¿Qué capacidad personal consideras que tiene mayor potencial de desarrollo en este momento?'
      },
      {
        titulo: 'Mi aprendizaje',
        pregunta:
          '¿Qué conocimiento necesitas adquirir para fortalecer esa capacidad?'
      },
      {
        titulo: 'Mi práctica',
        pregunta:
          '¿Qué acción concreta puedes realizar durante los próximos siete días para comenzar a desarrollarla?'
      }
    ];

    this.preguntas = [
      {
        texto: '¿Cómo debe entenderse el potencial personal?',
        opciones: [
          'Como una capacidad completamente terminada',
          'Como una posibilidad que puede desarrollarse mediante aprendizaje y práctica',
          'Como una garantía de obtener cualquier resultado',
          'Como algo que no puede cambiar'
        ],
        correcta: 1,
        explicacion:
          'El potencial representa posibilidades que pueden fortalecerse mediante aprendizaje, práctica, experiencia y disciplina.'
      },
      {
        texto: '¿Qué elementos contribuyen al desarrollo de una capacidad?',
        opciones: [
          'Únicamente la intención',
          'Evitar cualquier dificultad',
          'Conocimiento, práctica, experiencia y retroalimentación',
          'Esperar resultados sin practicar'
        ],
        correcta: 2,
        explicacion:
          'El desarrollo de capacidades requiere combinar conocimiento, práctica, experiencia y retroalimentación.'
      },
      {
        texto: '¿Qué convierte una intención de desarrollo en una acción concreta?',
        opciones: [
          'Pensar constantemente en la capacidad',
          'Definir qué desarrollar y establecer una práctica verificable',
          'Esperar a sentirse completamente preparado',
          'Compararse con otras personas'
        ],
        correcta: 1,
        explicacion:
          'Convertir la intención en una acción concreta permite comenzar un proceso real de desarrollo.'
      }
    ];
  }

    private cargarLeccionAdaptacionMejora(): void {
    this.titulo = 'Adaptación y mejora continua';

    this.subtitulo =
      'Aprender a ajustar nuestras acciones, aprovechar la experiencia y construir avances sostenidos a través del tiempo.';

    this.objetivo =
      'Comprender la importancia de la adaptación y la mejora continua como procesos permanentes de aprendizaje, evaluación y ajuste para avanzar de manera consciente.';

    this.secciones = [
      {
        titulo: 'Adaptarse es aprender a responder al cambio',
        parrafos: [
          'Las circunstancias pueden cambiar aunque nuestros objetivos permanezcan. Nuevas responsabilidades, información, recursos o dificultades pueden exigir que ajustemos nuestra manera de actuar.',
          'Adaptarse no significa abandonar nuestros principios o cambiar constantemente de dirección. Significa observar las nuevas circunstancias y determinar qué ajustes pueden ayudarnos a continuar avanzando.',
          'La adaptación requiere apertura para aprender y disposición para revisar aquello que ya no funciona.'
        ],
        destacado:
          'Adaptarse no significa perder la dirección; significa ajustar el camino cuando las circunstancias cambian.'
      },
      {
        titulo: 'La importancia de observar',
        parrafos: [
          'La mejora comienza cuando somos capaces de observar nuestros resultados con honestidad.',
          'Si no revisamos lo que hacemos, podemos repetir las mismas acciones sin saber si realmente están produciendo el resultado esperado.',
          'Observar permite identificar avances, dificultades, errores y oportunidades de mejora.'
        ],
        puntos: [
          '¿Qué resultado estamos obteniendo?',
          '¿Qué está funcionando?',
          '¿Qué no está funcionando como esperábamos?',
          '¿Qué información nueva tenemos?',
          '¿Qué podríamos hacer de manera diferente?'
        ],
        cierre:
          'Observar con atención proporciona información para tomar mejores decisiones.'
      },
      {
        titulo: 'El ciclo de mejora continua',
        parrafos: [
          'La mejora continua puede entenderse como un proceso en el que observamos, aprendemos, ajustamos y volvemos a actuar.',
          'No se trata de cambiar todo constantemente. Se trata de realizar ajustes conscientes a partir de la información obtenida.'
        ],
        conceptos: [
          {
            nombre: 'Observar',
            significado: 'Revisar lo que está ocurriendo y reconocer los resultados obtenidos.',
            ejemplo: 'Comprobar semanalmente el avance de una meta.'
          },
          {
            nombre: 'Analizar',
            significado: 'Buscar comprender por qué se obtuvo determinado resultado.',
            ejemplo: 'Identificar qué factores facilitaron o dificultaron el progreso.'
          },
          {
            nombre: 'Ajustar',
            significado: 'Modificar una acción o estrategia cuando existe una razón para hacerlo.',
            ejemplo: 'Cambiar la forma de organizar una tarea cuando el método actual no funciona.'
          },
          {
            nombre: 'Aplicar',
            significado: 'Poner en práctica el ajuste y observar nuevamente los resultados.',
            ejemplo: 'Utilizar el nuevo método durante una semana y revisar su efecto.'
          }
        ],
        cierre:
          'La mejora continua convierte la experiencia en información y la información en nuevas acciones.'
      },
      {
        titulo: 'Adaptación sin perder la dirección',
        parrafos: [
          'Una persona puede modificar sus estrategias sin abandonar aquello que considera importante.',
          'Los objetivos pueden mantenerse mientras cambian las acciones utilizadas para alcanzarlos.',
          'La claridad ayuda a distinguir entre un cambio necesario y una decisión impulsiva.'
        ],
        puntos: [
          'Mantener claros los principios importantes.',
          'Revisar si el objetivo sigue siendo relevante.',
          'Modificar las estrategias cuando sea necesario.',
          'Aprender de los resultados.',
          'Evitar cambiar solamente por frustración momentánea.'
        ],
        cierre:
          'La flexibilidad en las estrategias puede convivir con la firmeza en los principios.'
      },
      {
        titulo: 'La mejora no exige perfección',
        parrafos: [
          'La mejora continua no significa alcanzar resultados perfectos en todo momento.',
          'Significa buscar pequeños avances, aprender de las experiencias y realizar ajustes cuando exista información suficiente para hacerlo.',
          'El progreso puede ser gradual y aun así representar un desarrollo significativo.'
        ],
        destacado:
          'Mejorar no significa ser perfecto; significa aprender y avanzar con mayor conciencia.'
      },
      {
        titulo: 'Construir una práctica de mejora',
        parrafos: [
          'Puedes incorporar la mejora continua a diferentes áreas de tu vida mediante revisiones periódicas.',
          'Una revisión sencilla puede ayudarte a reconocer qué funcionó, qué necesitas cambiar y cuál será tu siguiente acción.'
        ],
        puntos: [
          'Elige una meta o actividad que quieras mejorar.',
          'Define qué resultado quieres observar.',
          'Realiza la actividad durante un período determinado.',
          'Revisa los resultados obtenidos.',
          'Identifica un ajuste concreto.',
          'Aplica el ajuste y vuelve a observar.'
        ],
        cierre:
          'La mejora continua se construye mediante pequeños ciclos de aprendizaje y acción sostenidos en el tiempo.'
      }
    ];

    this.reflexiones = [
      {
        titulo: 'Mi adaptación',
        pregunta:
          '¿Qué situación actual requiere que adaptes tu manera de actuar?'
      },
      {
        titulo: 'Mi mejora',
        pregunta:
          '¿Qué aspecto de una actividad o hábito podrías mejorar mediante un pequeño ajuste?'
      },
      {
        titulo: 'Mi siguiente ciclo',
        pregunta:
          '¿Qué resultado observarás y qué ajuste podrías realizar después de revisarlo?'
      }
    ];

    this.preguntas = [
      {
        texto: '¿Qué significa adaptarse ante un cambio?',
        opciones: [
          'Abandonar siempre los objetivos anteriores',
          'Cambiar constantemente sin analizar las circunstancias',
          'Ajustar nuestra manera de actuar según las nuevas circunstancias',
          'Evitar cualquier situación nueva'
        ],
        correcta: 2,
        explicacion:
          'Adaptarse significa observar las nuevas circunstancias y ajustar nuestra manera de actuar cuando sea necesario.'
      },
      {
        texto: '¿Cuál es una característica de la mejora continua?',
        opciones: [
          'Buscar la perfección inmediata',
          'Observar, aprender, ajustar y volver a actuar',
          'Cambiar todo constantemente',
          'Evitar revisar los resultados'
        ],
        correcta: 1,
        explicacion:
          'La mejora continua funciona mediante ciclos de observación, aprendizaje, ajuste y aplicación.'
      },
      {
        texto: '¿Es posible adaptar una estrategia sin abandonar un objetivo?',
        opciones: [
          'No, cambiar una estrategia siempre significa abandonar el objetivo',
          'Sí, podemos mantener el objetivo y modificar el camino para alcanzarlo',
          'Solo cuando no existen dificultades',
          'Únicamente cuando otra persona decide el cambio'
        ],
        correcta: 1,
        explicacion:
          'Un objetivo puede mantenerse mientras modificamos las estrategias utilizadas para alcanzarlo.'
      }
    ];
  }

  private cargarLeccionMentalidadEmprendedora(): void {
  this.titulo = 'Mentalidad emprendedora';

  this.subtitulo =
    'Desarrolla una forma consciente de identificar oportunidades, asumir responsabilidad y transformar ideas en acciones.';

  this.secciones = [
    {
      titulo: 'Comprender la mentalidad emprendedora',
      parrafos: [
        'La mentalidad emprendedora comienza con la disposición de observar la realidad, identificar necesidades y buscar formas responsables de generar valor.',
        'Emprender no significa únicamente crear una empresa. También implica desarrollar iniciativa, tomar decisiones conscientes y asumir responsabilidad sobre las acciones que realizamos.',
        'Una persona puede desarrollar mentalidad emprendedora dentro de un proyecto propio, una organización, una profesión o cualquier espacio donde busque aportar soluciones.'
      ],
      destacado:
        'Emprender comienza con una actitud de iniciativa, aprendizaje y responsabilidad.',
      cierre:
        'La mentalidad emprendedora no depende solamente de tener una idea. Depende de aprender a convertir las ideas en acciones con propósito.'
    },

    {
      titulo: 'De la idea a la iniciativa',
      parrafos: [
        'Muchas ideas aparecen diariamente, pero una idea por sí sola no constituye un proyecto. Para avanzar es necesario observar, analizar y decidir qué puede hacerse con ella.',
        'La iniciativa aparece cuando una persona deja de limitarse a imaginar una posibilidad y comienza a investigar, preguntar, probar y aprender.',
        'Este proceso no exige tener todas las respuestas desde el comienzo. Exige estar dispuesto a dar un primer paso y obtener información que permita mejorar la siguiente decisión.'
      ],
      puntos: [
        'Observar una necesidad o problema.',
        'Identificar una posible solución.',
        'Investigar antes de asumir.',
        'Dar un primer paso pequeño.',
        'Observar los resultados y aprender.'
      ]
    },

    {
      titulo: 'Responsabilidad y toma de decisiones',
      parrafos: [
        'Emprender implica tomar decisiones y asumir sus consecuencias. Esto requiere comprender que no todas las decisiones producirán el resultado esperado.',
        'La responsabilidad consiste en evaluar las opciones disponibles, actuar con información suficiente y aprender de los resultados.',
        'Una mentalidad emprendedora evita depender exclusivamente de las circunstancias externas. Busca identificar qué puede hacerse con los recursos, conocimientos y oportunidades disponibles.'
      ],
      conceptos: [
        {
          nombre: 'Iniciativa',
          significado:
            'Capacidad de comenzar una acción sin esperar permanentemente a que otra persona la indique.',
          ejemplo:
            'Investigar una necesidad y proponer una posible solución.'
        },
        {
          nombre: 'Responsabilidad',
          significado:
            'Disposición para asumir las decisiones tomadas y aprender de sus resultados.',
          ejemplo:
            'Revisar qué ocurrió después de una decisión y ajustar el siguiente paso.'
        },
        {
          nombre: 'Oportunidad',
          significado:
            'Posibilidad de generar valor cuando existe una necesidad, problema o situación que puede ser atendida.',
          ejemplo:
            'Detectar que un grupo de personas necesita una solución que actualmente no encuentra.'
        }
      ]
    },

    {
      titulo: 'Pensar en soluciones y generar valor',
      parrafos: [
        'Una oportunidad emprendedora suele aparecer cuando existe una necesidad, una dificultad o una situación que puede mejorar.',
        'Por eso, una mentalidad emprendedora aprende a observar desde la perspectiva de las personas: qué necesitan, qué dificultades enfrentan y qué alternativas podrían ayudarlas.',
        'Generar valor significa aportar una solución que resulte útil para alguien. La idea debe relacionarse con una necesidad real y no solamente con lo que nosotros queremos ofrecer.'
      ],
      puntos: [
        '¿Qué problema existe?',
        '¿A quién afecta?',
        '¿Qué necesita esa persona?',
        '¿Qué solución podría aportar?',
        '¿Cómo puedo comprobar si realmente es útil?'
      ],
      destacado:
        'Una buena idea puede convertirse en una oportunidad cuando responde de manera concreta a una necesidad.'
    },

    {
      titulo: 'Aprender antes de crecer',
      parrafos: [
        'El crecimiento de un proyecto requiere aprendizaje. Antes de intentar hacerlo grande, es importante comprender si la propuesta funciona, quién la necesita y qué debe mejorarse.',
        'Probar una idea en pequeña escala permite obtener información y reducir decisiones basadas únicamente en suposiciones.',
        'El aprendizaje obtenido de cada prueba puede utilizarse para ajustar la propuesta, mejorar la experiencia y tomar decisiones más conscientes.'
      ],
      cierre:
        'Crecer no consiste solamente en hacer más. También significa comprender mejor lo que se está construyendo.'
    },

    {
      titulo: 'De la mentalidad a la acción',
      parrafos: [
        'La mentalidad emprendedora adquiere verdadero sentido cuando se transforma en comportamiento.',
        'Observar, aprender, decidir, actuar y evaluar forman parte de un proceso continuo. No es necesario comenzar con un proyecto perfecto; es más importante comenzar con claridad sobre el siguiente paso.',
        'Durante esta semana puedes elegir una necesidad concreta de tu entorno, investigarla y escribir una posible solución. El objetivo no es crear inmediatamente un negocio, sino practicar la capacidad de observar oportunidades y convertirlas en acciones.'
      ],
      destacado:
        'Una idea se desarrolla cuando pasa de la imaginación a la observación, de la observación a la decisión y de la decisión a la acción.',
      cierre:
        'La mentalidad emprendedora se construye mediante práctica, aprendizaje, responsabilidad y acción consciente.'
    }
  ];

 this.reflexiones = [
  {
    titulo: 'Una oportunidad',
    pregunta:
      '¿Qué necesidad o problema de tu entorno has observado recientemente?'
  },
  {
    titulo: 'Una idea',
    pregunta:
      '¿Qué idea tienes actualmente que podrías convertir en una pequeña acción?'
  },
  {
    titulo: 'Mi primer paso',
    pregunta:
      '¿Qué primer paso concreto podrías realizar esta semana para comprobar una idea?'
  }
];

this.preguntas = [
  {
    texto:
      '¿Qué caracteriza principalmente a una mentalidad emprendedora?',
    opciones: [
      'Esperar a tener todas las condiciones perfectas.',
      'Identificar oportunidades, actuar y aprender de los resultados.',
      'Evitar cualquier decisión que pueda producir errores.',
      'Crear una empresa inmediatamente.'
    ],
    correcta: 1,
    explicacion:
      'Una mentalidad emprendedora implica identificar oportunidades, tomar iniciativa, actuar y aprender de los resultados.'
  },
  {
    texto:
      '¿Qué significa generar valor desde una perspectiva emprendedora?',
    opciones: [
      'Ofrecer algo sin analizar si alguien lo necesita.',
      'Buscar únicamente obtener reconocimiento.',
      'Aportar una solución útil frente a una necesidad o problema.',
      'Copiar exactamente lo que hacen otros proyectos.'
    ],
    correcta: 2,
    explicacion:
      'Generar valor significa aportar una solución que responda de manera útil a una necesidad o problema real.'
  },
  {
    texto:
      '¿Por qué es útil probar una idea antes de intentar hacerla crecer?',
    opciones: [
      'Porque permite obtener información y aprender antes de tomar decisiones mayores.',
      'Porque garantiza que el proyecto tendrá éxito.',
      'Porque elimina completamente los riesgos.',
      'Porque evita tener que escuchar a las personas.'
    ],
    correcta: 0,
    explicacion:
      'Probar una idea permite obtener información, comprobar supuestos y aprender antes de tomar decisiones de mayor alcance.'
  }
];

this.respuestas = [];
this.evaluacionEnviada = false;
}

private cargarLeccionModelosNegocio(): void {
  this.titulo = 'Modelos de Negocio';
  this.subtitulo = 'Comprender cómo se crea, entrega y sostiene el valor';
  this.objetivo =
    'Identificar los elementos de un modelo de negocio y comprender cómo se relacionan para desarrollar proyectos sostenibles.';

  this.secciones = [
    {
      titulo: '1. ¿Qué es un modelo de negocio?',
      parrafos: [
        'Un modelo de negocio describe cómo una iniciativa crea valor para las personas, cómo lo entrega y de qué manera obtiene los recursos necesarios para mantenerse.',
        'No se limita a vender un producto. También contempla a quién se sirve, qué necesidad se atiende, qué recursos se utilizan y cómo funciona la operación.'
      ],
      destacado:
        'Un negocio no se define solamente por lo que vende, sino por la forma en que crea y entrega valor.',
      conceptos: [
        {
          nombre: 'Propuesta de valor',
          significado: 'Beneficio principal que una iniciativa ofrece a sus clientes.',
          ejemplo: 'Una plataforma que facilita el aprendizaje de nuevas habilidades.'
        },
        {
          nombre: 'Segmento de clientes',
          significado: 'Grupo de personas al que se dirige una solución.',
          ejemplo: 'Emprendedores que necesitan aprender a promocionar sus servicios.'
        },
        {
          nombre: 'Fuentes de ingresos',
          significado: 'Formas mediante las cuales el negocio recibe dinero.',
          ejemplo: 'Venta de productos, suscripciones o prestación de servicios.'
        }
      ]
    },
    {
      titulo: '2. Elementos fundamentales',
      parrafos: [
        'Para comprender un modelo de negocio es necesario observar sus componentes como partes de una misma estructura.',
        'Los clientes, la propuesta de valor, los canales, las relaciones, los recursos, las actividades, los aliados, los costos y los ingresos deben guardar coherencia entre sí.'
      ],
      puntos: [
        'Clientes: personas a las que se busca atender.',
        'Canales: medios para comunicar, entregar y ofrecer la solución.',
        'Recursos y actividades: elementos y tareas necesarios para operar.',
        'Aliados: personas u organizaciones que contribuyen al funcionamiento.',
        'Costos e ingresos: recursos que se utilizan y formas de sostenimiento.'
      ],
      cierre:
        'Cuando los elementos están conectados, el negocio puede funcionar con mayor claridad y organización.'
    },
    {
      titulo: '3. Tipos de modelos de negocio',
      parrafos: [
        'Existen diferentes formas de organizar una actividad económica. La elección depende de las necesidades del cliente, los recursos disponibles y la naturaleza de la solución.',
        'Un mismo emprendimiento puede combinar distintos modelos, siempre que exista coherencia en su funcionamiento.'
      ],
      puntos: [
        'Venta directa: comercialización de productos o servicios al cliente.',
        'Suscripción: acceso continuo a un producto o servicio mediante pagos periódicos.',
        'Intermediación: conexión entre personas que ofrecen y personas que necesitan algo.',
        'Freemium: acceso básico gratuito con funciones o servicios adicionales de pago.',
        'Licenciamiento: autorización para utilizar una marca, tecnología o contenido bajo determinadas condiciones.'
      ]
    },
    {
      titulo: '4. Validar antes de crecer',
      parrafos: [
        'Una idea no se convierte automáticamente en un negocio viable. Es necesario comprobar si existe una necesidad real y si las personas están dispuestas a utilizar o pagar por la solución.',
        'La validación puede comenzar con conversaciones, pruebas pequeñas, prototipos y observación de resultados.',
        'Aprender de la experiencia permite ajustar el modelo antes de invertir recursos importantes.'
      ],
      destacado:
        'Primero comprende y valida; después organiza y escala.'
    }
  ];

  this.reflexiones = [
    {
      titulo: 'Pensamiento estratégico',
      pregunta:
        '¿Qué necesidad concreta podría atender un negocio que te gustaría desarrollar y qué modelo permitiría hacerlo de manera sostenible?'
    }
  ];

  this.preguntas = [
    {
      texto: '¿Qué describe principalmente un modelo de negocio?',
      opciones: [
        'Únicamente el producto que se vende.',
        'La forma en que se crea, entrega y sostiene el valor.',
        'Solamente las estrategias de publicidad.',
        'El nombre y la imagen de una empresa.'
      ],
      correcta: 1,
      explicacion:
        'Un modelo de negocio explica cómo funciona una iniciativa para crear y entregar valor y sostener sus operaciones.'
    },
    {
      texto: '¿Qué representa una propuesta de valor?',
      opciones: [
        'El beneficio que se ofrece para atender una necesidad.',
        'La lista de gastos mensuales.',
        'El número de trabajadores.',
        'El nombre comercial del negocio.'
      ],
      correcta: 0,
      explicacion:
        'La propuesta de valor expresa el beneficio que una solución ofrece a sus clientes.'
    },
    {
      texto: '¿Para qué sirve validar una idea de negocio?',
      opciones: [
        'Para evitar hablar con los clientes.',
        'Para garantizar ganancias inmediatas.',
        'Para comprobar necesidades y obtener información antes de crecer.',
        'Para eliminar todos los costos.'
      ],
      correcta: 2,
      explicacion:
        'La validación permite aprender de clientes potenciales y reducir decisiones basadas únicamente en suposiciones.'
    }
  ];

  this.respuestas = [];
  this.evaluacionEnviada = false;
}

private cargarLeccionPropuestaValor(): void {
  this.titulo = 'Propuesta de Valor';
  this.subtitulo = 'Diseñar soluciones que respondan a necesidades reales';
  this.objetivo =
    'Aprender a identificar necesidades, definir beneficios y comunicar con claridad el valor de un producto o servicio.';

  this.secciones = [
    {
      titulo: '1. El valor comienza con una necesidad',
      parrafos: [
        'Una propuesta de valor parte de comprender a las personas. Antes de diseñar una solución, es necesario conocer sus problemas, expectativas, dificultades y objetivos.',
        'Las ideas que parecen interesantes para quien emprende no siempre representan una prioridad para el cliente.',
        'Escuchar, observar y hacer preguntas permite reconocer oportunidades reales.'
      ],
      destacado:
        'No se trata de ofrecer lo que uno quiere vender, sino de comprender qué necesita resolver la persona.'
    },
    {
      titulo: '2. Componentes de una propuesta de valor',
      parrafos: [
        'Una propuesta de valor clara identifica a quién se dirige, qué necesidad atiende, qué beneficio ofrece y por qué la solución puede resultar relevante.',
        'La diferenciación puede surgir de la calidad, la facilidad de uso, la atención, la rapidez, la accesibilidad o la experiencia.'
      ],
      conceptos: [
        {
          nombre: 'Necesidad',
          significado: 'Situación o problema que una persona busca resolver.',
          ejemplo: 'Un pequeño negocio necesita organizar sus pedidos.'
        },
        {
          nombre: 'Beneficio',
          significado: 'Resultado positivo que la solución busca proporcionar.',
          ejemplo: 'Reducir errores y ahorrar tiempo en la gestión de pedidos.'
        },
        {
          nombre: 'Diferenciación',
          significado: 'Característica que distingue una solución de otras alternativas.',
          ejemplo: 'Ofrecer acompañamiento personalizado además de una herramienta digital.'
        }
      ]
    },
    {
      titulo: '3. Comunicar el valor con claridad',
      parrafos: [
        'Una propuesta de valor debe poder explicarse de manera sencilla. El cliente necesita comprender qué se ofrece, para quién es y qué beneficio puede esperar.',
        'Es importante evitar afirmaciones exageradas o promesas que no puedan demostrarse.',
        'La comunicación debe corresponder con la experiencia real del producto o servicio.'
      ],
      puntos: [
        'Identificar al cliente específico.',
        'Explicar el problema que se atiende.',
        'Describir el beneficio principal.',
        'Mostrar qué hace diferente a la solución.',
        'Respaldar las afirmaciones con información verificable.'
      ],
      cierre:
        'La claridad genera comprensión; la coherencia entre lo que se comunica y lo que se entrega fortalece la confianza.'
    },
    {
      titulo: '4. Probar y mejorar la propuesta',
      parrafos: [
        'Las propuestas de valor se desarrollan mediante aprendizaje continuo. Las conversaciones con clientes, las pruebas y la observación ayudan a descubrir qué aspectos funcionan y cuáles necesitan ajustes.',
        'Una respuesta negativa también aporta información. Puede indicar que el problema no es prioritario, que el beneficio no está claro o que la solución necesita cambios.'
      ],
      destacado:
        'Una propuesta de valor se construye con comprensión, pruebas y mejora continua.'
    }
  ];

  this.reflexiones = [
    {
      titulo: 'Comprender para aportar',
      pregunta:
        '¿Qué problema de tu entorno podrías resolver y qué beneficio concreto ofrecerías a las personas que lo experimentan?'
    }
  ];

  this.preguntas = [
    {
      texto: '¿Cuál es el punto de partida de una propuesta de valor?',
      opciones: [
        'La preferencia personal de quien emprende.',
        'La comprensión de una necesidad del cliente.',
        'La elección de un logotipo.',
        'La cantidad de publicaciones en redes sociales.'
      ],
      correcta: 1,
      explicacion:
        'Una propuesta de valor debe partir de necesidades y problemas que sean relevantes para las personas.'
    },
    {
      texto: '¿Qué caracteriza una comunicación de valor clara?',
      opciones: [
        'Utilizar términos complicados.',
        'Prometer resultados extraordinarios.',
        'Explicar a quién se ayuda y qué beneficio se ofrece.',
        'Evitar mencionar las características de la solución.'
      ],
      correcta: 2,
      explicacion:
        'La claridad permite que el cliente comprenda la solución, su público y sus beneficios.'
    },
    {
      texto: '¿Qué permite probar una propuesta de valor?',
      opciones: [
        'Obtener información para mejorar la solución.',
        'Garantizar que no habrá competencia.',
        'Eliminar la necesidad de escuchar al cliente.',
        'Asegurar ingresos sin importar el mercado.'
      ],
      correcta: 0,
      explicacion:
        'Las pruebas permiten aprender de la respuesta de los clientes y realizar ajustes fundamentados.'
    }
  ];

  this.respuestas = [];
  this.evaluacionEnviada = false;
}

private cargarLeccionVentasServicio(): void {
  this.titulo = 'Ventas y Servicio';
  this.subtitulo = 'Construir relaciones mediante confianza y atención';
  this.objetivo =
    'Comprender el proceso de venta, desarrollar una comunicación orientada al cliente y reconocer el servicio como parte de la experiencia.';

  this.secciones = [
    {
      titulo: '1. La venta como proceso de comprensión',
      parrafos: [
        'Vender consiste en ayudar a una persona a evaluar si un producto o servicio responde a una necesidad. No se trata solamente de convencer, sino de comprender, informar y facilitar una decisión.',
        'Una venta responsable requiere conocer lo que se ofrece, identificar las necesidades del cliente y explicar con honestidad las características, condiciones y limitaciones.'
      ],
      destacado:
        'Una relación comercial sostenible se construye sobre la confianza, no sobre la presión.'
    },
    {
      titulo: '2. Etapas de una venta',
      parrafos: [
        'El proceso comercial puede organizarse en varias etapas. Cada una ayuda a avanzar desde el primer contacto hasta la atención posterior.'
      ],
      puntos: [
        'Preparación: conocer el producto, el público y el propósito del contacto.',
        'Acercamiento: iniciar una conversación respetuosa.',
        'Identificación de necesidades: escuchar y formular preguntas pertinentes.',
        'Presentación: explicar cómo la solución puede responder a lo identificado.',
        'Resolución de dudas: ofrecer información clara y atender objeciones.',
        'Decisión: respetar la elección del cliente.',
        'Seguimiento: mantener una atención adecuada después de la compra.'
      ]
    },
    {
      titulo: '3. Servicio y experiencia del cliente',
      parrafos: [
        'El servicio incluye todas las interacciones que una persona tiene con un negocio antes, durante y después de adquirir una solución.',
        'La puntualidad, el respeto, la comunicación, el cumplimiento de acuerdos y la capacidad de resolver inconvenientes influyen en la experiencia.',
        'Un buen servicio no significa aceptar cualquier exigencia. También implica establecer límites claros y actuar con responsabilidad.'
      ],
      conceptos: [
        {
          nombre: 'Escucha activa',
          significado: 'Prestar atención para comprender lo que la otra persona comunica.',
          ejemplo: 'Permitir que el cliente explique su dificultad antes de ofrecer una respuesta.'
        },
        {
          nombre: 'Seguimiento',
          significado: 'Dar continuidad a una relación o solicitud después del contacto inicial.',
          ejemplo: 'Consultar si el producto entregado funciona según lo esperado.'
        },
        {
          nombre: 'Fidelización',
          significado: 'Fortalecer una relación para favorecer la continuidad basada en experiencias positivas.',
          ejemplo: 'Ofrecer atención consistente y resolver oportunamente los problemas.'
        }
      ]
    },
    {
      titulo: '4. Mejorar a partir de la experiencia',
      parrafos: [
        'Las preguntas, reclamos y comentarios de los clientes pueden revelar oportunidades para mejorar productos, procesos y comunicación.',
        'Registrar situaciones recurrentes permite identificar causas y diseñar soluciones. La mejora del servicio requiere observar resultados y mantener una actitud de aprendizaje.'
      ],
      cierre:
        'Cada interacción es una oportunidad para demostrar coherencia entre lo que el negocio promete y lo que realmente entrega.'
    }
  ];

  this.reflexiones = [
    {
      titulo: 'Servicio con responsabilidad',
      pregunta:
        '¿Qué experiencia positiva recuerdas como cliente y qué podrías aplicar de ella en un proyecto propio?'
    }
  ];

  this.preguntas = [
    {
      texto: '¿Cuál es el propósito de una venta responsable?',
      opciones: [
        'Presionar al cliente para que compre.',
        'Ayudar al cliente a evaluar una solución con información clara.',
        'Ocultar las limitaciones del producto.',
        'Cerrar la conversación lo más rápido posible.'
      ],
      correcta: 1,
      explicacion:
        'Una venta responsable facilita una decisión informada y respeta las necesidades y la autonomía del cliente.'
    },
    {
      texto: '¿Qué práctica corresponde a la escucha activa?',
      opciones: [
        'Interrumpir para hablar de las características del producto.',
        'Suponer lo que el cliente necesita.',
        'Prestar atención y hacer preguntas para comprender la situación.',
        'Evitar las preguntas difíciles.'
      ],
      correcta: 2,
      explicacion:
        'La escucha activa busca comprender antes de responder o presentar una solución.'
    },
    {
      texto: '¿Por qué es importante el seguimiento después de una venta?',
      opciones: [
        'Porque permite atender dudas y conocer la experiencia del cliente.',
        'Porque garantiza que todos volverán a comprar.',
        'Porque reemplaza la calidad del producto.',
        'Porque evita tener que resolver problemas.'
      ],
      correcta: 0,
      explicacion:
        'El seguimiento ayuda a atender necesidades posteriores y a detectar oportunidades de mejora.'
    }
  ];

  this.respuestas = [];
  this.evaluacionEnviada = false;
}

private cargarLeccionCreacionProyectos(): void {
  this.titulo = 'Creación y Desarrollo de Proyectos';
  this.subtitulo = 'Transformar ideas en acciones organizadas';
  this.objetivo =
    'Conocer las etapas fundamentales para planificar, ejecutar, evaluar y mejorar un proyecto de manera organizada.';

  this.secciones = [
    {
      titulo: '1. De una idea a un proyecto',
      parrafos: [
        'Una idea expresa una posibilidad. Un proyecto organiza acciones, recursos y tiempos para alcanzar un resultado definido.',
        'Para convertir una idea en proyecto es necesario comprender el problema, establecer un propósito y determinar qué resultado se busca conseguir.',
        'La planificación no elimina la incertidumbre, pero ayuda a tomar decisiones con mayor claridad.'
      ],
      destacado:
        'Una idea comienza a convertirse en proyecto cuando se transforma en objetivos y acciones concretas.'
    },
    {
      titulo: '2. Planificación del proyecto',
      parrafos: [
        'Planificar significa definir el rumbo y organizar los elementos necesarios para avanzar. Un plan útil debe ser comprensible, realista y adaptable.',
        'Los objetivos permiten orientar el trabajo. Las actividades describen qué se hará, los responsables indican quién participará y los plazos ayudan a organizar el tiempo.'
      ],
      puntos: [
        'Definir el problema y el propósito.',
        'Establecer objetivos específicos.',
        'Identificar actividades y responsables.',
        'Determinar recursos y presupuesto.',
        'Organizar un cronograma.',
        'Reconocer riesgos y posibles respuestas.',
        'Definir indicadores para evaluar el avance.'
      ]
    },
    {
      titulo: '3. Ejecución y trabajo colaborativo',
      parrafos: [
        'La ejecución consiste en llevar a la práctica lo planificado. Durante esta etapa es importante coordinar tareas, comunicar avances y utilizar los recursos de manera responsable.',
        'Los proyectos pueden requerir ajustes cuando aparecen dificultades o nueva información. Adaptar el plan no significa perder el propósito, sino encontrar formas viables de continuar.',
        'La colaboración permite integrar capacidades, distribuir responsabilidades y aprender de diferentes perspectivas.'
      ],
      conceptos: [
        {
          nombre: 'Cronograma',
          significado: 'Organización temporal de actividades y plazos.',
          ejemplo: 'Distribuir las tareas de un lanzamiento durante cuatro semanas.'
        },
        {
          nombre: 'Indicador',
          significado: 'Dato o referencia que permite observar el avance o resultado.',
          ejemplo: 'Porcentaje de actividades completadas según lo planificado.'
        },
        {
          nombre: 'Riesgo',
          significado: 'Situación incierta que puede afectar el desarrollo del proyecto.',
          ejemplo: 'Un retraso en la entrega de materiales necesarios.'
        }
      ]
    },
    {
      titulo: '4. Evaluación y mejora',
      parrafos: [
        'Evaluar un proyecto implica comparar los resultados obtenidos con los objetivos establecidos y analizar qué factores influyeron en el proceso.',
        'La evaluación debe considerar tanto los logros como las dificultades. Reconocer errores permite aprender y tomar mejores decisiones en futuras iniciativas.',
        'Un proyecto puede concluir, continuar o transformarse según sus resultados, los recursos disponibles y las necesidades que busca atender.'
      ],
      cierre:
        'La disciplina permite avanzar; la evaluación aporta aprendizaje; la mejora continua fortalece los proyectos.'
    }
  ];

  this.reflexiones = [
    {
      titulo: 'De la intención a la acción',
      pregunta:
        '¿Qué proyecto te gustaría desarrollar y cuál sería la primera acción concreta que podrías realizar para comenzar?'
    }
  ];

  this.preguntas = [
    {
      texto: '¿Qué convierte una idea en un proyecto?',
      opciones: [
        'Hablar de ella con frecuencia.',
        'Organizar objetivos, acciones y recursos para lograr un resultado.',
        'Esperar a tener todos los recursos disponibles.',
        'Crear primero una imagen publicitaria.'
      ],
      correcta: 1,
      explicacion:
        'Un proyecto estructura una idea mediante objetivos, actividades, recursos y un resultado esperado.'
    },
    {
      texto: '¿Para qué sirve un cronograma?',
      opciones: [
        'Para organizar actividades y plazos.',
        'Para garantizar que no existan dificultades.',
        'Para reemplazar los objetivos.',
        'Para calcular únicamente las ganancias.'
      ],
      correcta: 0,
      explicacion:
        'El cronograma permite organizar el tiempo y visualizar cuándo deben realizarse las actividades.'
    },
    {
      texto: '¿Qué debe hacerse al evaluar un proyecto?',
      opciones: [
        'Considerar solamente los resultados positivos.',
        'Evitar revisar los errores.',
        'Comparar los resultados con los objetivos y aprender del proceso.',
        'Cambiar todos los objetivos al finalizar.'
      ],
      correcta: 2,
      explicacion:
        'La evaluación analiza los resultados y las dificultades para obtener aprendizajes y orientar mejoras.'
    }
  ];

  this.respuestas = [];
  this.evaluacionEnviada = false;
}

private cargarLeccionLiderazgoConsciente(): void {
  this.titulo = 'Liderazgo consciente';
  this.subtitulo = 'Comprender el liderazgo desde el autoconocimiento, los principios y la responsabilidad';
  this.objetivo =
    'Comprender el liderazgo como una práctica consciente que comienza con el autoconocimiento, se fortalece mediante principios y se expresa en las decisiones y acciones cotidianas.';

  this.secciones = [
    {
      titulo: '1. ¿Qué es el liderazgo consciente?',
      parrafos: [
        'El liderazgo consciente es la capacidad de orientar las propias acciones y contribuir al desarrollo de otras personas con atención, responsabilidad y propósito.',
        'Liderar no significa simplemente ocupar un cargo, dar instrucciones o tener autoridad. Implica reconocer el impacto de nuestras decisiones, comprender las circunstancias y actuar de manera coherente con nuestros principios.',
        'El liderazgo comienza con la capacidad de dirigirnos a nosotros mismos antes de pretender orientar a los demás.'
      ],
      destacado:
        'El liderazgo no comienza cuando otros te siguen; comienza cuando asumes la responsabilidad de tus propias acciones.'
    },
    {
      titulo: '2. El autoconocimiento como punto de partida',
      parrafos: [
        'Conocerse permite identificar fortalezas, reconocer limitaciones y comprender cómo reaccionamos ante diferentes situaciones.',
        'Una persona que desarrolla autoconocimiento puede observar sus comportamientos, reconocer sus errores y tomar decisiones con mayor claridad.'
      ],
      puntos: [
        'Reconocer fortalezas y aspectos por mejorar.',
        'Identificar hábitos que influyen en nuestras decisiones.',
        'Comprender nuestras reacciones ante la presión.',
        'Aceptar la retroalimentación.',
        'Establecer objetivos personales de mejora.'
      ]
    },
    {
      titulo: '3. Principios que orientan al líder',
      parrafos: [
        'El liderazgo necesita fundamentos que orienten las decisiones, especialmente cuando aparecen dificultades o intereses diferentes.',
        'Los principios adquieren significado cuando se convierten en comportamientos observables.'
      ],
      conceptos: [
        {
          nombre: 'Integridad',
          significado: 'Actuar de acuerdo con los valores que se expresan.',
          ejemplo: 'Cumplir un compromiso aunque nadie esté supervisando.'
        },
        {
          nombre: 'Responsabilidad',
          significado: 'Asumir las consecuencias de las propias decisiones y acciones.',
          ejemplo: 'Reconocer un error y participar en su solución.'
        },
        {
          nombre: 'Respeto',
          significado: 'Reconocer la dignidad y las perspectivas de otras personas.',
          ejemplo: 'Escuchar una opinión diferente sin descalificar a quien la expresa.'
        },
        {
          nombre: 'Coherencia',
          significado: 'Procurar que las acciones correspondan con las palabras.',
          ejemplo: 'Aplicar personalmente los principios que se espera que otros respeten.'
        },
        {
          nombre: 'Humildad',
          significado: 'Mantener disposición para aprender, escuchar y corregir.',
          ejemplo: 'Aceptar una observación útil aunque provenga de alguien con menos experiencia.'
        }
      ]
    },
    {
      titulo: '4. La toma de decisiones consciente',
      parrafos: [
        'Cada decisión puede afectar el rumbo personal, el trabajo en equipo y los resultados de un proyecto.',
        'Tomar decisiones de manera consciente requiere analizar la situación, considerar alternativas y evaluar sus posibles consecuencias.',
        'No todas las decisiones serán perfectas. La capacidad de revisar y corregir el rumbo también forma parte del liderazgo.'
      ],
      puntos: [
        'Definir claramente la situación.',
        'Reunir información relevante.',
        'Identificar las alternativas disponibles.',
        'Considerar las posibles consecuencias.',
        'Elegir una acción responsable.',
        'Evaluar los resultados y aprender.'
      ]
    },
    {
      titulo: '5. Liderar con propósito',
      parrafos: [
        'El propósito conecta las acciones cotidianas con una dirección significativa. Permite establecer prioridades y mantener el compromiso sin perder de vista a las personas involucradas.',
        'En JV Global, el liderazgo se relaciona con la formación, la colaboración y el crecimiento compartido.',
        'El propósito no consiste solamente en alcanzar objetivos individuales, sino también en contribuir de manera responsable al entorno.'
      ],
      destacado:
        'Un liderazgo con propósito busca avanzar sin perder de vista los principios ni el impacto de sus acciones.'
    }
  ];

  this.reflexiones = [
    {
      titulo: 'Liderazgo personal',
      pregunta:
        '¿Qué comportamiento personal necesitas mejorar para ejercer un liderazgo más consciente?'
    },
    {
      titulo: 'Coherencia',
      pregunta:
        '¿Tus decisiones actuales reflejan los principios que consideras importantes?'
    },
    {
      titulo: 'Acción',
      pregunta:
        '¿Qué acción concreta puedes realizar esta semana para fortalecer tu liderazgo?'
    }
  ];

  this.preguntas = [
    {
      texto: '¿Dónde comienza el liderazgo consciente?',
      opciones: [
        'En ocupar una posición de autoridad.',
        'En lograr que otras personas obedezcan.',
        'En asumir responsabilidad sobre las propias acciones.',
        'En tener más experiencia que los demás.'
      ],
      correcta: 2,
      explicacion:
        'El liderazgo consciente comienza con la responsabilidad personal y la capacidad de dirigir las propias acciones.'
    },
    {
      texto: '¿Qué permite el autoconocimiento?',
      opciones: [
        'Evitar cualquier error.',
        'Reconocer fortalezas, limitaciones y comportamientos.',
        'Controlar las decisiones de otras personas.',
        'Eliminar todas las dificultades.'
      ],
      correcta: 1,
      explicacion:
        'El autoconocimiento permite reconocer fortalezas, aspectos por mejorar y patrones de comportamiento.'
    },
    {
      texto: '¿Cuál de estos elementos forma parte de un liderazgo basado en principios?',
      opciones: [
        'Coherencia entre palabras y acciones.',
        'Evitar toda responsabilidad.',
        'Imponer siempre la propia opinión.',
        'Ocultar los errores.'
      ],
      correcta: 0,
      explicacion:
        'La coherencia implica procurar que las acciones correspondan con los principios y las palabras.'
    },
    {
      texto: '¿Qué es importante al tomar una decisión consciente?',
      opciones: [
        'Actuar siempre de manera inmediata.',
        'Ignorar las consecuencias.',
        'Analizar la situación y considerar alternativas.',
        'Esperar que otra persona decida.'
      ],
      correcta: 2,
      explicacion:
        'Una decisión consciente requiere comprender la situación, analizar alternativas y considerar consecuencias.'
    },
    {
      texto: '¿Qué significa liderar con propósito?',
      opciones: [
        'Buscar únicamente beneficios personales.',
        'Conectar las acciones con una dirección significativa y responsable.',
        'Evitar cualquier cambio.',
        'Concentrarse solamente en alcanzar una posición.'
      ],
      correcta: 1,
      explicacion:
        'Liderar con propósito significa orientar las acciones hacia una dirección significativa, considerando también el impacto en otras personas.'
    }
  ];

  this.respuestas = [];
  this.evaluacionEnviada = false;
}


private cargarLeccionComunicacionEfectiva(): void {
  this.titulo = 'Comunicación efectiva';

  this.subtitulo =
    'Desarrollar la capacidad de expresar ideas con claridad, escuchar con atención y construir relaciones mediante una comunicación respetuosa.';

  this.objetivo =
    'Comprender los fundamentos de la comunicación efectiva, practicar la escucha activa, expresar ideas con claridad y aplicar herramientas que favorezcan el entendimiento y la colaboración.';

  this.secciones = [
    {
      titulo: '1. ¿Qué es la comunicación efectiva?',
      parrafos: [
        'La comunicación es un proceso mediante el cual compartimos información, ideas, pensamientos, emociones y necesidades con otras personas.',
        'Una comunicación efectiva no consiste únicamente en hablar bien o transmitir un mensaje. También requiere comprobar que el mensaje se comprende y reconocer cómo influyen el contexto, las emociones y las diferencias individuales.',
        'En el liderazgo, comunicarse efectivamente permite orientar, coordinar esfuerzos, resolver dudas y construir relaciones basadas en el respeto.',
        'La comunicación no garantiza que todas las personas estén de acuerdo. Su propósito es facilitar el entendimiento y permitir que las diferencias se aborden de manera constructiva.'
      ],
      destacado:
        'Comunicar efectivamente significa expresar con claridad, escuchar con atención y procurar el entendimiento.'
    },
    {
      titulo: '2. La claridad al expresar ideas',
      parrafos: [
        'Un mensaje confuso puede producir interpretaciones diferentes, errores y expectativas que no corresponden con lo que realmente se quiso comunicar.',
        'La claridad consiste en organizar las ideas, utilizar palabras comprensibles y presentar la información de manera adecuada para cada situación.',
        'Cuando un líder comunica una tarea, una decisión o un objetivo, necesita explicar qué se espera, por qué es importante y cuáles son los siguientes pasos.'
      ],
      puntos: [
        'Definir el propósito del mensaje antes de hablar.',
        'Utilizar un lenguaje sencillo y directo.',
        'Organizar la información en un orden comprensible.',
        'Evitar suposiciones y expresiones ambiguas.',
        'Comprobar que las personas comprendieron lo comunicado.',
        'Adaptar el mensaje al contexto y a las personas involucradas.'
      ],
      cierre:
        'La claridad reduce las interpretaciones innecesarias y permite que las personas actúen con mayor seguridad.'
    },
    {
      titulo: '3. La escucha activa',
      parrafos: [
        'Escuchar activamente implica prestar atención a lo que otra persona expresa, intentar comprender su perspectiva y responder de manera pertinente.',
        'Escuchar no significa estar de acuerdo con todo. Significa conceder espacio para comprender antes de emitir un juicio o formular una respuesta.',
        'En ocasiones, las personas necesitan explicar una dificultad o compartir una idea antes de recibir una orientación. Interrumpir constantemente o anticipar conclusiones puede dificultar el diálogo.'
      ],
      conceptos: [
        {
          nombre: 'Atención',
          significado:
            'Concentrarse en el mensaje y evitar distracciones innecesarias.',
          ejemplo:
            'Escuchar una explicación sin revisar constantemente el teléfono.'
        },
        {
          nombre: 'Comprensión',
          significado:
            'Intentar identificar el significado y la perspectiva de la otra persona.',
          ejemplo:
            'Preguntar qué quiso decir alguien antes de interpretar su comentario.'
        },
        {
          nombre: 'Validación',
          significado:
            'Reconocer que la otra persona tiene una experiencia o perspectiva que merece ser escuchada.',
          ejemplo:
            'Decir que comprendes por qué una situación le preocupa, aunque tengas una opinión diferente.'
        },
        {
          nombre: 'Retroalimentación',
          significado:
            'Responder de forma que permita confirmar o ampliar la comprensión del mensaje.',
          ejemplo:
            'Resumir lo que entendiste y preguntar si interpretaste correctamente.'
        }
      ],
      destacado:
        'Escuchar con atención es una forma de respeto y una herramienta fundamental para comprender a los demás.'
    },
    {
      titulo: '4. Comunicación verbal y no verbal',
      parrafos: [
        'La comunicación verbal utiliza palabras, tanto de forma oral como escrita. La comunicación no verbal comprende elementos como los gestos, la postura, la expresión facial y otros comportamientos que acompañan la interacción.',
        'El tono de voz, el ritmo al hablar y la actitud pueden influir en cómo se interpreta un mensaje.',
        'Es importante procurar coherencia entre las palabras y el comportamiento, sin asumir que un gesto aislado permite conocer con certeza lo que otra persona piensa o siente.'
      ],
      puntos: [
        'Utilizar un tono adecuado al contexto.',
        'Prestar atención a la postura y a las expresiones.',
        'Evitar gestos que puedan transmitir desinterés o desprecio.',
        'Cuidar la comunicación escrita y el contexto de los mensajes.',
        'Observar las reacciones y preguntar cuando exista alguna duda.'
      ],
      cierre:
        'La comunicación mejora cuando prestamos atención tanto al contenido del mensaje como a la manera en que se desarrolla la interacción.'
    },
    {
      titulo: '5. La retroalimentación constructiva',
      parrafos: [
        'La retroalimentación permite compartir observaciones sobre comportamientos, decisiones, resultados o procesos con el propósito de favorecer el aprendizaje y la mejora.',
        'Una observación constructiva se concentra en hechos concretos y evita descalificar a las personas.',
        'También es importante estar dispuesto a recibir comentarios. Un líder que escucha la retroalimentación puede descubrir aspectos que no había considerado y mejorar su manera de actuar.'
      ],
      puntos: [
        'Describir la situación de forma específica.',
        'Explicar el impacto que tuvo el comportamiento o la decisión.',
        'Evitar etiquetas personales y generalizaciones.',
        'Proponer alternativas o acciones de mejora.',
        'Escuchar la respuesta de la otra persona.',
        'Reconocer los avances y los aspectos que se realizan adecuadamente.'
      ],
      destacado:
        'La retroalimentación constructiva busca mejorar las acciones sin afectar la dignidad de las personas.'
    },
    {
      titulo: '6. Comunicación en situaciones difíciles',
      parrafos: [
        'Los desacuerdos, los errores y las expectativas diferentes forman parte de las relaciones humanas y del trabajo colaborativo.',
        'En situaciones difíciles, las emociones pueden influir en la manera de interpretar y responder a los mensajes.',
        'Una comunicación consciente requiere evitar respuestas impulsivas, identificar el problema y buscar un espacio para dialogar con respeto.',
        'No siempre será posible resolver una diferencia en una sola conversación. En algunos casos será necesario escuchar nuevamente, aclarar compromisos o establecer límites.'
      ],
      puntos: [
        'Mantener la calma antes de responder.',
        'Describir el problema sin atacar a las personas.',
        'Expresar las propias necesidades y preocupaciones con respeto.',
        'Escuchar las perspectivas involucradas.',
        'Buscar acuerdos realistas cuando sea posible.',
        'Definir los siguientes pasos y revisar su cumplimiento.'
      ],
      cierre:
        'La comunicación efectiva no elimina los conflictos; permite abordarlos con mayor claridad, respeto y responsabilidad.'
    },
    {
      titulo: '7. Aplicar la comunicación en el liderazgo',
      parrafos: [
        'En el liderazgo, la comunicación conecta los objetivos con las acciones y facilita que las personas comprendan cómo pueden contribuir.',
        'Un líder necesita compartir información, explicar decisiones, escuchar propuestas y crear condiciones para que las personas puedan expresar inquietudes.',
        'La comunicación también requiere responsabilidad. Es importante no prometer lo que no se puede cumplir, reconocer cuando falta información y corregir los mensajes que hayan generado confusión.',
        'En JV Global, la comunicación debe contribuir a la formación, la colaboración y el crecimiento compartido.'
      ],
      puntos: [
        'Comunicar objetivos y expectativas con claridad.',
        'Escuchar las ideas y necesidades del equipo.',
        'Compartir información relevante de manera oportuna.',
        'Promover preguntas y conversaciones respetuosas.',
        'Reconocer los errores de comunicación y corregirlos.',
        'Utilizar el diálogo para fortalecer la confianza y la colaboración.'
      ],
      destacado:
        'Un liderazgo responsable no solo transmite instrucciones: crea espacios para comprender, aprender y colaborar.'
    }
  ];

  this.reflexiones = [
    {
      titulo: 'Mi forma de comunicar',
      pregunta:
        '¿Qué aspecto de tu manera de comunicarte necesitas mejorar para expresar tus ideas con mayor claridad?'
    },
    {
      titulo: 'Mi capacidad de escuchar',
      pregunta:
        '¿Escuchas para comprender lo que otra persona expresa o sueles preparar tu respuesta mientras habla?'
    },
    {
      titulo: 'Una conversación pendiente',
      pregunta:
        '¿Qué conversación podrías abordar de manera más consciente, respetuosa y constructiva?'
    },
    {
      titulo: 'Mi compromiso',
      pregunta:
        '¿Qué hábito concreto puedes practicar durante los próximos siete días para mejorar tu comunicación?'
    }
  ];

  this.preguntas = [
    {
      texto: '¿Cuál es el propósito principal de la comunicación efectiva?',
      opciones: [
        'Conseguir que todas las personas estén de acuerdo.',
        'Hablar durante más tiempo que los demás.',
        'Expresar ideas con claridad y favorecer el entendimiento.',
        'Evitar que otras personas hagan preguntas.'
      ],
      correcta: 2,
      explicacion:
        'La comunicación efectiva busca transmitir mensajes comprensibles y facilitar el entendimiento, aunque existan opiniones diferentes.'
    },
    {
      texto: '¿Qué caracteriza a la escucha activa?',
      opciones: [
        'Interrumpir para corregir cada comentario.',
        'Prestar atención e intentar comprender antes de responder.',
        'Esperar en silencio sin prestar atención.',
        'Preparar una respuesta mientras la otra persona habla.'
      ],
      correcta: 1,
      explicacion:
        'La escucha activa requiere atención, comprensión y respuestas que permitan desarrollar el diálogo.'
    },
    {
      texto: '¿Cuál es una práctica adecuada al comunicar una instrucción?',
      opciones: [
        'Suponer que todos conocen los detalles.',
        'Utilizar términos confusos para parecer más profesional.',
        'Explicar qué se necesita, por qué y cuáles son los siguientes pasos.',
        'Evitar comprobar si el mensaje fue comprendido.'
      ],
      correcta: 2,
      explicacion:
        'Una instrucción clara explica las expectativas y facilita que las personas comprendan cómo actuar.'
    },
    {
      texto: '¿Qué caracteriza a la retroalimentación constructiva?',
      opciones: [
        'Descalificar a la persona para que cambie.',
        'Concentrarse en hechos concretos y proponer oportunidades de mejora.',
        'Evitar mencionar cualquier aspecto que pueda mejorarse.',
        'Comparar constantemente a las personas.'
      ],
      correcta: 1,
      explicacion:
        'La retroalimentación constructiva se enfoca en comportamientos y situaciones específicas, y busca favorecer el aprendizaje.'
    },
    {
      texto: '¿Cómo conviene abordar un desacuerdo dentro de un equipo?',
      opciones: [
        'Imponer la opinión de quien tiene mayor autoridad.',
        'Evitar hablar del problema indefinidamente.',
        'Escuchar las perspectivas, expresar las preocupaciones con respeto y buscar soluciones.',
        'Culpar inmediatamente a una persona.'
      ],
      correcta: 2,
      explicacion:
        'El diálogo respetuoso permite comprender las diferencias y buscar acuerdos o siguientes pasos responsables.'
    }
  ];

  this.respuestas = [];
  this.evaluacionEnviada = false;
}

private cargarLeccionTrabajoEnEquipo(): void {
  this.titulo = 'Trabajo en equipo';

  this.subtitulo =
    'Construir resultados compartidos mediante la colaboración, la confianza y el compromiso.';

  this.objetivo =
    'Comprender los principios del trabajo en equipo, fortalecer la colaboración y desarrollar habilidades para alcanzar objetivos comunes.';

  this.secciones = [
    {
      titulo: '1. ¿Qué es el trabajo en equipo?',
      parrafos: [
        'El trabajo en equipo es la capacidad de unir esfuerzos, conocimientos y habilidades para alcanzar un objetivo común.',
        'No consiste únicamente en reunir personas. Requiere coordinación, comunicación, compromiso y una visión compartida.',
        'Un equipo sólido reconoce que cada integrante aporta algo valioso y que los resultados colectivos dependen de la participación responsable de todos.'
      ],
      puntos: [
        'Objetivos compartidos.',
        'Responsabilidades definidas.',
        'Colaboración constante.',
        'Respeto por las capacidades de cada persona.'
      ],
      destacado:
        'Un equipo no se fortalece porque todos sean iguales, sino porque cada integrante contribuye desde sus capacidades.'
    },
    {
      titulo: '2. La importancia de los objetivos comunes',
      parrafos: [
        'Para trabajar en equipo es necesario comprender hacia dónde se dirige el grupo y qué se desea alcanzar.',
        'Los objetivos comunes permiten orientar las acciones, organizar los esfuerzos y evaluar los avances.',
        'Cuando cada integrante conoce el propósito, puede tomar decisiones más coherentes y aportar con mayor responsabilidad.'
      ],
      puntos: [
        'Definir metas claras.',
        'Comunicar el propósito del equipo.',
        'Alinear las tareas con los objetivos.',
        'Revisar periódicamente los resultados.'
      ]
    },
    {
      titulo: '3. Confianza y respeto mutuo',
      parrafos: [
        'La confianza es una base fundamental para la colaboración. Permite que las personas compartan ideas, expresen inquietudes y asuman responsabilidades.',
        'El respeto reconoce la dignidad, las opiniones y las diferencias de cada integrante.',
        'Un equipo saludable no necesita que todos piensen igual. Necesita que sus integrantes puedan dialogar y trabajar juntos incluso cuando existen diferencias.'
      ],
      puntos: [
        'Cumplir los compromisos adquiridos.',
        'Respetar las opiniones diferentes.',
        'Evitar descalificaciones personales.',
        'Reconocer las contribuciones de los demás.'
      ]
    },
    {
      titulo: '4. Roles y responsabilidades',
      parrafos: [
        'Un equipo funciona mejor cuando cada integrante comprende su papel y conoce las responsabilidades que ha asumido.',
        'La distribución de tareas evita confusiones, facilita la coordinación y permite aprovechar las capacidades individuales.',
        'Asumir un rol también implica responder por las tareas asignadas y comunicar oportunamente cualquier dificultad.'
      ],
      puntos: [
        'Identificar las fortalezas de cada integrante.',
        'Distribuir tareas de forma equilibrada.',
        'Establecer acuerdos y plazos.',
        'Dar seguimiento a los compromisos.'
      ]
    },
    {
      titulo: '5. Resolver diferencias y conflictos',
      parrafos: [
        'Las diferencias forman parte de cualquier equipo humano. Pueden surgir por distintas opiniones, expectativas, formas de trabajo o dificultades de comunicación.',
        'El conflicto no tiene que convertirse en una confrontación personal. Puede ser una oportunidad para comprender otros puntos de vista y mejorar los acuerdos.',
        'Resolver diferencias exige escuchar, identificar el problema real y buscar soluciones que respeten a las personas y los objetivos comunes.'
      ],
      puntos: [
        'Escuchar antes de responder.',
        'Separar el problema de las personas.',
        'Expresar desacuerdos con respeto.',
        'Construir acuerdos y compromisos concretos.'
      ],
      destacado:
        'La madurez de un equipo también se demuestra en la manera en que enfrenta sus diferencias.'
    },
    {
      titulo: '6. Liderazgo colaborativo',
      parrafos: [
        'El liderazgo colaborativo promueve la participación y facilita que las personas aporten ideas, desarrollen capacidades y asuman responsabilidades.',
        'Quien lidera un equipo no tiene que concentrar todas las decisiones ni realizar todas las tareas. Su función también consiste en orientar, escuchar y crear condiciones para que los demás puedan contribuir.',
        'Un liderazgo consciente reconoce los logros colectivos y ayuda a que cada integrante crezca junto con el equipo.'
      ],
      puntos: [
        'Promover la participación.',
        'Delegar con claridad.',
        'Acompañar sin imponer innecesariamente.',
        'Reconocer los aportes individuales y colectivos.'
      ]
    },
    {
      titulo: '7. El compromiso con los resultados colectivos',
      parrafos: [
        'El trabajo en equipo requiere constancia. La colaboración no se limita a participar cuando resulta conveniente; también implica cumplir los acuerdos y mantener la disposición ante los desafíos.',
        'Cada integrante es responsable de sus acciones y, al mismo tiempo, contribuye al resultado compartido.',
        'Cuando existe compromiso, el equipo puede aprender de sus errores, adaptarse y avanzar de manera coordinada.'
      ],
      puntos: [
        'Actuar con responsabilidad.',
        'Mantener una comunicación abierta.',
        'Apoyar al equipo ante las dificultades.',
        'Aprender y mejorar continuamente.'
      ],
      destacado:
        'El resultado colectivo se construye con la responsabilidad de cada persona.'
    }
  ];

  this.reflexiones = [
    {
      titulo: 'Mi aporte al equipo',
      pregunta:
        '¿Qué capacidades, conocimientos o experiencias puedo aportar para ayudar a un equipo a alcanzar sus objetivos?'
    },
    {
      titulo: 'Confianza y respeto',
      pregunta:
        '¿Qué acciones concretas puedo realizar para fortalecer la confianza y el respeto con las personas con quienes colaboro?'
    },
    {
      titulo: 'Manejo de diferencias',
      pregunta:
        '¿Cómo suelo reaccionar cuando alguien tiene una opinión diferente a la mía y qué puedo mejorar?'
    },
    {
      titulo: 'Compromiso colectivo',
      pregunta:
        '¿Qué compromiso personal puedo asumir para contribuir de manera más responsable a los resultados de mi equipo?'
    }
  ];

  this.preguntas = [
    {
      texto: '¿Cuál es el propósito principal del trabajo en equipo?',
      opciones: [
        'Que una sola persona tome todas las decisiones.',
        'Unir esfuerzos y capacidades para alcanzar objetivos comunes.',
        'Evitar que existan opiniones diferentes.',
        'Distribuir tareas sin necesidad de coordinación.'
      ],
      correcta: 1,
      explicacion:
        'El trabajo en equipo integra las capacidades de sus integrantes para avanzar hacia objetivos compartidos.'
    },
    {
      texto: '¿Qué acción fortalece la confianza dentro de un equipo?',
      opciones: [
        'Prometer resultados que no se pueden garantizar.',
        'Evitar comunicar las dificultades.',
        'Cumplir los compromisos y actuar con transparencia.',
        'Ignorar las opiniones de los demás.'
      ],
      correcta: 2,
      explicacion:
        'La confianza se construye mediante acciones coherentes, cumplimiento y comunicación transparente.'
    },
    {
      texto: '¿Por qué es importante definir roles y responsabilidades?',
      opciones: [
        'Para impedir que los integrantes colaboren entre sí.',
        'Para concentrar todas las tareas en el líder.',
        'Para evitar que las personas desarrollen nuevas habilidades.',
        'Para organizar el trabajo y aclarar los compromisos de cada integrante.'
      ],
      correcta: 3,
      explicacion:
        'Los roles claros ayudan a coordinar esfuerzos, evitar confusiones y dar seguimiento a las responsabilidades.'
    },
    {
      texto: '¿Cómo conviene abordar un desacuerdo dentro del equipo?',
      opciones: [
        'Escuchar las distintas perspectivas y buscar acuerdos respetuosos.',
        'Imponer la opinión de quien tiene más autoridad.',
        'Evitar cualquier conversación sobre el problema.',
        'Convertir la diferencia en una confrontación personal.'
      ],
      correcta: 0,
      explicacion:
        'El diálogo respetuoso permite comprender el problema y construir soluciones sin atacar a las personas.'
    },
    {
      texto: '¿Qué caracteriza al liderazgo colaborativo?',
      opciones: [
        'Controlar todas las actividades del equipo.',
        'Promover la participación y el desarrollo de los integrantes.',
        'Reconocer únicamente los logros individuales.',
        'Evitar delegar responsabilidades.'
      ],
      correcta: 1,
      explicacion:
        'El liderazgo colaborativo facilita la participación, distribuye responsabilidades y promueve el crecimiento colectivo.'
    }
  ];

  this.respuestas = [];
  this.evaluacionEnviada = false;
}


private cargarLeccionResponsabilidadYServicio(): void {
  this.titulo = 'Responsabilidad y servicio';

  this.subtitulo =
    'Liderar con integridad, asumir compromisos y contribuir al crecimiento de los demás.';

  this.objetivo =
    'Comprender la importancia de la responsabilidad y el servicio como principios del liderazgo consciente, fortaleciendo la integridad, el compromiso y la disposición para contribuir al bienestar colectivo.';

  this.secciones = [
    {
      titulo: '1. La responsabilidad como principio del liderazgo',
      parrafos: [
        'La responsabilidad es la capacidad de reconocer el impacto de nuestras decisiones y asumir las consecuencias de nuestras acciones.',
        'En el liderazgo, ser responsable significa actuar con conciencia, cumplir los compromisos y comprender que nuestras decisiones influyen en otras personas.',
        'Un líder responsable no busca excusas permanentes ni atribuye todos sus errores a factores externos. Analiza lo sucedido, aprende y toma medidas para mejorar.'
      ],
      puntos: [
        'Asumir las consecuencias de las decisiones.',
        'Cumplir los compromisos adquiridos.',
        'Reconocer los errores y corregirlos.',
        'Actuar con coherencia entre lo que se dice y lo que se hace.'
      ],
      destacado:
        'La responsabilidad no se demuestra únicamente con palabras, sino con acciones coherentes y sostenidas.'
    },
    {
      titulo: '2. Integridad y coherencia personal',
      parrafos: [
        'La integridad consiste en actuar de acuerdo con los principios y valores que orientan nuestras decisiones, incluso cuando nadie está observando.',
        'Un líder íntegro comprende que la confianza se construye con honestidad, transparencia y coherencia.',
        'La autoridad no depende solamente del cargo o de la posición que una persona ocupa. También se fortalece mediante su conducta y la confianza que inspira.'
      ],
      puntos: [
        'Decir la verdad y comunicar con honestidad.',
        'Respetar los acuerdos y principios establecidos.',
        'Evitar promesas que no se pueden cumplir.',
        'Mantener la coherencia en situaciones difíciles.'
      ]
    },
    {
      titulo: '3. El servicio como actitud de liderazgo',
      parrafos: [
        'Servir significa poner nuestras capacidades, conocimientos y acciones a disposición de un propósito que también considera las necesidades de los demás.',
        'El liderazgo orientado al servicio no busca protagonismo permanente. Busca aportar, facilitar el desarrollo de las personas y contribuir a objetivos compartidos.',
        'Servir no significa renunciar a los límites personales ni aceptar cualquier comportamiento. Implica actuar con respeto, responsabilidad y disposición para ayudar.'
      ],
      puntos: [
        'Identificar necesidades reales.',
        'Ofrecer apoyo de manera respetuosa.',
        'Compartir conocimientos y experiencias.',
        'Contribuir sin generar dependencia innecesaria.'
      ],
      destacado:
        'El servicio fortalece el liderazgo cuando ayuda a otros a desarrollar sus propias capacidades.'
    },
    {
      titulo: '4. Compromiso y cumplimiento',
      parrafos: [
        'El compromiso es la decisión consciente de dedicar atención, esfuerzo y constancia a una responsabilidad asumida.',
        'No basta con expresar buenas intenciones. Es necesario convertirlas en acciones, organizar el tiempo y dar seguimiento a los objetivos.',
        'Cuando aparece una dificultad, una persona comprometida comunica la situación, busca alternativas y procura cumplir los acuerdos de manera responsable.'
      ],
      puntos: [
        'Definir prioridades y organizar las tareas.',
        'Establecer plazos realistas.',
        'Comunicar avances y dificultades.',
        'Dar seguimiento hasta cerrar los compromisos.'
      ]
    },
    {
      titulo: '5. Responsabilidad hacia las personas',
      parrafos: [
        'Las decisiones de un líder pueden influir en la motivación, las oportunidades y el desarrollo de otras personas.',
        'Por ello, es importante considerar las consecuencias de nuestras palabras y acciones, respetar la dignidad de cada integrante y evitar ejercer la autoridad de manera arbitraria.',
        'La responsabilidad hacia los demás también implica reconocer sus capacidades, respetar su autonomía y actuar con justicia.'
      ],
      puntos: [
        'Escuchar antes de tomar decisiones que afectan al equipo.',
        'Tratar a las personas con respeto.',
        'Evitar la manipulación y las presiones indebidas.',
        'Reconocer los aportes y respetar los límites de los demás.'
      ]
    },
    {
      titulo: '6. El servicio y el crecimiento colectivo',
      parrafos: [
        'Una comunidad se fortalece cuando sus integrantes comparten conocimientos, colaboran y buscan oportunidades para que otros también puedan avanzar.',
        'El servicio permite transformar la experiencia individual en aprendizaje compartido y contribuye a construir relaciones basadas en la cooperación.',
        'Un líder que sirve promueve la autonomía, anima a las personas a asumir responsabilidades y facilita que el crecimiento no dependa exclusivamente de una sola figura.'
      ],
      puntos: [
        'Compartir herramientas y aprendizajes.',
        'Acompañar sin imponer decisiones.',
        'Promover la colaboración.',
        'Facilitar oportunidades de desarrollo.'
      ]
    },
    {
      titulo: '7. Convertir los valores en acciones',
      parrafos: [
        'La responsabilidad y el servicio adquieren sentido cuando se reflejan en la vida cotidiana.',
        'Pequeñas acciones sostenidas pueden fortalecer la confianza, mejorar las relaciones y generar resultados positivos en los equipos y las comunidades.',
        'El liderazgo consciente exige revisar nuestras conductas, identificar oportunidades de mejora y mantener la disposición para aprender.'
      ],
      puntos: [
        'Cumplir una tarea pendiente.',
        'Reconocer un error y corregirlo.',
        'Ofrecer ayuda cuando sea necesaria.',
        'Actuar con respeto y transparencia.',
        'Evaluar el impacto de nuestras decisiones.'
      ],
      destacado:
        'El liderazgo con propósito se construye cuando los valores dejan de ser conceptos y se convierten en hábitos.'
    }
  ];

  this.reflexiones = [
    {
      titulo: 'Mi responsabilidad personal',
      pregunta:
        '¿Qué compromiso importante he asumido y qué acciones concretas puedo realizar para cumplirlo mejor?'
    },
    {
      titulo: 'Coherencia e integridad',
      pregunta:
        '¿En qué situaciones me resulta difícil actuar de acuerdo con mis principios y cómo puedo mejorar mi coherencia?'
    },
    {
      titulo: 'Mi actitud de servicio',
      pregunta:
        '¿De qué manera puedo utilizar mis conocimientos o capacidades para contribuir al crecimiento de otras personas?'
    },
    {
      titulo: 'Una acción para comenzar',
      pregunta:
        '¿Qué acción específica puedo realizar durante esta semana para demostrar responsabilidad y servicio en mi entorno?'
    }
  ];

  this.preguntas = [
    {
      texto: '¿Qué caracteriza a una persona responsable en el liderazgo?',
      opciones: [
        'Evitar reconocer los errores.',
        'Delegar todas las decisiones difíciles.',
        'Asumir sus decisiones, cumplir compromisos y corregir sus errores.',
        'Buscar siempre a alguien a quien atribuir las dificultades.'
      ],
      correcta: 2,
      explicacion:
        'La responsabilidad implica asumir las consecuencias de las decisiones, cumplir los compromisos y aprender de los errores.'
    },
    {
      texto: '¿Qué significa actuar con integridad?',
      opciones: [
        'Actuar de acuerdo con los principios y valores, incluso en situaciones difíciles.',
        'Decir únicamente lo que los demás quieren escuchar.',
        'Cambiar los principios según la conveniencia.',
        'Evitar comunicar los problemas.'
      ],
      correcta: 0,
      explicacion:
        'La integridad se refleja en la coherencia entre los valores, las decisiones y las acciones.'
    },
    {
      texto: '¿Cuál es una característica del liderazgo orientado al servicio?',
      opciones: [
        'Concentrar todos los logros en el líder.',
        'Crear dependencia para mantener el control.',
        'Ayudar únicamente cuando existe un beneficio personal.',
        'Facilitar el desarrollo de las personas y contribuir a objetivos compartidos.'
      ],
      correcta: 3,
      explicacion:
        'El servicio busca aportar al bienestar y al desarrollo de los demás, respetando su autonomía.'
    },
    {
      texto: '¿Qué debe hacer una persona comprometida cuando enfrenta una dificultad que afecta un acuerdo?',
      opciones: [
        'Ignorar el problema hasta que alguien lo descubra.',
        'Comunicar la situación, buscar alternativas y actuar responsablemente.',
        'Abandonar el compromiso sin dar explicaciones.',
        'Prometer resultados sin evaluar las posibilidades.'
      ],
      correcta: 1,
      explicacion:
        'El compromiso requiere comunicación oportuna, búsqueda de soluciones y responsabilidad frente a los acuerdos.'
    },
    {
      texto: '¿Cómo contribuye el servicio al crecimiento colectivo?',
      opciones: [
        'Impidiendo que otros tomen decisiones.',
        'Evitando compartir conocimientos.',
        'Compartiendo aprendizajes y facilitando el desarrollo de otras personas.',
        'Concentrando todas las responsabilidades en una sola persona.'
      ],
      correcta: 2,
      explicacion:
        'El servicio fortalece el crecimiento colectivo cuando comparte conocimientos, promueve la colaboración y desarrolla autonomía.'
    }
  ];

  this.respuestas = [];
  this.evaluacionEnviada = false;
}


private cargarLeccionAcompanamientoDesarrolloPersonas(): void {
  this.titulo = 'Acompañamiento y desarrollo de personas';

  this.subtitulo =
    'Impulsar el crecimiento de otros mediante la orientación, la escucha y el desarrollo de capacidades.';

  this.objetivo =
    'Comprender los principios del acompañamiento y desarrollar habilidades para orientar, motivar y apoyar el crecimiento de las personas, respetando su autonomía y sus objetivos individuales.';

  this.secciones = [
    {
      titulo: '1. ¿Qué es el acompañamiento?',
      parrafos: [
        'Acompañar es estar presente en el proceso de crecimiento de otra persona, ofreciendo orientación, apoyo y herramientas que faciliten su aprendizaje.',
        'No significa resolver todos los problemas de los demás ni tomar decisiones en su lugar. Consiste en crear condiciones para que cada persona pueda desarrollar sus capacidades y asumir sus propias responsabilidades.',
        'El acompañamiento consciente requiere paciencia, respeto y una comprensión real de las necesidades de quien recibe el apoyo.'
      ],
      puntos: [
        'Escuchar las necesidades de la persona.',
        'Orientar sin imponer decisiones.',
        'Ofrecer apoyo de acuerdo con cada situación.',
        'Respetar el ritmo y la autonomía individual.'
      ],
      destacado:
        'Acompañar no es caminar por otra persona, sino ayudarla a desarrollar la capacidad de avanzar por sí misma.'
    },
    {
      titulo: '2. Reconocer el potencial de cada persona',
      parrafos: [
        'Cada persona posee capacidades, experiencias, intereses y oportunidades de crecimiento diferentes.',
        'El desarrollo comienza cuando se reconocen las fortalezas y se identifican las áreas que pueden mejorar.',
        'Un líder consciente evita comparar constantemente a las personas. En su lugar, ayuda a cada integrante a reconocer sus avances y a establecer objetivos adecuados a su situación.'
      ],
      puntos: [
        'Identificar fortalezas y habilidades.',
        'Reconocer oportunidades de aprendizaje.',
        'Evitar comparaciones que desmotiven.',
        'Promover objetivos personales y alcanzables.'
      ]
    },
    {
      titulo: '3. La escucha como herramienta de acompañamiento',
      parrafos: [
        'La escucha activa permite comprender lo que una persona piensa, siente y necesita comunicar.',
        'Acompañar requiere prestar atención sin interrumpir innecesariamente, hacer preguntas que faciliten la reflexión y confirmar que se ha comprendido el mensaje.',
        'Escuchar no significa estar siempre de acuerdo. Significa reconocer la perspectiva de la otra persona y responder con respeto.'
      ],
      puntos: [
        'Prestar atención sin distracciones.',
        'Realizar preguntas abiertas.',
        'Evitar juzgar de manera apresurada.',
        'Confirmar la comprensión antes de aconsejar.'
      ],
      destacado:
        'Muchas veces, el primer paso para ayudar a alguien es escucharlo con verdadera atención.'
    },
    {
      titulo: '4. Orientación y retroalimentación constructiva',
      parrafos: [
        'La orientación ayuda a las personas a comprender opciones, analizar dificultades y tomar decisiones con mayor claridad.',
        'La retroalimentación constructiva ofrece información específica sobre comportamientos, resultados y oportunidades de mejora.',
        'Para que sea útil, debe comunicarse con respeto, centrarse en hechos observables y proponer alternativas que faciliten el aprendizaje.'
      ],
      puntos: [
        'Reconocer primero los avances reales.',
        'Describir con claridad lo que se puede mejorar.',
        'Evitar críticas personales y descalificaciones.',
        'Proponer acciones concretas.',
        'Dar espacio para preguntas y reflexión.'
      ]
    },
    {
      titulo: '5. Motivar sin generar dependencia',
      parrafos: [
        'La motivación puede fortalecerse cuando una persona comprende el sentido de sus objetivos y reconoce sus propios avances.',
        'El acompañamiento saludable promueve la iniciativa y la confianza personal. No debe utilizar la presión, la manipulación o la aprobación permanente como mecanismos de control.',
        'Un líder puede inspirar y apoyar, pero el compromiso con el propio desarrollo corresponde a cada persona.'
      ],
      puntos: [
        'Reconocer el esfuerzo y los avances.',
        'Estimular la iniciativa personal.',
        'Promover la toma de decisiones.',
        'Evitar crear dependencia emocional o funcional.',
        'Respetar las decisiones individuales.'
      ]
    },
    {
      titulo: '6. Crear oportunidades de aprendizaje',
      parrafos: [
        'El desarrollo de personas necesita experiencias que permitan adquirir conocimientos, practicar habilidades y aprender de los resultados.',
        'Un líder puede facilitar este proceso mediante conversaciones, actividades formativas, desafíos adecuados y espacios para compartir experiencias.',
        'El aprendizaje se fortalece cuando las personas pueden experimentar, recibir orientación y reflexionar sobre sus propios resultados.'
      ],
      puntos: [
        'Compartir conocimientos y recursos.',
        'Proponer desafíos adecuados al nivel de experiencia.',
        'Facilitar espacios de práctica.',
        'Promover el intercambio de experiencias.',
        'Reconocer el aprendizaje obtenido de los errores.'
      ]
    },
    {
      titulo: '7. Seguimiento y crecimiento continuo',
      parrafos: [
        'El acompañamiento no termina con una conversación o una recomendación. Es importante revisar los avances, identificar dificultades y ajustar las acciones cuando sea necesario.',
        'El seguimiento debe ser respetuoso y acordado. Su propósito es facilitar el aprendizaje, no vigilar o controlar cada decisión de la persona.',
        'Cuando el acompañamiento se realiza con constancia y claridad, puede fortalecer la confianza y favorecer un desarrollo más autónomo.'
      ],
      puntos: [
        'Establecer acuerdos de seguimiento.',
        'Revisar los avances y dificultades.',
        'Ajustar los objetivos cuando sea necesario.',
        'Reconocer los progresos.',
        'Fortalecer gradualmente la autonomía.'
      ],
      destacado:
        'El éxito del acompañamiento también se refleja en la capacidad que desarrolla una persona para continuar creciendo por sí misma.'
    }
  ];

  this.reflexiones = [
    {
      titulo: 'Mi capacidad para acompañar',
      pregunta:
        '¿Cómo reacciono cuando alguien me pide orientación y qué puedo mejorar para ofrecer un acompañamiento más respetuoso y útil?'
    },
    {
      titulo: 'Reconocer el potencial',
      pregunta:
        '¿Qué fortalezas observo en las personas de mi entorno que podría ayudarles a desarrollar?'
    },
    {
      titulo: 'Escuchar antes de orientar',
      pregunta:
        '¿Suelo escuchar con atención antes de ofrecer consejos o soluciones? ¿Qué cambiaría en mi forma de comunicarme?'
    },
    {
      titulo: 'Impulsar la autonomía',
      pregunta:
        '¿Cómo puedo ayudar a otra persona a desarrollar sus capacidades sin tomar decisiones en su lugar?'
    }
  ];

  this.preguntas = [
    {
      texto: '¿Cuál es el propósito principal del acompañamiento consciente?',
      opciones: [
        'Resolver todos los problemas de otras personas.',
        'Controlar las decisiones de quienes reciben orientación.',
        'Facilitar el aprendizaje y el desarrollo de capacidades respetando la autonomía.',
        'Evitar que las personas cometan errores.'
      ],
      correcta: 2,
      explicacion:
        'El acompañamiento consciente ofrece orientación y apoyo para que cada persona fortalezca sus capacidades y su autonomía.'
    },
    {
      texto: '¿Qué actitud favorece el reconocimiento del potencial de una persona?',
      opciones: [
        'Identificar sus fortalezas y oportunidades de crecimiento sin comparaciones constantes.',
        'Señalar únicamente sus debilidades.',
        'Exigir que avance al mismo ritmo que los demás.',
        'Decidir por ella qué capacidades debe desarrollar.'
      ],
      correcta: 0,
      explicacion:
        'Reconocer las fortalezas y las oportunidades individuales permite orientar el desarrollo de forma respetuosa.'
    },
    {
      texto: '¿Qué caracteriza a la escucha activa?',
      opciones: [
        'Interrumpir para ofrecer soluciones inmediatas.',
        'Escuchar únicamente las partes con las que estamos de acuerdo.',
        'Evitar hacer preguntas para no prolongar la conversación.',
        'Prestar atención, hacer preguntas y confirmar la comprensión.'
      ],
      correcta: 3,
      explicacion:
        'La escucha activa implica atención, preguntas pertinentes y verificación de lo comprendido.'
    },
    {
      texto: '¿Cómo debe ofrecerse la retroalimentación constructiva?',
      opciones: [
        'Mediante críticas personales para generar presión.',
        'Con respeto, información específica y propuestas de mejora.',
        'Evitando mencionar cualquier oportunidad de aprendizaje.',
        'Comparando a la persona con quienes tienen mejores resultados.'
      ],
      correcta: 1,
      explicacion:
        'La retroalimentación constructiva se centra en hechos y oportunidades de mejora, comunicados de forma respetuosa.'
    },
    {
      texto: '¿Qué demuestra que un acompañamiento está favoreciendo la autonomía?',
      opciones: [
        'Que la persona consulta todas sus decisiones con el líder.',
        'Que el líder resuelve permanentemente sus dificultades.',
        'Que la persona desarrolla capacidades para tomar decisiones y continuar su crecimiento.',
        'Que la persona evita asumir nuevas responsabilidades.'
      ],
      correcta: 2,
      explicacion:
        'Un acompañamiento efectivo fortalece la capacidad de la persona para aprender, decidir y avanzar de manera autónoma.'
    }
  ];

  this.respuestas = [];
  this.evaluacionEnviada = false;
}

get puntuacion(): number {
  return this.calificacion;
}

repetirEvaluacion(): void {
  this.respuestas = [];
  this.evaluacionEnviada = false;
  this.calificacion = 0;
  this.totalCorrectas = 0;
  this.mensajeEvaluacion = '';
}

completarLeccion(): void {
  const clave = this.clavesLecciones[this.leccionActual];

  if (!clave) return;

  localStorage.setItem(clave, 'completada');
  this.leccionCompletada = true;
}
}