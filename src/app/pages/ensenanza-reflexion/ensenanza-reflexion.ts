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

},

'nadie-gana-a-la-primera': {

  numero: '06',

  titulo: 'NADIE GANA A LA PRIMERA',

  categoria: 'MENTALIDAD, PROPÓSITO Y CRECIMIENTO',

  preguntaInicial:
    '¿CUÁNTAS VECES ESTÁS DISPUESTO A INTENTARLO ANTES DE DECIDIR QUE NO PUEDES?',

  bloques: [

    {
      tipo: 'parrafo',
      lineas: [
        'Los ganadores también han perdido.',
        'Antes de dominar una disciplina tuvieron que aprenderla.',
        'Antes de hacerlo bien, tuvieron que hacerlo mal.',
        'Antes de encontrar el camino correcto, tuvieron que equivocarse muchas veces.'
      ]
    },

    {
      tipo: 'frase-central',
      lineas: [
        'NADIE HACE NADA BIEN A LA PRIMERA.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Aprender significa intentar.',
        'Significa equivocarse.',
        'Significa corregir.',
        'Significa volver a intentarlo con lo que aprendiste del intento anterior.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'El problema no es cometer un error.',
        'El problema es convertir un error en una razón para abandonar.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Cada vez que fallas puedes obtener algo que el éxito inmediato nunca podría enseñarte:',
        'experiencia.'
      ]
    },

    {
      tipo: 'destacado',
      lineas: [
        'EXPERIENCIA.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'La experiencia te permite reconocer aquello que no funcionó.',
        'La disciplina te permite volver a intentarlo.',
        'Y la perseverancia te permite permanecer el tiempo suficiente para mejorar.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Nadie alcanza una gran meta con un solo intento.',
        'Nadie perfecciona su vida con una sola decisión.',
        'Nadie alcanza grandes alturas con un solo vuelo.',
        'El camino está lleno de correcciones.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Habrá pasos equivocados.',
        'Habrá decisiones que tendrás que revisar.',
        'Habrá momentos en los que tendrás que comenzar nuevamente.',
        'Y eso no significa que estés retrocediendo.',
        'Significa que estás aprendiendo.'
      ]
    },

    {
      tipo: 'frase-central',
      lineas: [
        'CAER NO TE DEFINE.',
        'LO QUE HACES DESPUÉS DE CAER, SÍ.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'No necesitas ser perfecto para comenzar.',
        'Necesitas estar dispuesto a aprender.',
        'No necesitas saberlo todo.',
        'Necesitas estar dispuesto a seguir desarrollándote.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Porque cada intento puede acercarte un poco más a aquello que quieres dominar.',
        'Y mientras continúes aprendiendo, corrigiendo y avanzando, un error no será el final de tu camino.',
        'Será parte de tu formación.'
      ]
    },

    {
      tipo: 'frase-final',
      lineas: [
        'LOS GANADORES NO SON LOS QUE NUNCA PIERDEN.',
        'SON LOS QUE APRENDEN, SE LEVANTAN Y VUELVEN A INTENTARLO.'
      ]
    }

  ],

  preguntaReflexion:
    '¿Qué estás a punto de abandonar simplemente porque todavía no te sale bien, cuando quizá lo que necesitas es seguir practicando y corregir el camino?',

  cierre:
    'La decisión comienza contigo.'

},

'fracasar-es-el-lujo-de-quien-hace': {

  numero: '07',

  titulo: 'FRACASAR ES EL LUJO DE QUIEN HACE',

  categoria: 'MENTALIDAD, PROPÓSITO Y CRECIMIENTO',

  preguntaInicial:
    '¿ESTÁS EN EL CAMPO O EN LAS GRADAS?',

  bloques: [

    {
      tipo: 'parrafo',
      lineas: [
        'Fracasar es el lujo de quien hace.',
        'De quien intenta.',
        'De quien se expone.',
        'Porque quien no hace nada puede evitar el fracaso, pero también evita construir algo.',
        'Puede pasar la vida observando, opinando y señalando a quienes sí están intentando.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Pero desde las gradas es fácil juzgar.',
        'Lo difícil es entrar al campo.'
      ]
    },

    {
      tipo: 'frase-central',
      lineas: [
        'QUIEN HACE, SE ARRIESGA.',
        'QUIEN SE ARRIESGA, PUEDE FALLAR.',
        'Y QUIEN FALLA, TIENE LA OPORTUNIDAD DE APRENDER.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Quien decide construir algo sigue adelante sin tener todas las garantías.',
        'No sabe exactamente qué ocurrirá.',
        'No sabe cuántas veces tendrá que corregir.',
        'No sabe cuántas veces tendrá que levantarse.',
        'Pero continúa.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Porque cada fracaso puede convertirse en información.',
        'Te muestra qué no funcionó.',
        'Te obliga a corregir.',
        'Te enseña.',
        'Te transforma.'
      ]
    },

    {
      tipo: 'destacado',
      lineas: [
        'NO TOMES EL FRACASO COMO UNA DERROTA.',
        'TÓMALO COMO INFORMACIÓN.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Los que más han construido no son necesariamente los que nunca cayeron.',
        'Muchas veces son aquellos que más veces tuvieron que levantarse.',
        'Cada caída puede convertirse en una lección.',
        'Cada error puede convertirse en experiencia.',
        'Cada intento puede acercarte un poco más a aquello que estás tratando de construir.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Por eso no sientas vergüenza por fracasar mientras estás intentando avanzar.',
        'Hay algo mucho más peligroso:'
      ]
    },

    {
      tipo: 'frase-central',
      lineas: [
        'TENER MIEDO A INTENTARLO Y PASAR LA VIDA OBSERVANDO A LOS DEMÁS.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Si estás fallando mientras aprendes, corriges y sigues avanzando, significa que estás en el juego.',
        'Estás haciendo.',
        'Estás intentando.',
        'Estás construyendo tu historia.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Mientras alguien desde las gradas puede tener muchas críticas, quien está en el campo tiene algo que el espectador nunca tendrá:',
        'experiencia.'
      ]
    },

    {
      tipo: 'destacado',
      lineas: [
        'EXPERIENCIA.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Así que sigue adelante.',
        'Corrige.',
        'Aprende.',
        'Vuelve a intentarlo.',
        'Levántate las veces que sea necesario.',
        'Porque el fracaso no significa que hayas perdido.',
        'A veces simplemente significa que tuviste el valor de intentarlo.'
      ]
    },

    {
      tipo: 'frase-final',
      lineas: [
        'FRACASAR ES EL LUJO DE QUIEN HACE.',
        'NO INTENTAR ES RENUNCIAR ANTES DE COMENZAR.'
      ]
    }

  ],

  preguntaReflexion:
    '¿Estás en el campo, dispuesto a intentar y aprender, o estás en las gradas observando y criticando a quienes sí están construyendo?',

  cierre:
    'La decisión comienza contigo.'

},

'no-renuncies-solo-porque-tarda': {

  numero: '08',

  titulo: 'NO RENUNCIES SOLO PORQUE TARDA',

  categoria: 'MENTALIDAD, PROPÓSITO Y CRECIMIENTO',

  preguntaInicial:
    '¿ESTÁS ABANDONANDO TU SUEÑO O SIMPLEMENTE SE TE ESTÁ AGOTANDO LA PACIENCIA?',

  bloques: [

    {
      tipo: 'parrafo',
      lineas: [
        'No renuncies a un sueño solo porque toma tiempo lograrlo.',
        'Vivimos en una época que celebra la velocidad.',
        'Queremos resultados rápidos, logros inmediatos y éxitos que puedan caber en una historia de diez segundos.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Y en medio de esa urgencia, muchos sueños mueren antes de florecer.',
        'No porque fueran imposibles.',
        'Sino porque tardaban demasiado.'
      ]
    },

    {
      tipo: 'frase-central',
      lineas: [
        'EL TIEMPO NO SIEMPRE ES EL OBSTÁCULO.',
        'MUCHAS VECES, EL TIEMPO ES PARTE DEL PROCESO.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'La espera puede doler.',
        'La duda puede aparecer.',
        'El mundo puede continuar a su propio ritmo mientras tú sientes que estás avanzando demasiado lento.',
        'Pero avanzar lento no significa estar detenido.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Hay procesos que necesitan tiempo para formar aquello que todavía no puedes ver.',
        'Hay sueños que necesitan paciencia.',
        'Hay metas que necesitan disciplina durante meses o incluso años antes de mostrar sus resultados.'
      ]
    },

    {
      tipo: 'destacado',
      lineas: [
        'LA PACIENCIA PUEDE SER AMARGA.',
        'PERO SU FRUTO PUEDE SER DULCE.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Y existe algo todavía más importante que debes recordar:',
        'muchos abandonan sin saber lo cerca que estaban de conseguir aquello por lo que habían trabajado durante tanto tiempo.'
      ]
    },

    {
      tipo: 'frase-central',
      lineas: [
        'A VECES NO ESTÁS LEJOS.',
        'A VECES SIMPLEMENTE ESTÁS CANSADO DE ESPERAR.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Por eso necesitas recordar tu porqué.',
        'Cuando tienes claridad sobre aquello que estás construyendo, el tiempo deja de ser solamente una espera.',
        'Se convierte en parte del camino.'
      ]
    },

    {
      tipo: 'destacado',
      lineas: [
        'QUIEN TIENE UN PORQUÉ PARA VIVIR',
        'PUEDE SOPORTAR CASI CUALQUIER CÓMO.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Si tu sueño tiene raíz.',
        'Si nace de algo verdadero dentro de ti.',
        'Si realmente sabes por qué quieres alcanzarlo.',
        'Entonces una demora no tiene por qué significar el final.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Puede significar que todavía necesitas aprender.',
        'Que necesitas crecer.',
        'Que necesitas corregir.',
        'Que necesitas fortalecer tu disciplina.',
        'O simplemente que todavía necesitas continuar.'
      ]
    },

    {
      tipo: 'frase-final',
      lineas: [
        'NO RENUNCIES A TU SUEÑO SOLO PORQUE ESTÁ TARDANDO.',
        'PREGÚNTATE SI REALMENTE SE TERMINÓ LA POSIBILIDAD',
        'O SI SIMPLEMENTE SE AGOTÓ TU PACIENCIA.'
      ]
    }

  ],

  preguntaReflexion:
    '¿Qué sueño estás considerando abandonar porque está tardando demasiado, cuando quizá lo que necesitas no es renunciar, sino recuperar la paciencia y recordar por qué comenzaste?',

  cierre:
    'La decisión comienza contigo.'

},

