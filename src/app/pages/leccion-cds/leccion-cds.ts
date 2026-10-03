import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leccion-cds',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './leccion-cds.html',
  styleUrl: './leccion-cds.css'
})
export class LeccionCds {

    private leccionActual = '';

  titulo = 'Autoconocimiento y propósito';

  subtitulo =
    'Fundamentos para comprender quién eres, hacia dónde quieres avanzar y qué sentido deseas dar a tus decisiones.';

  objetivo =
    'Comprender la importancia del autoconocimiento como punto de partida para construir un propósito personal, identificar fortalezas y áreas de mejora, y establecer una dirección consciente para el desarrollo personal.';

  secciones = [
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
  leccionCompletada = localStorage.getItem(
  'jv-leccion-autoconocimiento-proposito'
) === 'completada';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.leccionActual = params.get('leccion') ?? '';

      if (this.leccionActual === 'vision-personal-y-objetivos') {
        this.cargarLeccionVision();
      }

   if (this.leccionActual === 'pensamiento-consciente') {
  this.cargarLeccionPensamiento();
}

if (this.leccionActual === 'toma-de-decisiones') {
  this.cargarLeccionTomaDecisiones();
}

if (this.leccionActual === 'planificacion-y-direccion') {
  this.cargarLeccionPlanificacion();
}

      this.actualizarEstadoLeccion();
    });
  }

private actualizarEstadoLeccion(): void {

  if (this.leccionActual === 'pensamiento-consciente') {
    this.leccionCompletada =
      localStorage.getItem('jv-leccion-pensamiento-consciente') ===
      'completada';

    return;
  }

  if (this.leccionActual === 'toma-de-decisiones') {
    this.leccionCompletada =
      localStorage.getItem('jv-leccion-toma-de-decisiones') ===
      'completada';

    return;
  }

  if (this.leccionActual === 'vision-personal-y-objetivos') {
    this.leccionCompletada =
      localStorage.getItem('jv-leccion-vision-personal-objetivos') ===
      'completada';

    return;
  }

  this.leccionCompletada =
    localStorage.getItem('jv-leccion-autoconocimiento-proposito') ===
    'completada';
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
    this.respuestas[pregunta] = opcion;
  }

  comprobarEvaluacion(): void {
    if (this.respuestas.length === this.preguntas.length &&
        this.respuestas.every(r => r !== undefined)) {
      this.evaluacionEnviada = true;
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

  repetirEvaluacion(): void {
    this.respuestas = [];
    this.evaluacionEnviada = false;
  }

completarLeccion(): void {

  this.leccionCompletada = true;

  let clave = 'jv-leccion-autoconocimiento-proposito';

  if (this.leccionActual === 'vision-personal-y-objetivos') {
    clave = 'jv-leccion-vision-personal-objetivos';
  }

  if (this.leccionActual === 'pensamiento-consciente') {
    clave = 'jv-leccion-pensamiento-consciente';
  }

  if (this.leccionActual === 'toma-de-decisiones') {
  clave = 'jv-leccion-toma-de-decisiones';
}

if (this.leccionActual === 'planificacion-y-direccion') {
  clave = 'jv-leccion-planificacion-y-direccion';
}

  localStorage.setItem(clave, 'completada');

}

  get puntuacion(): number {
    return this.preguntas.filter(
      (pregunta, i) => this.respuestas[i] === pregunta.correcta
    ).length;
  }
}