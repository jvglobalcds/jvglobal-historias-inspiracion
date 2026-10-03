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
    'ejecucion-y-seguimiento': 'jv-leccion-ejecucion-y-seguimiento'
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
        titulo: 'Mi visión',
        pregunta: '¿Cómo me gustaría que fuera mi vida dentro de tres años?'
      },

      {
        titulo: 'Mis prioridades',
        pregunta: '¿Qué áreas de mi vida necesitan mayor atención en este momento?'
      },

      {
        titulo: 'Mi objetivo',
        pregunta: '¿Qué resultado concreto quiero alcanzar durante los próximos meses?'
      },

      {
        titulo: 'Mis acciones',
        pregunta: '¿Qué tres acciones puedo comenzar esta semana para acercarme a ese objetivo?'
      },

      {
        titulo: 'Mi coherencia',
        pregunta: '¿Mis decisiones actuales están relacionadas con la vida que quiero construir?'
      }

    ];

    this.preguntas = [

      {
        texto: '¿Cuál es la función principal de una visión personal?',

        opciones: [
          'Definir una dirección consciente para el futuro que deseamos construir',
          'Garantizar exactamente lo que ocurrirá en el futuro',
          'Evitar cualquier cambio en nuestros planes'
        ],

        correcta: 0,

        explicacion:
          'La visión proporciona una dirección y puede orientar nuestras decisiones, aunque el camino pueda cambiar.'
      },

      {
        texto: '¿Qué permite hacer un objetivo concreto?',

        opciones: [
          'Convertir una visión general en un resultado que puede organizarse y revisarse',
          'Eliminar todas las dificultades del camino',
          'Garantizar que nunca tendremos que cambiar de estrategia'
        ],

        correcta: 0,

        explicacion:
          'Los objetivos ayudan a transformar una dirección general en resultados concretos que pueden trabajarse y revisarse.'
      },

      {
        texto: '¿Qué relación existe entre visión, objetivo y acción?',

        opciones: [
          'La visión orienta, el objetivo concreta y la acción permite avanzar',
          'Los tres conceptos significan exactamente lo mismo',
          'La acción es independiente de cualquier objetivo'
        ],

        correcta: 0,

        explicacion:
          'La visión establece una dirección, los objetivos organizan resultados concretos y las acciones permiten avanzar hacia ellos.'
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

    const clave = this.clavesLecciones[this.leccionActual];

    if (clave) {
      localStorage.setItem(clave, 'completada');
      this.leccionCompletada = true;
    }
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
      titulo: 'Mi siguiente acción',
      pregunta:
        '¿Cuál es la acción concreta que puedes realizar para avanzar en uno de tus objetivos?'
    },
    {
      titulo: 'Mi seguimiento',
      pregunta:
        '¿Cómo podrías revisar periódicamente tu propio avance?'
    },
    {
      titulo: 'Mi ajuste',
      pregunta:
        '¿Qué harías si una estrategia no produce el resultado esperado?'
    }
  ];

  this.preguntas = [
    {
      texto: '¿Qué significa ejecutar un plan?',
      opciones: [
        'Pensar constantemente en el objetivo',
        'Convertir la planificación en acciones reales',
        'Cambiar de objetivo cada semana',
        'Esperar el momento perfecto'
      ],
      correcta: 1,
      explicacion:
        'La ejecución consiste en llevar una decisión o planificación al terreno de la práctica.'
    },
    {
      texto: '¿Para qué sirve el seguimiento?',
      opciones: [
        'Para evitar cualquier cambio',
        'Para demostrar que nunca existen dificultades',
        'Para revisar el avance y detectar ajustes necesarios',
        'Para reemplazar la planificación'
      ],
      correcta: 2,
      explicacion:
        'El seguimiento permite observar el avance y utilizar esa información para realizar ajustes cuando sean necesarios.'
    },
    {
      texto: '¿Qué debe caracterizar una acción concreta?',
      opciones: [
        'Ser indefinida',
        'Depender únicamente de la motivación',
        'Poder identificarse y realizarse',
        'No tener un plazo'
      ],
      correcta: 2,
      explicacion:
        'Una acción concreta debe poder identificarse claramente y llevarse a cabo.'
    }
  ];
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

  if (clave) {
    localStorage.setItem(clave, 'completada');
    this.leccionCompletada = true;
  }
}
}