'nadie-puede-cambiar-por-ti': {

  numero: '09',

  titulo: 'NADIE PUEDE CAMBIAR POR TI',

  categoria: 'MENTALIDAD, PROPÓSITO Y CRECIMIENTO',

  preguntaInicial:
    '¿ESTÁS DISPUESTO A RECONOCER LO QUE NECESITAS CAMBIAR?',

  bloques: [

    {
      tipo: 'parrafo',
      lineas: [
        'No puedes cambiar a una persona que no reconoce sus propios errores.',
        'Tampoco puedes ayudar a alguien que no es capaz de ver el problema en sus propias acciones.',
        'Porque el verdadero cambio comienza desde adentro.'
      ]
    },

    {
      tipo: 'frase-central',
      lineas: [
        'EL CAMBIO COMIENZA CUANDO TIENES EL VALOR',
        'DE MIRARTE CON HONESTIDAD.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Reconocer un error no te hace menos valioso.',
        'Aceptar una falla no significa que hayas fracasado como persona.',
        'Significa que tienes la suficiente humildad para reconocer que todavía tienes algo que aprender.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'No puedes guiar a alguien hacia el crecimiento si esa persona no está dispuesta a mirarse honestamente.',
        'Si no quiere reflexionar sobre sus decisiones.',
        'Si no está dispuesta a reconocer el impacto de sus acciones.'
      ]
    },

    {
      tipo: 'destacado',
      lineas: [
        'NO SE PUEDE LLENAR UNA COPA',
        'QUE YA ESTÁ LLENA.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'El crecimiento personal requiere apertura.',
        'Requiere disposición para aprender.',
        'Requiere aceptar que no lo sabemos todo.',
        'Y requiere estar dispuesto a escuchar, observar y corregir.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Cuando una persona cree que siempre tiene la razón, cualquier enseñanza encuentra una barrera.',
        'Cuando cree que el problema siempre está afuera, nunca podrá trabajar aquello que necesita transformar por dentro.'
      ]
    },

    {
      tipo: 'frase-central',
      lineas: [
        'NO PUEDES TRANSFORMAR',
        'AQUELLO QUE TE NIEGAS A RECONOCER.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Cada uno de nosotros tiene imperfecciones.',
        'Todos tenemos comportamientos que podemos mejorar.',
        'Todos tenemos decisiones que podríamos haber tomado de otra manera.',
        'La diferencia está en lo que hacemos cuando tenemos el valor de reconocerlo.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Puedes justificarlo.',
        'Puedes culpar a otros.',
        'Puedes esconderlo.',
        'O puedes aprender de ello.'
      ]
    },

    {
      tipo: 'destacado',
      lineas: [
        'RECONOCER ES EL PRIMER PASO.',
        'APRENDER ES EL SIGUIENTE.',
        'CAMBIAR ES LA DECISIÓN.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'El cambio genuino y duradero ocurre cuando una persona reconoce que necesita mejorar y está dispuesta a hacer el trabajo necesario.',
        'Nadie puede hacer ese trabajo por ti.',
        'Otros pueden enseñarte.',
        'Pueden acompañarte.',
        'Pueden señalarte aquello que quizá no estás viendo.',
        'Pero la decisión de cambiar siempre será personal.'
      ]
    },

    {
      tipo: 'frase-final',
      lineas: [
        'NO PUEDES CAMBIAR A QUIEN NO QUIERE CAMBIAR.',
        'PERO SÍ PUEDES DECIDIR COMENZAR POR TI.'
      ]
    }

  ],

  preguntaReflexion:
    '¿Qué error, comportamiento o actitud necesitas reconocer en ti para poder comenzar un cambio que llevas tiempo esperando de los demás?',

  cierre:
    'La decisión comienza contigo.'

},

'no-juzgues-sin-conocer-la-historia': {

  numero: '10',

  titulo: 'NO JUZGUES SIN CONOCER LA HISTORIA',

  categoria: 'MENTALIDAD, PROPÓSITO Y CRECIMIENTO',

  preguntaInicial:
    '¿CUÁNTAS VECES HAS JUZGADO UNA ACCIÓN SIN CONOCER LO QUE HABÍA DETRÁS DE ELLA?',

  bloques: [

    {
      tipo: 'parrafo',
      lineas: [
        'María Pilar era una mujer de gran riqueza y tenía un jardín lleno de rosas raras.',
        'Entre todas sus flores había una que consideraba especialmente valiosa.',
        'Pero cada día, a la misma hora, esa rosa desaparecía.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Pensando que alguien estaba robándola, decidió descubrir al responsable.',
        'Se escondió detrás de una estatua y esperó.',
        'Entonces apareció un niño pequeño, descalzo y con la ropa sucia.',
        'El niño entró en la propiedad, tomó cuidadosamente la rosa más roja y salió.'
      ]
    },

    {
      tipo: 'frase-central',
      lineas: [
        'MARÍA PILAR VIO UN ROBO.',
        'PERO TODAVÍA NO CONOCÍA LA HISTORIA.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Furiosa, decidió seguir al niño.',
        'Lo vio llegar hasta la parte trasera de un hospital público.',
        'Entonces observó algo que cambió completamente su manera de entender lo que estaba sucediendo.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'El niño entró en una habitación y se acercó a una cama.',
        'Allí estaba su pequeña hermana, enfrentando una enfermedad grave.',
        'El niño colocó la rosa junto a ella y le dijo:',
        '“Te traje la flor mágica del castillo del hada. Mientras la tengas, vas a mejorar.”'
      ]
    },

    {
      tipo: 'destacado',
      lineas: [
        'LA MISMA ACCIÓN.',
        'UNA HISTORIA COMPLETAMENTE DIFERENTE.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Para María Pilar, aquella rosa representaba una pérdida.',
        'Para aquel niño, representaba esperanza.',
        'Lo que parecía un simple acto de robo era, desde otra perspectiva, un gesto de amor hacia la persona que más quería.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'María Pilar comprendió entonces que había juzgado antes de conocer.',
        'Había visto la acción, pero no había visto la necesidad.',
        'Había protegido una flor, pero no había comprendido el valor que aquella flor tenía para alguien más.'
      ]
    },

    {
      tipo: 'frase-central',
      lineas: [
        'ANTES DE JUZGAR UNA ACCIÓN,',
        'INTENTA COMPRENDER LA HISTORIA.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Aquel día decidió ayudar a los dos hermanos.',
        'La niña recibió la atención médica que necesitaba y el niño dejó de tener que enfrentar solo aquella situación.',
        'Con el tiempo, aquella casa que antes estaba llena de silencio comenzó a llenarse de vida.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'La historia también cambió a María Pilar.',
        'Comprendió que aquello que había acumulado durante años tenía mucho más valor cuando podía convertirse en ayuda para alguien más.'
      ]
    },

    {
      tipo: 'destacado',
      lineas: [
        'LA VERDADERA RIQUEZA NO ESTÁ SOLAMENTE',
        'EN LO QUE PUEDES GUARDAR,',
        'SINO EN LO QUE PUEDES COMPARTIR.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Todos podemos caer en el error de juzgar demasiado rápido.',
        'Vemos una conducta y creemos conocer la intención.',
        'Vemos un resultado y creemos conocer todo el proceso.',
        'Pero detrás de muchas acciones existe una historia que todavía no conocemos.'
      ]
    },

    {
      tipo: 'frase-final',
      lineas: [
        'NO JUZGUES SOLO LO QUE VES.',
        'BUSCA COMPRENDER LO QUE NO ESTÁS VIENDO.'
      ]
    }

  ],

  preguntaReflexion:
    '¿A quién estás juzgando por lo que hace sin detenerte a comprender qué puede estar viviendo, pensando o enfrentando?',

  cierre:
    'La decisión comienza contigo.'

},

'algunas-personas-crean-gloria-para-otros': {

  numero: '11',

  titulo: 'ALGUNAS PERSONAS CREAN GLORIA PARA OTROS',

  categoria: 'MENTALIDAD, PROPÓSITO Y CRECIMIENTO',

  preguntaInicial:
    '¿ESTÁS DISPUESTO A AYUDAR A OTROS A LLEGAR MÁS LEJOS, INCLUSO CUANDO TÚ NO RECIBAS EL RECONOCIMIENTO?',

  bloques: [

    {
      tipo: 'parrafo',
      lineas: [
        'Dos amigos compartían el mismo sueño.',
        'No buscaban dinero ni fama.',
        'Solo querían jugar al fútbol y algún día convertirse en profesionales.',
        'Entrenaban juntos todos los días, lloviera o hiciera sol, convencidos de que algún día tendrían una oportunidad.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Y la oportunidad llegó.',
        'A los 17 años, unos ojeadores los estaban observando jugar.',
        'Pero había un problema:',
        'solo quedaba una plaza.'
      ]
    },

    {
      tipo: 'frase-central',
      lineas: [
        'DOS SUEÑOS.',
        'UNA SOLA OPORTUNIDAD.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'La regla era sencilla: quien marcara más goles se quedaría con el contrato.',
        'Uno de ellos marcó primero.',
        'Después marcó el otro.',
        'El partido llegó a sus últimos minutos y todo parecía decidirse en una última jugada.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Entonces uno de ellos quedó frente al portero.',
        'Tenía una oportunidad clara para marcar.',
        'Todos esperaban que disparara.',
        'Pero hizo algo inesperado:',
        'pasó el balón a su amigo.'
      ]
    },

    {
      tipo: 'frase-central',
      lineas: [
        'PUDO ELEGIR SU PROPIA GLORIA.',
        'Y DECIDIÓ AYUDAR A OTRO A ALCANZARLA.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'El gol fue marcado.',
        'El partido terminó.',
        'Y la oportunidad fue para quien recibió aquel pase.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Después del partido llegó la pregunta:',
        '¿Por qué lo hiciste?',
        '¿Por qué renunciaste a tu propia oportunidad?'
      ]
    },

    {
      tipo: 'destacado',
      lineas: [
        '“PORQUE TÚ ERES MEJOR QUE YO',
        'Y CREO EN TI.”'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Quizá nunca sepamos cuántas decisiones silenciosas como esa han cambiado la vida de una persona.',
        'Hay personas que aparecen en nuestra historia y no buscan estar en el centro.',
        'No necesitan el reconocimiento.',
        'No necesitan que todos sepan lo que hicieron.'
      ]
    },

    {
      tipo: 'frase-central',
      lineas: [
        'A VECES TU MAYOR LEGADO',
        'ES AYUDAR A ALGUIEN MÁS A LLEGAR MÁS LEJOS.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Eso también es liderazgo.',
        'Entender que crecer no significa necesariamente avanzar solo.',
        'Significa aprender a reconocer el potencial de otros, abrir oportunidades, compartir conocimiento y acompañar procesos.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'No todas las personas que hacen historia aparecen en la fotografía final.',
        'Algunas estuvieron detrás.',
        'Dieron una oportunidad.',
        'Compartieron una enseñanza.',
        'Hicieron un sacrificio.',
        'Creyeron en alguien cuando todavía nadie más lo hacía.'
      ]
    },

    {
      tipo: 'destacado',
      lineas: [
        'ALGUNAS PERSONAS NO PERSIGUEN LA GLORIA.',
        'LA CREAN PARA OTROS.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Y quizá ahí exista una de las formas más profundas de liderazgo:',
        'no preguntarte solamente hasta dónde puedes llegar tú,',
        'sino preguntarte a cuántas personas puedes ayudar a llegar más lejos.'
      ]
    },

    {
      tipo: 'frase-final',
      lineas: [
        'EL VERDADERO LEGADO NO SIEMPRE ES LO QUE CONSIGUES.',
        'TAMBIÉN ES LO QUE AYUDAS A CONSTRUIR EN LOS DEMÁS.'
      ]
    }

  ],

  preguntaReflexion:
    '¿A quién podrías ayudar hoy con tu conocimiento, tu tiempo, tu experiencia o simplemente creyendo en esa persona cuando todavía no cree completamente en sí misma?',

  cierre:
    'La decisión comienza contigo.'

},

