import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface BloqueReflexion {
  tipo: 'parrafo' | 'destacado' | 'frase-central' | 'frase-final';
  lineas: string[];
}

interface Reflexion {
  numero: string;
  titulo: string;
  categoria: string;
  preguntaInicial: string;
  bloques: BloqueReflexion[];
  preguntaReflexion: string;
  cierre: string;
}

@Component({
  selector: 'app-ensenanza-reflexion',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './ensenanza-reflexion.html',
  styleUrl: './ensenanza-reflexion.css'
})
export class EnsenanzaReflexion {

  reflexion: Reflexion | null = null;

  private reflexiones: Record<string, Reflexion> = {

    'talento-o-disciplina': {

      numero: '01',

      titulo: 'TALENTO O DISCIPLINA',

      categoria: 'MENTALIDAD, PROPÓSITO Y CRECIMIENTO',

      preguntaInicial:
        '¿Qué es más poderoso: el talento o la disciplina?',

      bloques: [

        {
          tipo: 'parrafo',
          lineas: [
            'El talento puede hacer que comiences.',
            'Puede darte facilidad, rapidez o una ventaja inicial. Puede hacer que otros reconozcan tus capacidades y que tú mismo descubras que tienes potencial.',
            'Pero el talento, por sí solo, no garantiza que llegues lejos.'
          ]
        },

        {
          tipo: 'parrafo',
          lineas: [
            'La disciplina aparece cuando el entusiasmo desaparece.',
            'Es lo que te permite continuar cuando ya no es fácil, cuando nadie te está mirando, cuando los resultados todavía no aparecen y cuando las excusas parecen tener más fuerza que tus objetivos.'
          ]
        },

        {
          tipo: 'parrafo',
          lineas: [
            'Observa una roca desgastada por una gota de agua.',
            'Una sola gota parece insignificante.',
            'Pero una gota tras otra, durante el tiempo suficiente, puede transformar aquello que parecía imposible de cambiar.'
          ]
        },

        {
          tipo: 'destacado',
          lineas: [
            'Fue la CONSTANCIA.'
          ]
        },

        {
          tipo: 'parrafo',
          lineas: [
            'En la vida ocurre algo parecido.',
            'No siempre avanza más quien tiene más talento.',
            'Muchas veces avanza quien está dispuesto a seguir aprendiendo, seguir practicando, seguir corrigiendo y seguir intentándolo cuando otros ya abandonaron.'
          ]
        },

        {
          tipo: 'frase-central',
          lineas: [
            'EL TALENTO PUEDE ABRIR UNA PUERTA.',
            'LA DISCIPLINA TE AYUDA A PERMANECER EN EL CAMINO.'
          ]
        },

        {
          tipo: 'parrafo',
          lineas: [
            'El verdadero crecimiento no consiste solamente en descubrir de qué eres capaz.',
            'Consiste en desarrollar la disciplina necesaria para convertir ese potencial en realidad.',
            'Por eso, cuando tengas que elegir entre una excusa y un paso más, recuerda:'
          ]
        },

        {
          tipo: 'frase-final',
          lineas: [
            'LA DISCIPLINA NO EXIGE QUE SEAS EL MEJOR.',
            'EXIGE QUE NO DEJES DE AVANZAR.'
          ]
        }

      ],

      preguntaReflexion:
        '¿Qué podrías alcanzar si durante los próximos meses sustituyeras las excusas por disciplina y constancia?',

      cierre:
        'La decisión comienza contigo.'

    },


    'actua-aunque-nadie-te-aplauda': {

      numero: '02',

      titulo: 'ACTÚA AUNQUE NADIE TE APLAUDA',

      categoria: 'MENTALIDAD, PROPÓSITO Y CRECIMIENTO',

      preguntaInicial:
        'Aunque todavía no veas resultados, sigue de pie.',

      bloques: [

        {
          tipo: 'parrafo',
          lineas: [
            'Aunque no veas cambios, actúa.',
            'Hay momentos en los que haces todo lo que puedes y, sin embargo, parece que nada está cambiando. Nadie reconoce tu esfuerzo. Nadie te aplaude. Incluso puedes comenzar a preguntarte si realmente vale la pena continuar.',
            'Es precisamente ahí donde se pone a prueba tu determinación.'
          ]
        },

        {
          tipo: 'parrafo',
          lineas: [
            '¿Seguirás avanzando cuando nadie te esté mirando?',
            '¿Seguirás trabajando cuando todavía no existan resultados visibles?',
            '¿Seguirás creyendo en el proceso cuando otros no crean en ti?'
          ]
        },

        {
          tipo: 'parrafo',
          lineas: [
            'No necesitas aplausos para avanzar.',
            'No necesitas que todos comprendan tu camino.',
            'Y no necesitas esperar una señal perfecta para comenzar a actuar.'
          ]
        },

        {
          tipo: 'parrafo',
          lineas: [
            'Habrá días en los que estarás cansado.',
            'Habrá momentos en los que sentirás que estás solo.',
            'Incluso habrá personas que te llamen loco por intentar algo diferente.',
            'Pero si sabes hacia dónde quieres ir, no permitas que la falta de reconocimiento determine cuánto estás dispuesto a avanzar.'
          ]
        },

        {
          tipo: 'frase-central',
          lineas: [
            'EL MOVIMIENTO GENERA EXPERIENCIA.',
            'LA EXPERIENCIA GENERA APRENDIZAJE.',
            'Y EL APRENDIZAJE TE PERMITE SEGUIR CRECIENDO.'
          ]
        },

        {
          tipo: 'parrafo',
          lineas: [
            'El que espera constantemente una señal puede quedarse esperando.',
            'El que decide actuar comienza a construir.',
            'Por eso, cuando no veas resultados, no te rindas.',
            'Cuando nadie te aplauda, sigue.',
            'Cuando estés cansado, recupera fuerzas y vuelve a levantarte.',
            'Cuando aparezcan las dudas, recuerda por qué comenzaste.'
          ]
        },

        {
          tipo: 'parrafo',
          lineas: [
            'No se trata de ignorar el dolor, el cansancio o las dificultades.',
            'Se trata de no permitir que ellos decidan tu destino.'
          ]
        },

        {
          tipo: 'frase-final',
          lineas: [
            'ACTÚA HASTA QUE TU REALIDAD COMIENCE A REFLEJAR AQUELLO POR LO QUE DECIDISTE LUCHAR.'
          ]
        },

        {
          tipo: 'parrafo',
          lineas: [
            'No esperes que las circunstancias sean perfectas.',
            'Da el siguiente paso.',
            'Y después otro.',
            'Y después otro.',
            'Porque muchas veces el cambio no comienza cuando aparecen las señales.',
            'COMIENZA CUANDO DECIDES ACTUAR.'
          ]
        }

      ],

      preguntaReflexion:
        '¿Qué acción estás postergando porque todavía no ves resultados o porque estás esperando que alguien crea en ti?',

      cierre:
        'Levántate. Actúa. Sigue avanzando.'

    },


    'el-exito-es-control-mental': {

      numero: '03',

      titulo: 'EL ÉXITO ES CONTROL MENTAL',

      categoria: 'MENTALIDAD, PROPÓSITO Y CRECIMIENTO',

      preguntaInicial:
        '¿Quién decide lo que ocupa tu mente?',

      bloques: [

        {
          tipo: 'parrafo',
          lineas: [
            'El éxito comienza con el control mental.',
            'Y control mental significa que yo decido y elijo qué pienso en cada momento.',
            'No siempre puedo controlar lo que sucede a mi alrededor, pero sí puedo decidir dónde pongo mi atención, qué pensamientos alimento y qué significado le doy a aquello que estoy viviendo.'
          ]
        },

        {
          tipo: 'destacado',
          lineas: [
            'PONGO MI ATENCIÓN EN LO POSITIVO Y NEUTRALIZO LO NEGATIVO.'
          ]
        },

        {
          tipo: 'parrafo',
          lineas: [
            'Porque donde va tu atención, va tu vida.',
            'Aquello a lo que prestas atención constantemente comienza a ocupar espacio en tu mente, en tus decisiones y en tus acciones.'
          ]
        },

        {
          tipo: 'destacado',
          lineas: [
            'ERES TU ATENCIÓN.'
          ]
        },

        {
          tipo: 'parrafo',
          lineas: [
            'Y cuanto más intensa, consciente y grande sea tu atención, así será la dirección de tu vida.',
            'Por eso debes aprender a dirigir tu mente.',
            'No permitas que cualquier pensamiento gobierne tus decisiones.',
            'No permitas que el miedo, la duda, el fracaso o las opiniones de otros determinen hasta dónde puedes llegar.'
          ]
        },

        {
          tipo: 'frase-central',
          lineas: [
            'TÚ DECIDES DÓNDE PONER TU ATENCIÓN.',
            'DONDE PONES TU ATENCIÓN, PONES TU ENERGÍA.',
            'DONDE PONES TU ENERGÍA, PONES TUS ACCIONES.'
          ]
        },

        {
          tipo: 'parrafo',
          lineas: [
            'Y tus acciones terminan construyendo tu realidad.',
            'Porque no existen los límites.',
            'Lo que existen son las limitaciones.',
            'Y muchas de esas limitaciones son mentales.'
          ]
        },

        {
          tipo: 'parrafo',
          lineas: [
            'Cuando cambias tu manera de pensar, comienzas a cambiar tu manera de actuar.',
            'Y cuando cambias tu manera de actuar, comienzas a cambiar tu vida.'
          ]
        },

        {
          tipo: 'frase-final',
          lineas: [
            'CONTROLA TU MENTE.',
            'DIRIGE TU ATENCIÓN.',
            'ELIGE TUS PENSAMIENTOS.',
            'Y CONSTRUYE LA VIDA QUE DECIDES VIVIR.'
          ]
        }

      ],

      preguntaReflexion:
        '¿En qué estás poniendo tu atención cada día y qué efecto está teniendo eso en tu vida?',

      cierre:
        'La decisión comienza contigo.'

    },

    'el-compromiso-no-depende-de-las-ganas': {

  numero: '04',

  titulo: 'EL COMPROMISO NO DEPENDE DE LAS GANAS',

  categoria: 'MENTALIDAD, PROPÓSITO Y CRECIMIENTO',

  preguntaInicial:
    '¿VAS A HACERLO SOLAMENTE CUANDO TENGAS GANAS?',

  bloques: [

    {
      tipo: 'parrafo',
      lineas: [
        'Cuesta.',
        'Obvio que cuesta.',
        'Hay días en los que no quieres hacerlo.',
        'Hay días en los que estás cansado, triste, preocupado o simplemente no tienes la misma energía que otros días.',
        'Y precisamente por eso existe el compromiso.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Porque si solamente haces aquello que debes hacer cuando tienes ganas, terminarás dependiendo de tus emociones para avanzar.',
        'El compromiso es hacerlo incluso cuando no tienes ganas.'
      ]
    },

    {
      tipo: 'frase-central',
      lineas: [
        'EL COMPROMISO ES HACERLO INCLUSO CUANDO NO TIENES GANAS.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'No significa que todos los días sean iguales.',
        'Hay días mejores que otros.',
        'Hay días en los que avanzarás con fuerza y habrá días en los que tendrás que avanzar más lentamente.',
        'Pero sigues.',
        'Porque tomaste una decisión.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'El compromiso aparece cuando decides que aquello que quieres construir merece más que una emoción momentánea.',
        'No necesitas sentirte motivado todos los días.',
        'Necesitas recordar por qué comenzaste.'
      ]
    },

    {
      tipo: 'frase-central',
      lineas: [
        'LA MOTIVACIÓN PUEDE IMPULSARTE.',
        'EL COMPROMISO TE HACE CONTINUAR.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Cuando tienes compromiso, no preguntas todos los días si tienes ganas.',
        'Preguntas:'
      ]
    },

    {
      tipo: 'destacado',
      lineas: [
        '¿QUÉ DEBO HACER HOY PARA CUMPLIR CON LO QUE DECIDÍ?'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Ahí comienza la disciplina.',
        'Porque la disciplina no consiste en sentirte fuerte todos los días.',
        'Consiste en mantener tu palabra contigo mismo incluso cuando el día no sea perfecto.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Habrá cansancio.',
        'Habrá dudas.',
        'Habrá dificultades.',
        'Habrá días en los que nadie reconocerá tu esfuerzo.',
        'Pero si tu compromiso depende de los aplausos, de la motivación o de cómo te sientes en ese momento, cualquier dificultad puede detenerte.'
      ]
    },

    {
      tipo: 'frase-central',
      lineas: [
        'EL COMPROMISO NO PREGUNTA SI TIENES GANAS.',
        'EL COMPROMISO RECUERDA LA DECISIÓN QUE TOMASTE.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Por eso, cuando llegue un día difícil, no pienses que estás fallando porque no tienes ganas.',
        'Recuerda que precisamente esos días son una oportunidad para demostrarte que puedes mantenerte firme.',
        'No se trata de obligarte a ignorar tus necesidades ni de actuar sin descanso.',
        'Se trata de entender que tus emociones pueden cambiar, pero tus decisiones también pueden tener dirección.'
      ]
    },

{
  tipo: 'frase-final',
  lineas: [
    'NO SIEMPRE VAS A TENER GANAS.',
    'PERO SIEMPRE PUEDES RECORDAR TU COMPROMISO.'
  ]
},

{
  tipo: 'destacado',
  lineas: [
    'QUIERO QUE RECUERDES ESTO CADA VEZ QUE SIENTAS GANAS DE ABANDONAR:',
    'LOS SUEÑOS GRANDES SIEMPRE EXIGEN SACRIFICIOS GRANDES.'
  ]
},

{
  tipo: 'parrafo',
  lineas: [
    'Mientras otros pierden el tiempo buscando excusas, tú puedes estar construyendo la vida que siempre imaginaste.',
    'Así que cuando sientas ganas de abandonar, recuerda por qué comenzaste.'
  ]
},

{
  tipo: 'frase-central',
  lineas: [
    'NO SIEMPRE TENDRÁS GANAS.',
    'PERO SIEMPRE PUEDES ELEGIR CONTINUAR.'
  ]
}

  ],

  preguntaReflexion:
    '¿Qué estás dejando de hacer porque estás esperando volver a tener ganas, cuando en realidad necesitas recuperar tu compromiso?',

  cierre:
    'La decisión comienza contigo.'

},

'el-entorno-tambien-te-forma': {

  numero: '05',

  titulo: 'EL ENTORNO TAMBIÉN TE FORMA',

  categoria: 'MENTALIDAD, PROPÓSITO Y CRECIMIENTO',

  preguntaInicial:
    '¿QUÉ ESTÁ ABSORBIENDO TU MENTE DEL ENTORNO QUE TE RODEA?',

  bloques: [

    {
      tipo: 'parrafo',
      lineas: [
        'Si pasas todo el día en un mercado de pescado, probablemente terminarás oliendo a pescado aunque nunca hayas tocado uno.',
        'Pero si pasas el día en una perfumería, hasta tu ropa puede quedarse con el aroma aunque no hayas comprado nada.',
        'Así funciona el entorno.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'No siempre necesitas participar.',
        'No siempre necesitas estar de acuerdo.',
        'A veces simplemente necesitas estar cerca.',
        'Y, poco a poco, el ambiente comienza a influir en ti.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Las conversaciones que escuchas.',
        'Las ideas que compartes.',
        'Las personas con las que pasas tu tiempo.',
        'Las actitudes que observas constantemente.',
        'Todo eso puede terminar formando parte de tu manera de pensar.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Si te rodeas constantemente de personas que se quejan de todo, puedes comenzar a mirar problemas donde antes veías posibilidades.',
        'Si te rodeas de personas que siempre encuentran una excusa, puedes comenzar a justificar tus propios límites.',
        'Si te rodeas de personas sin visión, poco a poco puedes empezar a conformarte con menos de lo que realmente quieres construir.'
      ]
    },

    {
      tipo: 'frase-central',
      lineas: [
        'EL ENTORNO PUEDE NORMALIZAR AQUELLO QUE ANTES NO ACEPTABAS.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Pero también funciona al contrario.',
        'Cuando te acercas a personas disciplinadas, comienzas a entender mejor el valor de la constancia.',
        'Cuando convives con personas con propósito, comienzas a cuestionarte qué estás construyendo con tu propia vida.',
        'Cuando estás cerca de personas que buscan aprender, crecer y superarse, algo dentro de ti también comienza a cambiar.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'No necesariamente ocurre de golpe.',
        'Ocurre poco a poco.',
        'Como ese aroma que no puedes ver, pero que termina quedándose en tu ropa.'
      ]
    },

    {
      tipo: 'frase-central',
      lineas: [
        'LO QUE TE RODEA TAMBIÉN ESTÁ FORMANDO EN QUIEN TE ESTÁS CONVIRTIENDO.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Por eso debes aprender a observar tu entorno.',
        'No se trata de despreciar a quienes piensan diferente.',
        'Tampoco significa alejarte de todo aquel que tenga dificultades.',
        'Significa ser consciente de qué influencias estás permitiendo que ocupen un lugar permanente en tu vida.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Porque tu entorno no determina completamente quién serás.',
        'Pero sí puede influir profundamente en la dirección que tomas.'
      ]
    },

    {
      tipo: 'frase-final',
      lineas: [
        'ELIGE BIEN LO QUE DEJAS ENTRAR EN TU MENTE.'
      ]
    }

  ],

  preguntaReflexion:
    '¿Las personas con las que más compartes están acercándote a la persona que quieres llegar a ser o te están alejando de ella?',

  cierre:
    'La decisión comienza contigo.'

}
};


  constructor(private route: ActivatedRoute) {

    const slug = this.route.snapshot.paramMap.get('slug');

    if (slug && this.reflexiones[slug]) {
      this.reflexion = this.reflexiones[slug];
    }

  }

}