'cuando-algo-es-innegociable-encuentras-el-camino': {

  numero: '12',

  titulo: 'CUANDO ALGO ES INNEGOCIABLE, ENCUENTRAS EL CAMINO',

  categoria: 'MENTALIDAD, PROPÓSITO Y CRECIMIENTO',

  preguntaInicial:
    '¿QUÉ TAN INNEGOCIABLE ES REALMENTE AQUELLO QUE DICES QUE QUIERES?',

  bloques: [

    {
      tipo: 'parrafo',
      lineas: [
        'Hay personas que, cuando realmente quieren conseguir algo, buscan la manera.',
        'Si aparece un obstáculo, buscan otra ruta.',
        'Si una puerta se cierra, buscan otra.',
        'Si no saben cómo hacerlo, aprenden.'
      ]
    },

    {
      tipo: 'frase-central',
      lineas: [
        'CUANDO ALGO ES REALMENTE IMPORTANTE PARA TI,',
        'DEJAS DE BUSCAR EXCUSAS Y COMIENZAS A BUSCAR CAMINOS.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Ahora pregúntate algo incómodo:',
        '¿cómo es posible que algunas personas tengan tanta determinación para perseguir aquello que desean, mientras tú abandonas aquello que dices que es importante al primer obstáculo?'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Muchas veces el problema no es que no puedas.',
        'El problema es que el obstáculo resulta incómodo.',
        'Y cuando algo se vuelve incómodo, comienzas a negociar contigo mismo.'
      ]
    },

    {
      tipo: 'destacado',
      lineas: [
        'NO SIEMPRE TE DETIENE LA DIFICULTAD.',
        'A VECES TE DETIENE LA FALTA DE DECISIÓN.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Dices que quieres cambiar.',
        'Dices que quieres progresar.',
        'Dices que quieres cumplir tus sueños.',
        'Pero cuando aparece el cansancio, el miedo, la incomodidad o el primer problema, comienzas a buscar razones para detenerte.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Por eso necesitas preguntarte:',
        '¿qué cosas son realmente innegociables para mí?',
        'Porque cuando algo se vuelve verdaderamente importante, cambia la manera en que respondes ante los obstáculos.'
      ]
    },

    {
      tipo: 'frase-central',
      lineas: [
        'LA MOTIVACIÓN PUEDE DESAPARECER.',
        'EL COMPROMISO DEBE PERMANECER.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'No necesitas sentirte motivado todos los días.',
        'No necesitas tener el escenario perfecto.',
        'No necesitas esperar a sentirte preparado.',
        'Necesitas claridad sobre lo que quieres construir y disciplina para seguir avanzando cuando el camino se vuelva incómodo.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Una idea puede convertirse en un proyecto.',
        'Un proyecto puede convertirse en una empresa.',
        'Un aprendizaje puede convertirse en una habilidad.',
        'Y una persona común puede desarrollar capacidades extraordinarias.'
      ]
    },

    {
      tipo: 'destacado',
      lineas: [
        'TODO COMIENZA CON LA MENTE.',
        'PERO LA MENTE DEBE CONVERTIRSE EN ACCIÓN.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'No se trata de pensar que todo será fácil.',
        'Se trata de cambiar la forma en que interpretas los obstáculos.',
        'En lugar de preguntar:',
        '“¿Por qué esto me está pasando?”',
        'comienza a preguntar:',
        '“¿Qué puedo hacer ahora?”'
      ]
    },

    {
      tipo: 'frase-central',
      lineas: [
        'CAMBIA LA PREGUNTA.',
        'CAMBIA TU RESPUESTA.',
        'CAMBIA TU ACCIÓN.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'La diferencia no siempre está en quién tiene más recursos.',
        'Muchas veces está en quién está dispuesto a aprender, adaptarse, insistir y seguir buscando una solución.'
      ]
    },

    {
      tipo: 'frase-final',
      lineas: [
        'CUANDO DECIDES QUÉ ES INNEGOCIABLE,',
        'DEJAS DE PREGUNTAR SI PUEDES.',
        'COMIENZAS A BUSCAR CÓMO.'
      ]
    }

  ],

  preguntaReflexion:
    '¿Qué estás tratando como opcional cuando en realidad deberías convertirlo en un compromiso innegociable para construir la vida que dices querer?',

  cierre:
    'La decisión comienza contigo.'

},

'ya-no-soy-quien-era': {

  numero: '13',

  titulo: 'YA NO SOY QUIEN ERA',

  categoria: 'MENTALIDAD, PROPÓSITO Y CRECIMIENTO',

  preguntaInicial:
    '¿CUÁNTO HAS CAMBIADO DESDE LA ÚLTIMA VEZ QUE PENSASTE EN RENDIRTE?',

  bloques: [

    {
      tipo: 'parrafo',
      lineas: [
        'Cada vez que alguien me dijo “no puedes”, descubrí una razón más para intentarlo.',
        'No porque necesitara demostrarle algo a esa persona.',
        'Sino porque cada “no puedes” me obligó a preguntarme qué era realmente capaz de hacer.'
      ]
    },

    {
      tipo: 'frase-central',
      lineas: [
        'A VECES UN “NO PUEDES”',
        'SE CONVIERTE EN UNA RAZÓN MÁS PARA INTENTARLO.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'También están las caídas.',
        'Esos momentos en los que algo no salió como esperabas.',
        'Momentos que duelen, que frustran y que pueden hacerte dudar de ti mismo.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Pero algunas de las lecciones más importantes no aparecen cuando todo sale bien.',
        'Aparecen cuando tienes que levantarte.',
        'Cuando tienes que analizar lo ocurrido.',
        'Cuando tienes que corregir.',
        'Cuando tienes que decidir si vuelves a intentarlo.'
      ]
    },

    {
      tipo: 'destacado',
      lineas: [
        'CADA CAÍDA PUEDE ENSEÑARTE',
        'ALGO QUE EL ÉXITO NO PODRÍA ENSEÑARTE.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'No avanzo porque todo sea fácil.',
        'Avanzo porque aprendí que algunas veces rendirme dolería más que seguir.'
      ]
    },

    {
      tipo: 'frase-central',
      lineas: [
        'NO SIEMPRE SIGO PORQUE SEA FÁCIL.',
        'SIGO PORQUE TODAVÍA VALE LA PENA.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Quizá todavía no estoy donde quiero llegar.',
        'Quizá todavía faltan muchas cosas por aprender.',
        'Quizá todavía existen obstáculos que superar.',
        'Pero hay algo que ya cambió.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Ya no soy la misma persona que era cuando comencé.',
        'Ya no pienso exactamente igual.',
        'Ya no enfrento las dificultades de la misma manera.',
        'Ya aprendí cosas que antes no sabía.',
        'Y ya descubrí que puedo levantarme después de caer.'
      ]
    },

    {
      tipo: 'destacado',
      lineas: [
        'TAL VEZ TODAVÍA NO ESTÉS DONDE QUIERES LLEGAR.',
        'PERO YA NO ERES QUIEN ERAS CUANDO PENSASTE EN RENDIRTE.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Eso también es avanzar.',
        'Porque no todo progreso puede medirse por lo que ya conseguiste.',
        'Algunas veces el progreso está en la persona en la que te estás convirtiendo.'
      ]
    },

    {
      tipo: 'frase-final',
      lineas: [
        'SIGUE AVANZANDO.',
        'SIGUE APRENDIENDO.',
        'SIGUE CONSTRUYENDO.',
        'PORQUE CADA VEZ QUE TE LEVANTAS,',
        'YA NO ERES LA MISMA PERSONA QUE CAYÓ.'
      ]
    }

  ],

  preguntaReflexion:
    '¿Qué has aprendido de las veces que pensaste en rendirte y cómo te ha transformado aquello que todavía estás atravesando?',

  cierre:
    'La decisión comienza contigo.'

},

'creete-capaz': {

  numero: '14',

  titulo: 'CRÉETE CAPAZ',

  categoria: 'MENTALIDAD, PROPÓSITO Y CRECIMIENTO',

  preguntaInicial:
    '¿CUÁNTO DE LO QUE QUIERES CONSEGUIR YA LO DESCARTASTE PORQUE NO CREES SER CAPAZ?',

  bloques: [

    {
      tipo: 'parrafo',
      lineas: [
        'Créetelo.',
        'No importa solamente lo que otros piensen de ti.',
        'No importa solamente lo que otros digan que puedes o no puedes hacer.',
        'También importa aquello que tú has comenzado a creer sobre ti mismo.'
      ]
    },

    {
      tipo: 'frase-central',
      lineas: [
        'ANTES DE CONSTRUIR ALGO AFUERA,',
        'NECESITAS DEJAR DE DESTRUIRLO DENTRO DE TI.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Créete capaz.',
        'Créete capaz de aprender.',
        'Créete capaz de mejorar.',
        'Créete capaz de superar obstáculos.',
        'Créete capaz de levantarte cuando caigas.',
        'Créete capaz de convertirte en alguien diferente a quien eres hoy.'
      ]
    },

    {
      tipo: 'destacado',
      lineas: [
        'NO NECESITAS SER EL MEJOR PARA COMENZAR.',
        'NECESITAS CREER QUE PUEDES MEJORAR.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Creer en ti no significa pensar que eres superior a los demás.',
        'Significa reconocer que tienes capacidad para crecer.',
        'Significa dejar de ponerte límites antes de haberlo intentado.',
        'Significa permitirte descubrir hasta dónde puedes llegar.'
      ]
    },

    {
      tipo: 'frase-central',
      lineas: [
        'CREER EN TI NO ES SENTIRTE SUPERIOR.',
        'ES NEGARTE A SENTIRTE INFERIOR ANTES DE INTENTARLO.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Créete único.',
        'No porque nadie sea más importante que tú.',
        'Sino porque tu historia, tus experiencias, tus capacidades y el camino que estás construyendo son tuyos.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Créete capaz de conseguir aquello que te propongas.',
        'Pero recuerda algo:',
        'creer no sustituye al trabajo.',
        'La confianza necesita acción.',
        'La visión necesita disciplina.',
        'Y los sueños necesitan convertirse en decisiones.'
      ]
    },

    {
      tipo: 'destacado',
      lineas: [
        'CREER TE PONE EN MOVIMIENTO.',
        'LA DISCIPLINA TE MANTIENE EN EL CAMINO.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Habrá personas que duden.',
        'Habrá personas que te digan que no puedes.',
        'Habrá momentos en los que incluso tú mismo tendrás dudas.',
        'Pero no permitas que una duda momentánea se convierta en una sentencia sobre tu futuro.'
      ]
    },

    {
      tipo: 'frase-final',
      lineas: [
        'CRÉETE CAPAZ.',
        'CRÉETE DISPUESTO A APRENDER.',
        'CRÉETE DISPUESTO A TRABAJAR.',
        'Y DESPUÉS, DEMUÉSTRATELO CON ACCIONES.'
      ]
    }

  ],

  preguntaReflexion:
    '¿Qué objetivo has estado limitando porque todavía no crees que eres capaz de conseguirlo y qué acción concreta podrías realizar hoy para demostrarte que sí puedes avanzar?',

  cierre:
    'La decisión comienza contigo.'

},

'mientras-haya-vida-hay-otra-oportunidad': {

  numero: '15',

  titulo: 'MIENTRAS HAYA VIDA, HAY OTRA OPORTUNIDAD',

  categoria: 'MENTALIDAD, PROPÓSITO Y CRECIMIENTO',

  preguntaInicial:
    '¿QUÉ VOLVERÍAS A INTENTAR SI DECIDIERAS QUE TODAVÍA NO ES DEMASIADO TARDE?',

  bloques: [

    {
      tipo: 'parrafo',
      lineas: [
        'Mientras tengas vida, tienes una nueva oportunidad.',
        'Una oportunidad para intentarlo.',
        'Para aprender.',
        'Para crecer.',
        'Para dar un paso más hacia aquello que quieres construir.'
      ]
    },

    {
      tipo: 'frase-central',
      lineas: [
        'MIENTRAS ESTÉS AQUÍ,',
        'TODAVÍA PUEDES VOLVER A INTENTARLO.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'No importa cuántas veces hayas tropezado.',
        'No importa cuántas veces algo no haya salido como esperabas.',
        'Una caída no tiene por qué convertirse en el final de tu historia.'
      ]
    },

    {
      tipo: 'destacado',
      lineas: [
        'EL PASADO PUEDE EXPLICAR DE DÓNDE VIENES.',
        'PERO NO TIENE POR QUÉ DECIDIR HACIA DÓNDE VAS.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Cada día puede convertirse en una nueva página.',
        'Una página que todavía no has escrito.',
        'Una oportunidad para tomar mejores decisiones.',
        'Para corregir aquello que no funcionó.',
        'Para comenzar algo que habías dejado pendiente.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Las caídas pueden dejar marcas.',
        'Pero también pueden dejar aprendizajes.',
        'Pueden enseñarte lo que no viste antes.',
        'Pueden mostrarte aquello que necesitas cambiar.',
        'Y pueden hacerte más consciente de la persona en la que quieres convertirte.'
      ]
    },

    {
      tipo: 'frase-central',
      lineas: [
        'NO TODA CAÍDA ES EL FINAL.',
        'ALGUNAS CAÍDAS SON EL COMIENZO DE UNA NUEVA ETAPA.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'No necesitas avanzar a la misma velocidad que los demás.',
        'No necesitas dar un salto enorme todos los días.',
        'A veces basta con dar un pequeño paso.'
      ]
    },

    {
      tipo: 'destacado',
      lineas: [
        'UN PASO PEQUEÑO SIGUE SIENDO UN PASO.',
        'MIENTRAS SIGAS AVANZANDO, ESTÁS CONSTRUYENDO.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Quizá hoy algo que quieres construir parece demasiado difícil.',
        'Quizá todavía no sabes cómo hacerlo.',
        'Quizá has cometido errores.',
        'Pero no confundas “todavía no lo he conseguido” con “nunca lo conseguiré”.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Confía en tu capacidad de aprender.',
        'Confía en tu capacidad de corregir.',
        'Confía en tu capacidad de volver a levantarte.',
        'Y convierte esa confianza en acción.'
      ]
    },

    {
      tipo: 'frase-final',
      lineas: [
        'MIENTRAS HAYA VIDA, HAY OTRA OPORTUNIDAD.',
        'MIENTRAS HAYA DECISIÓN, HAY UN CAMINO QUE TODAVÍA PUEDES CONSTRUIR.'
      ]
    }

  ],

  preguntaReflexion:
    '¿Qué estás considerando perdido cuando todavía tienes la oportunidad de aprender, volver a intentarlo y dar un nuevo paso?',

  cierre:
    'La decisión comienza contigo.'

},

// 16
'atrevete-a-construir-lo-que-todavia-no-existe': {
  numero: '16',
  titulo: 'ATRÉVETE A CONSTRUIR LO QUE TODAVÍA NO EXISTE',
      categoria: 'MENTALIDAD, PROPÓSITO Y CRECIMIENTO',

      preguntaInicial:
        '¿QUÉ SUEÑO HAS DEJADO DE PERSEGUIR PORQUE OTROS TE HICIERON CREER QUE ERA IMPOSIBLE?',

      bloques: [

        {
          tipo: 'parrafo',
          lineas: [
            'Cuando era niña, Zaha Hadid imaginaba un futuro que para muchos parecía imposible.',
            'Soñaba con construir edificios que parecieran desafiar las formas tradicionales de la arquitectura.',
            'Mientras otros podían verlo como una fantasía, ella decidió convertir aquella visión en una profesión.'
          ]
        },

        {
          tipo: 'parrafo',
          lineas: [
            'Nació en Bagdad, Irak, y posteriormente se trasladó a Londres para estudiar arquitectura.',
            'Sus ideas eran diferentes. Sus diseños eran audaces. Y durante mucho tiempo, muchas personas dudaron de que aquellas formas pudieran convertirse realmente en edificios.'
          ]
        },

        {
          tipo: 'destacado',
          lineas: [
            'NO TODAS LAS PERSONAS ENTENDERÁN TU VISIÓN.',
            'Y ESO NO SIGNIFICA QUE TU VISIÓN ESTÉ EQUIVOCADA.'
          ]
        },

        {
          tipo: 'parrafo',
          lineas: [
            'Durante años tuvo que enfrentar dificultades profesionales y proyectos que no llegaban.',
            'Pero siguió desarrollando sus ideas, perfeccionando su trabajo y defendiendo una manera diferente de entender la arquitectura.'
          ]
        },

        {
          tipo: 'parrafo',
          lineas: [
            'Finalmente llegó una oportunidad que ayudó a cambiar su trayectoria: la estación de bomberos de Vitra, en Alemania.',
            'Aquello que podía parecer pequeño frente a sus grandes sueños terminó convirtiéndose en una obra que llamó la atención internacional.'
          ]
        },

        {
          tipo: 'frase-central',
          lineas: [
            'A VECES UNA PEQUEÑA OPORTUNIDAD',
            'ES EL COMIENZO DE UNA GRAN HISTORIA.'
          ]
        },

        {
          tipo: 'parrafo',
          lineas: [
            'Con el tiempo, sus diseños comenzaron a aparecer en diferentes partes del mundo.',
            'Aquellas formas que alguna vez parecieron demasiado radicales terminaron convirtiéndose en parte de su identidad y de su legado.'
          ]
        },

        {
          tipo: 'parrafo',
          lineas: [
            'La historia de Zaha Hadid nos recuerda algo importante:',
            'no necesitas que todos comprendan tu visión para comenzar a construirla.'
          ]
        },

        {
          tipo: 'destacado',
          lineas: [
            'PRIMERO NECESITAS VERLO EN TU MENTE.',
            'DESPUÉS NECESITAS TENER LA DISCIPLINA PARA CONSTRUIRLO EN LA REALIDAD.'
          ]
        },

        {
          tipo: 'parrafo',
          lineas: [
            'Las personas pueden decirte que es demasiado grande.',
            'Que es demasiado difícil.',
            'Que nadie lo ha hecho.',
            'Que deberías conformarte con algo más sencillo.'
          ]
        },

        {
          tipo: 'parrafo',
          lineas: [
            'Pero una visión verdaderamente importante muchas veces comienza precisamente así: como algo que todavía no existe.'
          ]
        },

        {
          tipo: 'frase-central',
          lineas: [
            'NO NECESITAS QUE TODOS CREAN EN TU VISIÓN.',
            'NECESITAS CREER LO SUFICIENTE PARA TRABAJAR POR ELLA.'
          ]
        },

        {
          tipo: 'parrafo',
          lineas: [
            'Porque soñar es solamente el comienzo.',
            'La diferencia aparece cuando decides aprender, trabajar, corregir, insistir y seguir construyendo incluso cuando todavía no ves los resultados.'
          ]
        },

        {
          tipo: 'frase-final',
          lineas: [
            'ATRÉVETE A IMAGINAR LO QUE OTROS TODAVÍA NO PUEDEN VER.',
            'Y DESPUÉS, TEN LA DISCIPLINA PARA CONSTRUIRLO.'
          ]
        }

      ],

      preguntaReflexion:
        '¿Qué sueño has comenzado a abandonar porque otras personas no creen en él, y qué podrías hacer hoy para volver a construirlo paso a paso?',

      cierre:
        'La decisión comienza contigo.'
    },

        // 17
    'no-solo-trabajes-mas-aprende-a-pensar-diferente': {
      numero: '17',
      titulo: 'NO SOLO TRABAJES MÁS, APRENDE A PENSAR DIFERENTE',
      categoria: 'MENTALIDAD, PROPÓSITO Y CRECIMIENTO',

      preguntaInicial:
        '¿ESTÁS INTENTANDO CONSEGUIR MÁS RESULTADOS TRABAJANDO MÁS, CUANDO QUIZÁ NECESITAS APRENDER A PENSAR Y ACTUAR DE OTRA MANERA?',

      bloques: [

        {
          tipo: 'parrafo',
          lineas: [
            'Una persona puede trabajar muy duro durante todo el día y aun así avanzar muy poco.',
            'Otra puede comenzar con los mismos recursos, pero preguntarse algo diferente: ¿cómo puedo hacer que mi esfuerzo produzca un resultado mayor?'
          ]
        },

        {
          tipo: 'parrafo',
          lineas: [
            'La historia de la mina de oro plantea precisamente esa diferencia.',
            'Dos personas reciben la misma oportunidad y comienzan enfrentando el mismo desafío.'
          ]
        },

        {
          tipo: 'parrafo',
          lineas: [
            'Una decide hacer todo el trabajo por sí misma.',
            'La otra observa el problema, identifica una forma diferente de resolverlo y comienza a utilizar el trabajo de otras personas para multiplicar su capacidad.'
          ]
        },

        {
          tipo: 'destacado',
          lineas: [
            'TRABAJAR DURO ES IMPORTANTE.',
            'PERO TRABAJAR DURO SIN APRENDER A PENSAR MEJOR PUEDE MANTENERTE EN EL MISMO LUGAR.'
          ]
        },

        {
          tipo: 'parrafo',
          lineas: [
            'Aquí aparece una diferencia fundamental entre esfuerzo y estrategia.',
            'El esfuerzo te permite producir.',
            'La estrategia te permite encontrar mejores formas de producir.'
          ]
        },

        {
          tipo: 'frase-central',
          lineas: [
            'NO SE TRATA SOLAMENTE DE TRABAJAR MÁS.',
            'SE TRATA DE APRENDER A HACER QUE TU TRABAJO TENGA MAYOR ALCANCE.'
          ]
        },

        {
          tipo: 'parrafo',
          lineas: [
            'Cuando una persona aprende, adquiere herramientas que pueden cambiar la manera en la que enfrenta los problemas.',
            'Aprende de los libros que lee, de las personas que conoce, de los caminos que recorre y, sobre todo, de las experiencias que decide analizar.'
          ]
        },

        {
          tipo: 'parrafo',
          lineas: [
            'Por eso la educación no consiste solamente en acumular información.',
            'Consiste en desarrollar la capacidad de comprender, decidir, crear estrategias y encontrar nuevas soluciones.'
          ]
        },

        {
          tipo: 'destacado',
          lineas: [
            'EL CONOCIMIENTO NO SUSTITUYE EL TRABAJO.',
            'TE ENSEÑA A UTILIZAR MEJOR EL TRABAJO.'
          ]
        },

        {
          tipo: 'parrafo',
          lineas: [
            'Si siempre haces todo tú mismo, tu capacidad estará limitada por tu propio tiempo, energía y conocimiento.',
            'Pero cuando aprendes a organizar, delegar, colaborar y construir procesos, puedes ampliar aquello que eres capaz de conseguir.'
          ]
        },

        {
          tipo: 'parrafo',
          lineas: [
            'Esto no significa buscar dinero fácil ni esperar resultados sin esfuerzo.',
            'Significa comprender que el crecimiento sostenible necesita algo más que esfuerzo: necesita claridad, aprendizaje, disciplina y estrategia.'
          ]
        },

        {
          tipo: 'frase-central',
          lineas: [
            'EL ESFUERZO TE PONE EN MOVIMIENTO.',
            'EL CONOCIMIENTO TE AYUDA A ENCONTRAR EL CAMINO.',
            'LA ESTRATEGIA TE PERMITE MULTIPLICAR TU CAPACIDAD.'
          ]
        },

        {
          tipo: 'parrafo',
          lineas: [
            'Por eso no enseñes solamente a una persona a obedecer y esforzarse.',
            'Enséñale también a pensar, preguntar, aprender, resolver problemas, tomar decisiones y crear valor.'
          ]
        },

        {
          tipo: 'parrafo',
          lineas: [
            'Porque una persona que solamente sabe trabajar puede depender siempre de alguien que le diga qué hacer.',
            'Una persona que aprende a pensar puede comenzar a encontrar nuevas posibilidades.'
          ]
        },

        {
          tipo: 'frase-final',
          lineas: [
            'NO DEJES DE TRABAJAR DURO.',
            'PERO TAMPOCO DEJES DE APRENDER A PENSAR MEJOR.',
            'PORQUE EL CRECIMIENTO COMIENZA CUANDO TU ESFUERZO SE UNE AL CONOCIMIENTO Y A LA ESTRATEGIA.'
          ]
        }

      ],

      preguntaReflexion:
        '¿Qué parte de tu vida estás intentando mejorar solamente con más esfuerzo, cuando quizá necesitas adquirir nuevos conocimientos, cambiar tu estrategia o aprender a trabajar de una manera diferente?',

      cierre:
        'La decisión comienza contigo.'
    },

        // 18
    'no-tienes-que-ser-grande-para-empezar': {
      numero: '18',
      titulo: 'NO TIENES QUE SER GRANDE PARA EMPEZAR',
      categoria: 'MENTALIDAD, PROPÓSITO Y CRECIMIENTO',

      preguntaInicial:
        '¿QUÉ ESTÁS ESPERANDO SENTIR O TENER PARA COMENZAR?',

      bloques: [

        {
          tipo: 'frase-central',
          lineas: [
            'NO TIENES QUE SER GRANDE PARA EMPEZAR.',
            'PERO TIENES QUE EMPEZAR PARA SER GRANDE.'
          ]
        },

        {
          tipo: 'parrafo',
          lineas: [
            'Muchas veces esperamos sentirnos preparados.',
            'Esperamos tener más conocimiento, más recursos, más seguridad o mejores condiciones.',
            'Y mientras esperamos estar listos, dejamos pasar el tiempo.'
          ]
        },

        {
          tipo: 'destacado',
          lineas: [
            'NO SIEMPRE VAS A SENTIRTE LISTO.',
            'A VECES TIENES QUE COMENZAR PARA DESCUBRIR DE QUÉ ERES CAPAZ.'
          ]
        },

        {
          tipo: 'parrafo',
          lineas: [
            'Todo comienza con una decisión.',
            'No necesitas conocer todo el camino para dar el primer paso.',
            'Necesitas tener suficiente claridad para saber hacia dónde quieres avanzar.'
          ]
        },

        {
          tipo: 'parrafo',
          lineas: [
            'El crecimiento ocurre mientras avanzas.',
            'Comienzas aprendiendo.',
            'Te equivocas.',
            'Corriges.',
            'Vuelves a intentarlo.',
            'Y poco a poco desarrollas capacidades que antes no tenías.'
          ]
        },

        {
          tipo: 'frase-central',
          lineas: [
            'EL PRIMER PASO NO TIENE QUE SER PERFECTO.',
            'TIENE QUE SER REAL.'
          ]
        },

        {
          tipo: 'parrafo',
          lineas: [
            'Un pequeño comienzo puede parecer insignificante cuando lo comparas con el resultado que imaginas.',
            'Pero todo proyecto, toda habilidad, toda empresa y todo gran camino tuvo alguna vez un primer paso.'
          ]
        },

        {
          tipo: 'destacado',
          lineas: [
            'NO DESPRECIES LOS COMIENZOS PEQUEÑOS.',
            'MUCHAS GRANDES HISTORIAS COMENZARON CON UNA DECISIÓN QUE PARECÍA PEQUEÑA.'
          ]
        },

        {
          tipo: 'parrafo',
          lineas: [
            'La constancia transforma ese pequeño comienzo.',
            'Lo que hoy parece poco puede convertirse en experiencia.',
            'La experiencia puede convertirse en conocimiento.',
            'Y el conocimiento, acompañado de disciplina, puede abrir nuevas posibilidades.'
          ]
        },

        {
          tipo: 'parrafo',
          lineas: [
            'No necesitas saber exactamente dónde terminarás.',
            'Necesitas estar dispuesto a comenzar y aprender mientras avanzas.'
          ]
        },

        {
          tipo: 'frase-final',
          lineas: [
            'DA EL PRIMER PASO.',
            'APRENDE EN EL CAMINO.',
            'MANTENTE CONSTANTE.',
            'Y PERMITE QUE ESE PEQUEÑO COMIENZO SE CONVIERTA EN ALGO GRANDE.'
          ]
        }

      ],

      preguntaReflexion:
        '¿Qué estás esperando para comenzar y cuál es el primer paso pequeño que puedes dar hoy, aunque todavía no te sientas completamente preparado?',

      cierre:
        'La decisión comienza contigo.'
    },

        // 19
    'si-no-sabes-que-quieres-no-sabes-hacia-donde-avanzar': {
      numero: '19',
      titulo: 'SI NO SABES QUÉ QUIERES, NO SABES HACIA DÓNDE AVANZAR',
      categoria: 'MENTALIDAD, PROPÓSITO Y CRECIMIENTO',

      preguntaInicial:
        '¿TIENES CLARO QUÉ QUIERES CONSEGUIR O SOLAMENTE SABES QUE QUIERES QUE TU VIDA CAMBIE?',

      bloques: [

        {
          tipo: 'parrafo',
          lineas: [
            'Hay personas que pasan años esforzándose, pero sienten que no avanzan.',
            'Trabajan, intentan diferentes cosas y enfrentan dificultades, pero después de mucho tiempo todavía no saben exactamente hacia dónde están llevando su vida.'
          ]
        },

        {
          tipo: 'destacado',
          lineas: [
            'NO TODO PROBLEMA DE AVANCE ES FALTA DE ESFUERZO.',
            'A VECES ES FALTA DE CLARIDAD.'
          ]
        },

        {
          tipo: 'parrafo',
          lineas: [
            'Puedes tener mucha energía, muchas ganas y mucha capacidad para trabajar.',
            'Pero si no tienes claro qué quieres construir, es fácil dispersarte entre diferentes caminos y terminar avanzando sin una dirección definida.'
          ]
        },

        {
          tipo: 'frase-central',
          lineas: [
            'ANTES DE PREGUNTAR “¿CÓMO LO VOY A CONSEGUIR?”',
            'NECESITAS RESPONDER “¿QUÉ QUIERO CONSEGUIR?”'
          ]
        },

        {
          tipo: 'parrafo',
          lineas: [
            'Napoleon Hill dedicó gran parte de su trabajo a estudiar los principios que, según sus investigaciones y escritos, estaban presentes en personas que habían alcanzado grandes objetivos.',
            'Uno de los conceptos centrales de su obra fue el deseo definido: saber qué quieres y convertirlo en un objetivo concreto.'
          ]
        },

        {
          tipo: 'parrafo',
          lineas: [
            'No es lo mismo decir “quiero mejorar mi situación” que definir exactamente qué quieres cambiar.',
            'No es lo mismo decir “quiero ganar más dinero” que establecer una meta concreta, un plazo y una estrategia para trabajar hacia ella.'
          ]
        },

        {
          tipo: 'destacado',
          lineas: [
            'UN DESEO VAGO PRODUCE ACCIONES VAGAS.',
            'UNA META CLARA TE PERMITE TOMAR DECISIONES MÁS CONCRETAS.'
          ]
        },

        {
          tipo: 'parrafo',
          lineas: [
            'Haz un ejercicio sencillo.',
            'Escribe qué quieres lograr durante los próximos seis meses.',
            'No escribas solamente “quiero mejorar”. Define qué significa mejorar para ti.'
          ]
        },

        {
          tipo: 'parrafo',
          lineas: [
            'Puedes escribirlo de manera concreta: qué quieres conseguir, para cuándo quieres conseguirlo y qué estás dispuesto a hacer para acercarte a ese resultado.'
          ]
        },

        {
          tipo: 'frase-central',
          lineas: [
            'LO QUE NO DEFINES, DIFÍCILMENTE PUEDES DIRIGIRLO.',
            'LO QUE DEFINES, PUEDES EMPEZAR A TRABAJARLO.'
          ]
        },

        {
          tipo: 'parrafo',
          lineas: [
            'Leer diariamente aquello que quieres conseguir puede ayudarte a mantener presente tu objetivo.',
            'Pero repetir una meta no la convierte automáticamente en realidad.',
            'La claridad necesita convertirse en decisiones, y las decisiones necesitan convertirse en acciones.'
          ]
        },

        {
          tipo: 'parrafo',
          lineas: [
            'Si sabes qué quieres, puedes preguntarte qué necesitas aprender.',
            'Qué debes cambiar.',
            'Qué debes dejar de hacer.',
            'A quién necesitas acercarte.',
            'Y qué acción concreta puedes realizar hoy.'
          ]
        },

        {
          tipo: 'destacado',
          lineas: [
            'LA CLARIDAD NO GARANTIZA EL RESULTADO.',
            'PERO SIN CLARIDAD ES MUCHO MÁS DIFÍCIL CONSTRUIR UNA DIRECCIÓN.'
          ]
        },

        {
          tipo: 'frase-final',
          lineas: [
            'DEFINE LO QUE QUIERES.',
            'DECIDE HACIA DÓNDE VAS.',
            'Y DESPUÉS, CONSTRUYE EL CAMINO CON ACCIONES.'
          ]
        }

      ],

      preguntaReflexion:
        '¿Qué quieres conseguir realmente durante los próximos seis meses y qué decisión concreta necesitas tomar hoy para comenzar a avanzar hacia ello?',

      cierre:
        'La decisión comienza contigo.'
    },

        // 20
    'un-paso-mas': {
      numero: '20',
      titulo: 'UN PASO MÁS',
      categoria: 'MENTALIDAD, PROPÓSITO Y CRECIMIENTO',

      preguntaInicial:
        '¿CUÁNTAS VECES HAS PENSADO EN RENDIRTE JUSTO ANTES DE DAR UN PASO MÁS?',

      bloques: [

        {
          tipo: 'frase-central',
          lineas: [
            'NO TE RINDAS SOLO PORQUE EL CAMINO SE VOLVIÓ DIFÍCIL.',
            'A VECES LO QUE NECESITAS ES DAR UN PASO MÁS.'
          ]
        },

        {
          tipo: 'parrafo',
          lineas: [
            'En algún momento todos encontramos obstáculos que nos hacen preguntarnos si vale la pena continuar.',
            'Hay días en los que avanzar parece fácil y otros en los que simplemente levantarte y seguir ya representa un esfuerzo enorme.'
          ]
        },

        {
          tipo: 'destacado',
          lineas: [
            'NO IMPORTA SOLAMENTE CUÁNTAS VECES CAES.',
            'TAMBIÉN IMPORTA CUÁNTAS VECES DECIDES LEVANTARTE.'
          ]
        },

        {
          tipo: 'parrafo',
          lineas: [
            'Una caída puede enseñarte algo que todavía no habías comprendido.',
            'Un error puede mostrarte lo que necesitas corregir.',
            'Un fracaso puede convertirse en experiencia si decides aprender de él.'
          ]
        },

        {
          tipo: 'frase-central',
          lineas: [
            'CADA CAÍDA PUEDE SER UN MAESTRO.',
            'CADA FRACASO PUEDE CONVERTIRSE EN UNA LECCIÓN.'
          ]
        },

        {
          tipo: 'parrafo',
          lineas: [
            'Superación no significa que nunca vas a sentir cansancio, miedo o frustración.',
            'Significa aprender a reconocer esas emociones sin permitir que ellas decidan por completo el rumbo de tu vida.'
          ]
        },

        {
          tipo: 'parrafo',
          lineas: [
            'Habrá momentos en los que tendrás que avanzar con más fuerza.',
            'Otros en los que necesitarás detenerte, aprender, reorganizarte y volver a comenzar.',
            'Continuar no siempre significa correr. A veces significa simplemente no abandonar tu dirección.'
          ]
        },

        {
          tipo: 'destacado',
          lineas: [
            'NO NECESITAS RESOLVER TODA TU VIDA HOY.',
            'A VECES SOLO NECESITAS DAR EL SIGUIENTE PASO.'
          ]
        },

        {
          tipo: 'parrafo',
          lineas: [
            'Cuando sientas que ya no puedes más, recuerda por qué comenzaste.',
            'Recuerda lo que estás construyendo.',
            'Recuerda todo lo que ya has superado y todo lo que has aprendido en el camino.'
          ]
        },

        {
          tipo: 'parrafo',
          lineas: [
            'Y si tu fe forma parte de tu camino, también puedes recordar que no tienes que enfrentar cada batalla sintiendo que estás completamente solo.'
          ]
        },

        {
          tipo: 'frase-central',
          lineas: [
            'CUANDO CREAS QUE YA NO PUEDES MÁS,',
            'NO DECIDAS TU FUTURO DESDE EL CANSANCIO DE ESTE MOMENTO.'
          ]
        },

        {
          tipo: 'parrafo',
          lineas: [
            'Descansa si necesitas descansar.',
            'Aprende si necesitas aprender.',
            'Corrige si necesitas corregir.',
            'Pero cuando llegue el momento de continuar, vuelve a dar un paso.'
          ]
        },

        {
          tipo: 'frase-final',
          lineas: [
            'NO NECESITAS SER INVENCIBLE.',
            'NECESITAS ESTAR DISPUESTO A LEVANTARTE.',
            'Y CUANDO TODO PAREZCA DEMASIADO DIFÍCIL, DA UN PASO MÁS.'
          ]
        }

      ],

      preguntaReflexion:
        '¿Qué situación estás pensando abandonar y qué significaría para ti dar un paso más antes de tomar esa decisión?',

      cierre:
        'La decisión comienza contigo.'
    },

    'creer-en-ti-no-es-suficiente-pero-es-el-comienzo': {
  numero: '21',
  titulo: 'CREER EN TI NO ES SUFICIENTE, PERO ES EL COMIENZO',
  categoria: 'MENTALIDAD, PROPÓSITO Y CRECIMIENTO',

  preguntaInicial:
    '¿REALMENTE CREES QUE PUEDES LLEGAR A SER LA PERSONA QUE QUIERES SER?',

  bloques: [

    {
      tipo: 'frase-central',
      lineas: [
        'SI NO CREES QUE PUEDES LLEGAR LEJOS,',
        'SERÁ MUCHO MÁS DIFÍCIL QUE TE ATREVAS A INTENTARLO.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Antes de alcanzar cualquier objetivo, necesitas creer que es posible para ti.',
        'No significa pensar que eres superior a los demás.',
        'Significa reconocer que tienes la capacidad de aprender, mejorar y desarrollar aquello que todavía no dominas.'
      ]
    },

    {
      tipo: 'destacado',
      lineas: [
        'CREER EN TI NO SIGNIFICA PENSAR QUE YA ERES EL MEJOR.',
        'SIGNIFICA CREER QUE PUEDES TRABAJAR PARA CONVERTIRTE EN TU MEJOR VERSIÓN.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Muchas personas abandonan antes de comenzar porque ya decidieron que no pueden.',
        'Se comparan con quienes llevan años de experiencia y concluyen que nunca podrán llegar hasta allí.',
        'Pero olvidan algo importante: nadie comienza siendo experto.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'La confianza puede darte el valor para comenzar.',
        'Puede ayudarte a enfrentar el miedo.',
        'Puede permitirte seguir intentando cuando otros dudan de ti.'
      ]
    },

    {
      tipo: 'frase-central',
      lineas: [
        'PERO CREER EN TI NO CONSTRUYE EL RESULTADO.',
        'LO CONSTRUYEN TUS DECISIONES, TU DISCIPLINA Y TU ACCIÓN.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Puedes decir que vas a ser el mejor.',
        'Puedes imaginar el éxito.',
        'Puedes repetir todos los días que eres capaz.',
        'Pero si no estás dispuesto a aprender, trabajar, corregir y mantenerte constante, esa confianza se queda solamente en palabras.'
      ]
    },

    {
      tipo: 'destacado',
      lineas: [
        'LA MENTALIDAD TE DA DIRECCIÓN.',
        'LA DISCIPLINA TE MANTIENE EN EL CAMINO.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Habrá días en los que no tendrás motivación.',
        'Habrá momentos en los que aparecerán dudas.',
        'Y habrá personas que no crean en lo que estás construyendo.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'En esos momentos no necesitas convencer al mundo de que puedes.',
        'Necesitas demostrarte a ti mismo, mediante tus acciones, que estás dispuesto a seguir trabajando por aquello que quieres conseguir.'
      ]
    },

    {
      tipo: 'frase-central',
      lineas: [
        'NO DIGAS SOLAMENTE “VOY A SER EL MEJOR”.',
        'PREGÚNTATE: “¿QUÉ ESTOY HACIENDO HOY PARA ACERCARME A SERLO?”'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Porque la verdadera confianza no nace solamente de repetir palabras positivas.',
        'También nace de cumplir las promesas que haces contigo mismo.',
        'Cada vez que estudias cuando dijiste que estudiarías, entrenas cuando dijiste que entrenarías o continúas cuando pensabas abandonar, fortaleces la confianza en ti mismo.'
      ]
    },

    {
      tipo: 'destacado',
      lineas: [
        'LA CONFIANZA SE FORTALECE CUANDO TUS ACCIONES DEMUESTRAN QUE PUEDES CONFIAR EN TI.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'No necesitas ser el mejor hoy.',
        'Necesitas estar dispuesto a aprender de quienes saben más, trabajar sobre tus debilidades y desarrollar tus fortalezas.',
        'Con el tiempo, esa combinación de mentalidad y disciplina puede llevarte mucho más lejos de lo que imaginabas.'
      ]
    },

    {
      tipo: 'frase-final',
      lineas: [
        'CREE EN TI.',
        'TRABAJA POR TI.',
        'DISCIPLÍNATE.',
        'Y DEJA QUE TUS RESULTADOS HABLEN POR TI.'
      ]
    }

  ],

  preguntaReflexion:
    '¿En qué área de tu vida necesitas creer más en ti y qué acción concreta puedes realizar hoy para demostrarte que realmente estás dispuesto a trabajar por ello?',

  cierre:
    'La decisión comienza contigo.'
},

'una-meta-clara-cambia-tus-decisiones': {
  numero: '22',
  titulo: 'UNA META CLARA CAMBIA TUS DECISIONES',
  categoria: 'MENTALIDAD, PROPÓSITO Y CRECIMIENTO',

  preguntaInicial:
    '¿TIENES UNA META CLARA O SOLAMENTE UNA IDEA GENERAL DE LO QUE QUIERES CONSEGUIR?',

  bloques: [

    {
      tipo: 'frase-central',
      lineas: [
        'SI NO SABES HACIA DÓNDE VAS,',
        'CUALQUIER CAMINO PUEDE PARECER CORRECTO.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Muchas personas quieren mejorar su vida, alcanzar sus sueños y conseguir mejores resultados.',
        'Pero cuando les preguntas exactamente qué quieren conseguir, no tienen una respuesta clara.'
      ]
    },

    {
      tipo: 'destacado',
      lineas: [
        'UN DESEO SIN DIRECCIÓN PUEDE CONVERTIRSE EN DISTRACCIÓN.',
        'UNA META CLARA PUEDE CONVERTIRSE EN UNA GUÍA.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Cuando defines una meta concreta, comienzas a mirar tus decisiones de otra manera.',
        'Ya no preguntas solamente qué te gusta hacer.',
        'También empiezas a preguntarte qué te acerca realmente al lugar al que quieres llegar.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Eso cambia la manera en la que utilizas tu tiempo.',
        'Cambias lo que consumes.',
        'Cambias las personas a las que escuchas.',
        'Cambias aquello a lo que dices sí y aquello a lo que decides decir no.'
      ]
    },

    {
      tipo: 'frase-central',
      lineas: [
        'CUANDO TIENES CLARIDAD SOBRE TU DESTINO,',
        'ES MÁS FÁCIL RECONOCER QUÉ CAMINOS NO TE LLEVAN HACIA ÉL.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Tener una meta no significa que todo será fácil.',
        'Tampoco significa que el camino será exactamente como lo imaginaste.',
        'Significa que tienes un punto de referencia para corregir cuando aparezcan obstáculos o nuevas decisiones.'
      ]
    },

    {
      tipo: 'destacado',
      lineas: [
        'LA CLARIDAD NO ELIMINA LOS OBSTÁCULOS.',
        'TE AYUDA A NO PERDERTE ENTRE ELLOS.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Por eso es importante establecer metas que puedas comprender y medir.',
        'No solamente digas “quiero crecer”.',
        'Pregúntate qué significa crecer para ti.',
        'Qué quieres conseguir.',
        'En cuánto tiempo.',
        'Y qué estás dispuesto a hacer para acercarte a ese resultado.'
      ]
    },

    {
      tipo: 'frase-central',
      lineas: [
        'UNA META CLARA CONVIERTE UN SUEÑO',
        'EN UNA DIRECCIÓN DE TRABAJO.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Cada mañana puedes preguntarte algo sencillo:',
        '¿Lo que estoy haciendo hoy me acerca o me aleja de aquello que quiero conseguir?'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'No todas las actividades que realizas tienen el mismo valor.',
        'Algunas te acercan a tu objetivo.',
        'Otras simplemente consumen tu tiempo y tu energía.'
      ]
    },

    {
      tipo: 'destacado',
      lineas: [
        'CLARIDAD ES SABER QUÉ QUIERES.',
        'DISCIPLINA ES HACER LO QUE NECESITAS PARA ACERCARTE A ELLO.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Cuando sabes exactamente qué estás construyendo, tus decisiones pueden volverse más firmes.',
        'No porque tengas todas las respuestas, sino porque tienes una dirección que te permite evaluar cada paso.'
      ]
    },

    {
      tipo: 'frase-final',
      lineas: [
        'DEFINE TU META.',
        'PROTEGE TU DIRECCIÓN.',
        'ORDENA TUS DECISIONES.',
        'Y AVANZA CADA DÍA HACIA LO QUE REALMENTE QUIERES CONSTRUIR.'
      ]
    }

  ],

  preguntaReflexion:
    '¿Cuál es la meta más importante que quieres conseguir y qué decisión necesitas tomar hoy para acercarte realmente a ella?',

  cierre:
    'La decisión comienza contigo.'
},

'entrena-tu-mente-no-dejes-que-las-circunstancias-te-gobiernen': {
  numero: '23',
  titulo: 'ENTRENA TU MENTE, NO DEJES QUE LAS CIRCUNSTANCIAS TE GOBIERNEN',
  categoria: 'MENTALIDAD, PROPÓSITO Y CRECIMIENTO',

  preguntaInicial:
    '¿CUÁNTO PODER ESTÁS PERMITIENDO QUE TENGAN LAS CIRCUNSTANCIAS SOBRE TU ESTADO MENTAL?',

  bloques: [

    {
      tipo: 'frase-central',
      lineas: [
        'NO PUEDES CONTROLAR TODO LO QUE OCURRE.',
        'PERO PUEDES ENTRENAR LA FORMA EN QUE RESPONDES.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'La vida siempre tendrá dificultades.',
        'Habrá días complicados, errores, pérdidas, decepciones y situaciones que no podrás cambiar.',
        'Eso forma parte de la experiencia de cualquier persona.'
      ]
    },

    {
      tipo: 'destacado',
      lineas: [
        'EL PROBLEMA NO SIEMPRE ESTÁ EN LO QUE OCURRE.',
        'A VECES ESTÁ EN LA FORMA EN QUE PERMITIMOS QUE ESO NOS AFECTE.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Cuando un pequeño problema puede arruinar completamente tu día, quizá no necesitas cambiar todo lo que ocurre a tu alrededor.',
        'Quizá necesitas comenzar a trabajar en la manera en que interpretas y enfrentas aquello que ocurre.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Es fácil pensar que todo está en nuestra contra cuando las cosas no salen como esperábamos.',
        'Pero una situación difícil no tiene por qué convertirse automáticamente en un día perdido.',
        'Puedes detenerte, respirar, observar lo que está ocurriendo y decidir cuál será tu siguiente respuesta.'
      ]
    },

    {
      tipo: 'frase-central',
      lineas: [
        'UNA MENTE ENTRENADA NO EVITA LOS PROBLEMAS.',
        'APRENDE A ENFRENTARLOS CON MAYOR CLARIDAD.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Controlar tu mente no significa dejar de sentir.',
        'No significa ignorar el dolor, fingir que todo está bien o negar lo que estás viviendo.',
        'Significa aprender a no permitir que una emoción momentánea tome todas tus decisiones.'
      ]
    },

    {
      tipo: 'destacado',
      lineas: [
        'SENTIR NO ES EL PROBLEMA.',
        'PERMITIR QUE CADA EMOCIÓN DECIDA POR TI PUEDE CONVERTIRSE EN EL PROBLEMA.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Cuando aparece la frustración, puedes aprender a hacer una pausa.',
        'Cuando aparece el miedo, puedes preguntarte qué puedes hacer a pesar de él.',
        'Cuando aparece un error, puedes buscar qué necesitas aprender.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Con práctica, comienzas a comprender que no todo merece la misma reacción.',
        'Hay cosas que necesitan una solución.',
        'Hay cosas que necesitan paciencia.',
        'Y hay cosas que simplemente necesitas aceptar y dejar pasar.'
      ]
    },

    {
      tipo: 'frase-central',
      lineas: [
        'NO TODO LO QUE TE MOLESTA',
        'MERECE CONTROLAR TU PAZ.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Las personas fuertes no son aquellas que nunca se derrumban.',
        'Son aquellas que desarrollan la capacidad de recuperar el equilibrio después de una dificultad.',
        'Aprenden, corrigen, continúan y vuelven a intentarlo.'
      ]
    },

    {
      tipo: 'destacado',
      lineas: [
        'LA FORTALEZA MENTAL NO SIGNIFICA NO CAER.',
        'SIGNIFICA APRENDER A RECUPERAR EL EQUILIBRIO.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Cada dificultad puede convertirse en una oportunidad para conocerte mejor.',
        'Puede mostrarte qué necesitas fortalecer, qué debes cambiar y qué todavía necesitas aprender.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Por eso entrenar la mente también es parte de la superación.',
        'Aprender a respirar antes de reaccionar.',
        'Pensar antes de decidir.',
        'Observar antes de juzgar.',
        'Y buscar una solución antes de rendirte.'
      ]
    },

    {
      tipo: 'frase-final',
      lineas: [
        'FORTALECE TU MENTE.',
        'NO PUEDES ELEGIR TODAS LAS CIRCUNSTANCIAS.',
        'PERO PUEDES ENTRENAR LA PERSONA QUE DECIDES SER FRENTE A ELLAS.'
      ]
    }

  ],

  preguntaReflexion:
    '¿Qué situación reciente permitió que una circunstancia controlara demasiado tu estado de ánimo y cómo podrías responder de una manera diferente la próxima vez?',

  cierre:
    'La decisión comienza contigo.'
},

'si-te-duele-crecer-imagina-quedarte-igual': {
  numero: '24',
  titulo: 'SI TE DUELE CRECER, IMAGINA QUEDARTE IGUAL',
  categoria: 'MENTALIDAD, PROPÓSITO Y CRECIMIENTO',

  preguntaInicial:
    '¿QUÉ TE DUELE MÁS: EL ESFUERZO DE CAMBIAR O LA IDEA DE SEGUIR IGUAL DENTRO DE CINCO AÑOS?',

  bloques: [

    {
      tipo: 'frase-central',
      lineas: [
        'SI TE DUELE CRECER,',
        'IMAGINA QUEDARTE IGUAL.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Crecer no siempre resulta cómodo.',
        'Cambiar hábitos cuesta.',
        'Aprender algo nuevo puede frustrarte.',
        'Salir de aquello que conoces puede producir miedo e inseguridad.'
      ]
    },

    {
      tipo: 'destacado',
      lineas: [
        'LA INCOMODIDAD NO SIEMPRE SIGNIFICA QUE VAS POR MAL CAMINO.',
        'A VECES SIGNIFICA QUE ESTÁS APRENDIENDO ALGO NUEVO.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Piensa en una habilidad que hoy dominas.',
        'Probablemente hubo un momento en el que no sabías cómo hacerlo.',
        'Tuviste que practicar, equivocarte, corregir y repetir hasta conseguir algo que antes parecía difícil.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'El crecimiento funciona de una manera parecida.',
        'Para convertirte en una persona diferente, muchas veces tendrás que hacer cosas que tu versión actual todavía no se siente preparada para hacer.'
      ]
    },

    {
      tipo: 'frase-central',
      lineas: [
        'EL ESFUERZO DE CAMBIAR PUEDE SER DIFÍCIL.',
        'PERO TAMBIÉN PUEDE SER EL PRECIO DE NO QUEDARTE EN EL MISMO LUGAR.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Ahora imagina que pasan cinco años.',
        'Y sigues teniendo los mismos hábitos.',
        'Las mismas excusas.',
        'Los mismos miedos.',
        'Las mismas decisiones.',
        'Y los mismos resultados.'
      ]
    },

    {
      tipo: 'destacado',
      lineas: [
        'PREGÚNTATE QUÉ TE DOLERÍA MÁS:',
        'EL ESFUERZO DE CAMBIAR HOY O EL ARREPENTIMIENTO DE NO HABERLO INTENTADO.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'La comodidad puede sentirse bien en el presente.',
        'Pero permanecer constantemente en ella puede impedirte desarrollar capacidades que todavía no conoces en ti.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Cada vez que decides aprender algo nuevo, enfrentar un miedo, cambiar un hábito o asumir una responsabilidad mayor, estás saliendo de una versión conocida de ti mismo.'
      ]
    },

    {
      tipo: 'frase-central',
      lineas: [
        'NO BUSQUES UNA VIDA SIN INCOMODIDAD.',
        'BUSCA UNA VIDA EN LA QUE LA INCOMODIDAD TENGA UN PROPÓSITO.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Eso no significa aceptar cualquier sufrimiento ni ignorar tus límites.',
        'Significa reconocer que algunas cosas difíciles son necesarias para aprender, crecer y avanzar.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'La nueva versión de ti no aparece de un día para otro.',
        'Se construye cada vez que eliges hacer lo que necesitas hacer, incluso cuando todavía no resulta cómodo.'
      ]
    },

    {
      tipo: 'destacado',
      lineas: [
        'CADA HÁBITO QUE CAMBIAS.',
        'CADA HABILIDAD QUE APRENDES.',
        'CADA MIEDO QUE ENFRENTAS.',
        'PUEDE FORMAR PARTE DE LA PERSONA EN LA QUE TE ESTÁS CONVIRTIENDO.'
      ]
    },

    {
      tipo: 'frase-final',
      lineas: [
        'ACEPTA EL ESFUERZO.',
        'APRENDE DE LA INCOMODIDAD.',
        'NO TE CONFORMES CON QUEDARTE IGUAL.',
        'Y CONSTRUYE, PASO A PASO, TU NUEVA VERSIÓN.'
      ]
    }

  ],

  preguntaReflexion:
    '¿Qué cambio estás posponiendo por comodidad y cómo podría cambiar tu vida si decidieras comenzar a trabajarlo desde hoy?',

  cierre:
    'La decisión comienza contigo.'
},

'el-error-no-te-define-lo-que-haces-despues-si': {
  numero: '25',
  titulo: 'EL ERROR NO TE DEFINE, LO QUE HACES DESPUÉS SÍ',
  categoria: 'MENTALIDAD, PROPÓSITO Y CRECIMIENTO',

  preguntaInicial:
    '¿QUÉ HACES DESPUÉS DE COMETER UN ERROR?',

  bloques: [

    {
      tipo: 'frase-central',
      lineas: [
        'TODOS NOS EQUIVOCAMOS.',
        'PERO NO TODOS RESPONDEMOS DE LA MISMA MANERA.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Cometer un error forma parte de aprender, decidir y avanzar.',
        'Nadie toma siempre la decisión correcta.',
        'Nadie tiene todas las respuestas.',
        'Y nadie puede recorrer un camino sin encontrarse alguna vez con una equivocación.'
      ]
    },

    {
      tipo: 'destacado',
      lineas: [
        'EL ERROR PUEDE SER UN MOMENTO.',
        'NO TIENE POR QUÉ CONVERTIRSE EN TU IDENTIDAD.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'El verdadero problema aparece cuando utilizas un error como una razón para dejar de intentarlo.',
        'Cuando dices “no sirvo para esto”, “siempre me pasa lo mismo” o “ya no vale la pena”, estás convirtiendo una experiencia en una sentencia sobre tu futuro.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Una persona puede equivocarse y buscar culpables.',
        'Otra puede detenerse y preguntarse qué ocurrió.',
        'Qué pudo hacer diferente.',
        'Qué necesita aprender.',
        'Y qué puede corregir la próxima vez.'
      ]
    },

    {
      tipo: 'frase-central',
      lineas: [
        'EL ERROR NO ES EL FINAL.',
        'PUEDE SER INFORMACIÓN PARA EL SIGUIENTE INTENTO.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Eso no significa justificar los errores ni evitar asumir responsabilidad.',
        'Significa reconocerlos con honestidad, reparar cuando sea necesario y aprender de aquello que ocurrió.'
      ]
    },

    {
      tipo: 'destacado',
      lineas: [
        'RECONOCER UN ERROR NO TE HACE MÁS PEQUEÑO.',
        'TE DA LA OPORTUNIDAD DE CRECER.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'A veces tendrás que pedir disculpas.',
        'A veces tendrás que cambiar una decisión.',
        'A veces tendrás que comenzar nuevamente.',
        'Y otras veces tendrás que aceptar que una lección aprendida llegó después de haber cometido un error.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Lo importante es no desperdiciar la experiencia.',
        'Si vas a equivocarte, asegúrate de aprender algo que te permita hacerlo mejor la próxima vez.'
      ]
    },

    {
      tipo: 'frase-central',
      lineas: [
        'NO PUEDES CAMBIAR EL ERROR QUE YA OCURRIÓ.',
        'PERO PUEDES DECIDIR QUÉ HARÁS CON LO QUE APRENDISTE.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Las personas que avanzan también se equivocan.',
        'La diferencia está en que no permiten que una caída determine todo su camino.',
        'Corrigen, aprenden y vuelven a intentarlo con mayor conocimiento.'
      ]
    },

    {
      tipo: 'destacado',
      lineas: [
        'NO BUSQUES UNA VIDA SIN ERRORES.',
        'CONSTRUYE UNA VIDA EN LA QUE SEPAS APRENDER DE ELLOS.'
      ]
    },

    {
      tipo: 'frase-final',
      lineas: [
        'ACEPTA EL ERROR.',
        'ASUME LA RESPONSABILIDAD.',
        'APRENDE LA LECCIÓN.',
        'Y VUELVE A INTENTARLO DE UNA MEJOR MANERA.'
      ]
    }

  ],

  preguntaReflexion:
    '¿Qué error del pasado todavía estás utilizando para definirte y qué podrías aprender de él para actuar de una manera diferente a partir de ahora?',

  cierre:
    'La decisión comienza contigo.'
},

'no-desperdicies-tu-vida-en-lo-que-no-tiene-valor': {
  numero: '26',
  titulo: 'NO DESPERDICIES TU VIDA EN LO QUE NO TIENE VALOR',
  categoria: 'MENTALIDAD, PROPÓSITO Y CRECIMIENTO',

  preguntaInicial:
    '¿EN QUÉ ESTÁS INVIRTIENDO TU TIEMPO Y QUÉ PARTE DE ESO REALMENTE APORTA VALOR A TU VIDA?',

  bloques: [

    {
      tipo: 'frase-central',
      lineas: [
        'LA VIDA ES DEMASIADO VALIOSA',
        'COMO PARA GASTARLA EN LO QUE NO CONSTRUYE.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Cada día recibes una cantidad limitada de tiempo.',
        'No puedes guardarlo para mañana.',
        'No puedes recuperar las horas que ya pasaron.',
        'Por eso también necesitas aprender a decidir en qué vale la pena invertir tu vida.'
      ]
    },

    {
      tipo: 'destacado',
      lineas: [
        'NO TODO LO QUE OCUPA TU TIEMPO',
        'MERECE TU TIEMPO.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Puedes pasar horas discutiendo por cosas que mañana ya no importarán.',
        'Puedes perseguir placeres que desaparecen rápidamente.',
        'Puedes compararte con otras personas hasta olvidar tu propio camino.',
        'Y puedes mantenerte ocupado sin estar realmente avanzando.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'El problema no siempre es que no tengas tiempo.',
        'A veces es que estás entregando tu tiempo a cosas que no están alineadas con aquello que realmente valoras.'
      ]
    },

    {
      tipo: 'frase-central',
      lineas: [
        'PREGÚNTATE NO SOLO “¿CUÁNTO TIEMPO TENGO?”',
        'SINO “¿EN QUÉ ESTOY INVIRTIENDO MI VIDA?”'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Jesús enseñó una idea profunda cuando preguntó qué beneficio tendría para una persona ganar el mundo entero y perder su propia vida.',
        'La enseñanza apunta a una realidad que sigue siendo relevante: los logros externos no siempre compensan lo que podemos perder interiormente.'
      ]
    },

    {
      tipo: 'destacado',
      lineas: [
        'PUEDES CONSEGUIR MUCHAS COSAS',
        'Y AUN ASÍ SENTIR QUE TE FALTA LO MÁS IMPORTANTE.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Por eso también necesitas cuidar aquello que no siempre aparece en una cuenta bancaria ni en un reconocimiento público.',
        'Tu paz.',
        'Tus valores.',
        'Tus relaciones.',
        'Tu capacidad de amar.',
        'Tu deseo de servir.',
        'Y aquello que para ti da sentido a tu existencia.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Para algunas personas, la fe y la relación con Dios forman una parte fundamental de ese propósito.',
        'Para otras, el camino puede expresarse de diferentes maneras.',
        'Lo importante es no vivir únicamente persiguiendo aquello que se puede tener, mientras descuidas aquello que quieres llegar a ser.'
      ]
    },

    {
      tipo: 'frase-central',
      lineas: [
        'NO TODO LO QUE BRILLA TIENE VALOR.',
        'Y NO TODO LO QUE TIENE VALOR SE PUEDE COMPRAR.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Cuida tu tiempo.',
        'Cuida tus conversaciones.',
        'Cuida aquello que consumes.',
        'Cuida las personas con las que compartes tu vida.',
        'Y cuida especialmente aquello que estás permitiendo que ocupe espacio dentro de ti.'
      ]
    },

    {
      tipo: 'destacado',
      lineas: [
        'INVIERTE TU TIEMPO EN LO QUE QUIERES VER CRECER.',
        'PORQUE AQUELLO A LO QUE DEDICAS TU VIDA TERMINA FORMANDO PARTE DE ELLA.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Ama mientras tengas la oportunidad.',
        'Sirve cuando puedas ayudar.',
        'Aprende mientras tengas la posibilidad de crecer.',
        'Y construye algo que tenga significado más allá del momento presente.'
      ]
    },

    {
      tipo: 'frase-final',
      lineas: [
        'NO CORRAS DETRÁS DE TODO.',
        'ELIGE QUÉ MERECE TU TIEMPO.',
        'VIVE CON PROPÓSITO.',
        'Y NO PIERDAS TU VIDA INTENTANDO GANAR COSAS QUE NO NECESITAS PARA SENTIRTE PLENO.'
      ]
    }

  ],

  preguntaReflexion:
    '¿Qué estás haciendo actualmente que consume una parte importante de tu tiempo pero no aporta verdadero valor a la persona que quieres llegar a ser?',

  cierre:
    'La decisión comienza contigo.'
},

'no-tienes-que-avanzar-rapido-para-estar-avanzando': {
  numero: '27',
  titulo: 'NO TIENES QUE AVANZAR RÁPIDO PARA ESTAR AVANZANDO',
  categoria: 'MENTALIDAD, PROPÓSITO Y CRECIMIENTO',

  preguntaInicial:
    '¿ESTÁS JUZGANDO TU PROGRESO PORQUE SIENTES QUE OTRAS PERSONAS AVANZAN MÁS RÁPIDO QUE TÚ?',

  bloques: [

    {
      tipo: 'frase-central',
      lineas: [
        'TU VALOR NO DEPENDE DE LA VELOCIDAD',
        'CON LA QUE AVANZAS.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Vivimos rodeados de personas que muestran sus avances, sus logros y sus mejores momentos.',
        'Y cuando observas todo eso, es fácil pensar que estás quedándote atrás.'
      ]
    },

    {
      tipo: 'destacado',
      lineas: [
        'NO COMPARES TU PROCESO',
        'CON EL CAPÍTULO QUE OTRA PERSONA DECIDIÓ MOSTRAR.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'No todos comienzan desde el mismo lugar.',
        'No todos tienen las mismas oportunidades.',
        'No todos enfrentan los mismos obstáculos.',
        'Y no todos necesitan recorrer el mismo camino.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Hay momentos en los que avanzar significa crecer rápidamente.',
        'Pero también existen etapas en las que avanzar significa resistir, aprender, recuperarte y simplemente no abandonar.'
      ]
    },

    {
      tipo: 'frase-central',
      lineas: [
        'HAY DÍAS EN LOS QUE AVANZARÁ MÁS TU VIDA.',
        'Y HAY DÍAS EN LOS QUE AVANZAR SERÁ SIMPLEMENTE NO RENDIRTE.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'No todos los días vas a sentirte fuerte.',
        'No todos los días tendrás motivación.',
        'Habrá días silenciosos en los que nadie verá lo que estás enfrentando.'
      ]
    },

    {
      tipo: 'destacado',
      lineas: [
        'A VECES TU MAYOR LOGRO DEL DÍA',
        'SERÁ HABER DECIDIDO CONTINUAR.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Eso también forma parte de la superación.',
        'Porque crecer no siempre produce resultados visibles inmediatamente.',
        'A veces estás aprendiendo.',
        'A veces estás fortaleciendo tu carácter.',
        'A veces estás preparando algo que todavía no puedes ver.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Sé paciente contigo, pero no confundas paciencia con conformismo.',
        'Puedes avanzar lentamente y seguir teniendo una dirección.',
        'Puedes descansar y después continuar.',
        'Puedes equivocarte y volver a intentarlo.'
      ]
    },

    {
      tipo: 'frase-central',
      lineas: [
        'AVANZAR LENTO SIGUE SIENDO AVANZAR',
        'SI CONTINÚAS MOVIÉNDOTE EN LA DIRECCIÓN CORRECTA.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'No necesitas que todos aplaudan tu proceso.',
        'No necesitas demostrar constantemente que estás progresando.',
        'Hay transformaciones que primero ocurren dentro de ti antes de hacerse visibles afuera.'
      ]
    },

    {
      tipo: 'destacado',
      lineas: [
        'LO QUE HOY PARECE PEQUEÑO',
        'PUEDE SER LA BASE DE ALGO MUCHO MÁS GRANDE MAÑANA.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Por eso sigue aprendiendo.',
        'Sigue trabajando.',
        'Sigue corrigiendo.',
        'Sigue avanzando al ritmo que puedas sostener.',
        'Y deja de utilizar la velocidad de otros como medida de tu propio valor.'
      ]
    },

    {
      tipo: 'frase-final',
      lineas: [
        'NO NECESITAS CORRER.',
        'NECESITAS CONTINUAR.',
        'AUNQUE HOY TU AVANCE SEA PEQUEÑO,',
        'SIGUE CONSTRUYENDO TU HISTORIA.'
      ]
    }

  ],

  preguntaReflexion:
    '¿En qué área de tu vida estás comparando tu velocidad con la de otras personas y qué cambiaría si comenzaras a medir tu progreso respecto a quién eras antes?',

  cierre:
    'La decisión comienza contigo.'
},

'no-esperes-el-momento-perfecto': {
  numero: '28',
  titulo: 'NO ESPERES EL MOMENTO PERFECTO',
  categoria: 'MENTALIDAD, PROPÓSITO Y CRECIMIENTO',

  preguntaInicial:
    '¿CUÁNTO ESTÁS POSPONIENDO POR ESPERAR EL MOMENTO PERFECTO?',

  bloques: [

    {
      tipo: 'frase-central',
      lineas: [
        'NO ESPERES EL MOMENTO PERFECTO.',
        'CREA EL MOMENTO CON ACCIÓN.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Muchas personas tienen buenas ideas, grandes sueños y proyectos que realmente quieren comenzar.',
        'Pero esperan.',
        'Esperan tener más dinero.',
        'Más conocimiento.',
        'Más tiempo.',
        'Más seguridad.',
        'O simplemente sentir que todo está listo.'
      ]
    },

    {
      tipo: 'destacado',
      lineas: [
        'A VECES NO TE FALTA UNA OPORTUNIDAD.',
        'TE FALTA TOMAR LA DECISIÓN DE ACTUAR.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'El problema de esperar demasiado es que las condiciones perfectas casi nunca aparecen.',
        'Mientras esperas, el tiempo continúa avanzando.',
        'Y una oportunidad que hoy puede estar disponible quizá mañana ya no exista de la misma manera.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Eso no significa actuar sin pensar.',
        'Significa aprender a distinguir entre prepararte correctamente y utilizar la preparación como una excusa para no comenzar.'
      ]
    },

    {
      tipo: 'frase-central',
      lineas: [
        'PREPARARTE ES IMPORTANTE.',
        'PERO PREPARARTE ETERNAMENTE TAMBIÉN PUEDE CONVERTIRSE EN UNA FORMA DE POSPONER.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Cuando actúas, comienzas a obtener algo que no puedes conseguir solamente pensando: experiencia.',
        'La acción te muestra qué funciona.',
        'Qué necesitas corregir.',
        'Qué desconocías.',
        'Y qué nuevas oportunidades pueden aparecer.'
      ]
    },

    {
      tipo: 'destacado',
      lineas: [
        'NO NECESITAS TENER TODAS LAS RESPUESTAS',
        'PARA DAR EL PRIMER PASO.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Puedes comenzar con lo que tienes.',
        'Puedes aprender mientras avanzas.',
        'Puedes corregir una estrategia después de ponerla a prueba.',
        'Y puedes mejorar aquello que comenzaste de manera sencilla.'
      ]
    },

    {
      tipo: 'frase-central',
      lineas: [
        'LA ACCIÓN CONVIERTE UNA IDEA',
        'EN UNA EXPERIENCIA REAL.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Una idea que nunca ejecutas solamente permanece en tu imaginación.',
        'Pero cuando decides actuar, aunque sea con un paso pequeño, comienzas a descubrir de qué eres capaz y qué necesitas aprender.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'No confundas perfección con excelencia.',
        'La excelencia se construye mediante práctica, aprendizaje, corrección y constancia.',
        'La perfección utilizada como condición para comenzar puede mantenerte detenido.'
      ]
    },

    {
      tipo: 'destacado',
      lineas: [
        'NO ESPERES ESTAR COMPLETAMENTE PREPARADO.',
        'PREPÁRATE LO SUFICIENTE PARA COMENZAR Y APRENDE EN EL CAMINO.'
      ]
    },

    {
      tipo: 'parrafo',
      lineas: [
        'Si tienes una meta clara, identifica cuál es el siguiente paso real que puedes dar.',
        'No el paso perfecto.',
        'No el más grande.',
        'El siguiente.'
      ]
    },

    {
      tipo: 'frase-final',
      lineas: [
        'DEJA DE ESPERAR.',
        'TOMA UNA DECISIÓN.',
        'DA EL PRIMER PASO.',
        'Y PERMITE QUE LA ACCIÓN TE ENSEÑE LO QUE TODAVÍA NECESITAS APRENDER.'
      ]
    }

  ],

  preguntaReflexion:
    '¿Qué decisión o proyecto estás posponiendo y cuál es el primer paso concreto que puedes dar hoy sin esperar a que todo sea perfecto?',

  cierre:
    'La decisión comienza contigo.'
},

};


  constructor(private route: ActivatedRoute) {

    const slug = this.route.snapshot.paramMap.get('slug');

    if (slug && this.reflexiones[slug]) {
      this.reflexion = this.reflexiones[slug];
    }

  }

}