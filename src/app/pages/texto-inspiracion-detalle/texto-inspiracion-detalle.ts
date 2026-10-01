import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface TextoDetalle {
  numero: string;
  titulo: string;
  tema: string;
  contenido: string[];
  fraseCentral: string;
  cierre: string;
}

@Component({
  selector: 'app-texto-inspiracion-detalle',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './texto-inspiracion-detalle.html',
  styleUrl: './texto-inspiracion-detalle.css'
})
export class TextoInspiracionDetalle {

  slug = '';

  texto: TextoDetalle | null = null;

  textos: Record<string, TextoDetalle> = {

    'muevete-como-si-todo-te-fuera-a-salir-bien': {
      numero: 'TEXTO 01',
      titulo: 'Muévete como si todo te fuera a salir bien',
      tema: 'FE Y CONFIANZA',

      contenido: [
        'Hay momentos en los que no sabes qué va a pasar.',
        'No sabes cómo se va a resolver aquello que hoy te preocupa. No sabes cuándo llegará esa oportunidad que estás esperando. No ves todavía el camino completo.',
        'Y aun así, tienes que avanzar.',
        'Muévete como si todo te fuera a salir bien.',
        'No porque tengas todo bajo control, sino porque entiendes que no necesitas tenerlo.',
        'Hay puertas que todavía no se han abierto. Hay caminos que todavía no puedes ver. Hay respuestas que todavía no han llegado.',
        'Pero que no puedas ver el cómo no significa que no exista un camino.',
        'Haz tu parte.',
        'Da el siguiente paso.',
        'Sigue aprendiendo. Sigue trabajando. Sigue creyendo. Sigue construyendo.',
        'Y aquello que no puedes controlar, entrégaselo a Dios.',
        'Tal vez hoy estés atravesando una etapa que no comprendes. Tal vez algunas cosas no estén ocurriendo como imaginabas.',
        'Pero no permitas que la incertidumbre te convenza de detenerte.',
        'Porque muchas veces no necesitas conocer todo el camino para dar el siguiente paso.',
        'Solo necesitas tener la confianza suficiente para avanzar.',
        'Así que levántate.',
        'Muévete.',
        'Haz lo que está en tus manos.',
        'Y camina con fe.',
        'Porque quizás aquello que hoy parece confuso, mañana tenga todo el sentido.',
        'No necesitas saber exactamente cómo va a suceder. Necesitas creer que todavía puede suceder y hacer tu parte para acercarte a ello.',
        'Si hoy estás atravesando un momento de incertidumbre, recuerda esto:',
        'Sigue avanzando.',
        'Tal vez todavía no puedas ver cómo.',
        'Pero eso no significa que no exista un camino.'
      ],

      fraseCentral:
        'No necesitas saber exactamente cómo va a suceder. Necesitas creer que todavía puede suceder y hacer tu parte para acercarte a ello.',

      cierre:
        'Si hoy estás atravesando un momento de incertidumbre, recuerda esto: sigue avanzando. Tal vez todavía no puedas ver cómo, pero eso no significa que no exista un camino.'
    },

      'kfc-coronel-sanders-demasiado-tarde': {
      numero: 'TEXTO 02',
      titulo: 'KFC · Coronel Sanders: Cuando todos creen que ya es demasiado tarde',
      tema: 'PERSEVERANCIA Y PROPÓSITO',

      contenido: [
        '¿Qué harías si tuvieras 65 años y tuvieras que comenzar nuevamente?',
        '¿Qué harías si después de haber trabajado durante toda tu vida, aquello que habías construido desapareciera?',
        '¿Te rendirías?',
        'Harland Sanders pudo haberlo hecho.',
        'Su restaurante había cerrado después de que una nueva autopista cambiara el camino de los viajeros y sus ventas cayeran.',
        'A esa edad, muchos habrían pensado que ya no había nada más que hacer.',
        'Pero Sanders todavía tenía algo.',
        'Tenía una receta.',
        'Y, sobre todo, tenía la decisión de volver a intentarlo.',
        'Entonces comenzó a buscar restaurantes que estuvieran dispuestos a probar su pollo.',
        'Y llegó el primer rechazo.',
        'Después otro.',
        'Y otro.',
        'Y otro.',
        'Pero siguió.',
        'Le dijeron que no.',
        'Volvió a intentarlo.',
        'Le volvieron a decir que no.',
        'Volvió a intentarlo.',
        'Una puerta cerrada no hizo que dejara de tocar la siguiente.',
        'Y cuando una puerta también se cerraba, buscaba otra.',
        'Porque la diferencia no estaba en que nunca recibiera un “no”.',
        'La diferencia estaba en que cada “no” encontraba a un hombre que todavía estaba dispuesto a seguir intentando.',
        'Imagina por un momento lo que significa escuchar rechazo una vez.',
        'Ahora imagina diez.',
        'Veinte.',
        'Cincuenta.',
        'Cien.',
        'Y todavía levantarte al día siguiente para intentarlo nuevamente.',
        'Doscientos.',
        'Trescientos.',
        'Cuatrocientos.',
        'Quinientos.',
        'Y seguir.',
        'Más de 1.000 rechazos… y siguió.',
        'La historia de Sanders se ha contado muchas veces como una historia de éxito.',
        'Pero antes del éxito hubo algo que casi nadie ve:',
        'la cantidad de veces que tuvo que seguir cuando todavía no había ninguna garantía de que funcionaría.',
        'Hasta que finalmente alguien dijo:',
        '“Intentémoslo.”',
        'Y esa oportunidad abrió una puerta que cambió su historia.',
        'Kentucky Fried Chicken comenzó a crecer y aquella receta terminó llegando a personas de diferentes lugares del mundo.',
        'Pero piensa en esto:',
        'Si Sanders se hubiera detenido justo antes de encontrar a la persona que dijo “sí”…',
        '¿qué habría pasado?',
        'Tal vez nadie habría conocido aquella receta.',
        'Tal vez la historia habría terminado mucho antes.',
        'Y eso también puede estar ocurriendo en tu vida.',
        'Quizás estás frente a un problema y ya estás cansado.',
        'Quizás has intentado algo varias veces y todavía no funciona.',
        'Quizás alguien te dijo que no.',
        'O quizás fueron varias personas.',
        'Pero una respuesta negativa no significa que tu historia haya terminado.',
        'Significa solamente que esa puerta no se abrió.',
        'Y si todavía crees en lo que estás construyendo, puedes buscar otra.',
        'Otra vez.',
        'Y otra.',
        'Y otra.',
        'No sabes cuál será el intento que cambie las cosas.',
        'No sabes cuál será la persona que diga “sí”.',
        'No sabes cuál será la oportunidad que estabas esperando.',
        'Por eso, antes de abandonar algo que realmente importa para ti, pregúntate:',
        '¿De verdad quiero rendirme… o simplemente estoy cansado de intentarlo?',
        'Porque son cosas diferentes.',
        'Descansar no es rendirse.',
        'Cambiar la estrategia no es rendirse.',
        'Aprender de los errores no es rendirse.',
        'Volver a comenzar no es rendirse.',
        'Rendirse es decidir que ya no vale la pena intentarlo.',
        'Y mientras tú todavía tengas un propósito, todavía puedes dar otro paso.',
        'Quizás hoy sea el intento número 10.',
        'Quizás el 100.',
        'Quizás el 500.',
        'Quizás estés mucho más cerca de esa puerta de lo que imaginas.',
        'No sabes cuál será el que abra la puerta.',
        'Pero si abandonas antes de tocarla, nunca sabrás qué había detrás.',
        'No permitas que un “no” decida el final de una historia que todavía estás escribiendo.',
        'Sigue.',
        'Porque algunas oportunidades no aparecen después del primer intento.',
        'A veces aparecen después de que casi todos los demás ya se habrían rendido.'
      ],

      fraseCentral:
        'No sabes cuál será el intento que abra la puerta. Pero si abandonas antes de tocarla, nunca sabrás qué había detrás.',

      cierre:
        'No permitas que un “no” decida el final de una historia que todavía estás escribiendo. Sigue. Quizás la próxima oportunidad que busques sea precisamente la que estabas esperando.'
        
        },

     'cristiano-ronaldo-el-nino-que-no-se-rindio': {
      numero: 'TEXTO 03',
      titulo: 'Cristiano Ronaldo · El niño que tuvo que aprender a no rendirse',
      tema: 'DISCIPLINA Y SUPERACIÓN',

      contenido: [
        '¿Sabes lo que significa tener 12 años y alejarte de tu familia para perseguir un sueño?',
        'Cristiano Ronaldo lo vivió.',
        'A esa edad dejó Madeira y se trasladó solo a Lisboa para incorporarse a la academia del Sporting.',
        'Tenía talento.',
        'Tenía un sueño.',
        'Pero eso no significa que el camino fuera fácil.',
        'Todo era diferente.',
        'La ciudad.',
        'La distancia.',
        'La soledad.',
        'Incluso la manera de hablar.',
        'Los demás se burlaban de su acento y él mismo contó que lloraba casi todos los días porque extrañaba a su familia.',
        'Por un momento, quiso irse.',
        'Y eso es importante.',
        'Porque detrás de la imagen del Cristiano Ronaldo que todos conocemos hubo un niño que también tuvo miedo, que también lloró y que también tuvo momentos en los que quiso abandonar.',
        'Pero se quedó.',
        'Y siguió.',
        'Con el tiempo comenzó a transformar aquello que lo hacía sentirse diferente en una razón para trabajar todavía más.',
        'Él mismo contó que sabía que tenía talento, pero también sabía que era muy delgado y que necesitaba hacerse más fuerte.',
        'Entonces tomó una decisión.',
        'Iba a trabajar más.',
        'Mientras otros terminaban el entrenamiento, él buscaba seguir mejorando.',
        'Mientras otros se iban, él encontraba una manera de practicar aquello que todavía necesitaba perfeccionar.',
        'No ocurrió de un día para otro.',
        'No fue magia.',
        'Fue repetición.',
        'Fue disciplina.',
        'Fue volver a intentarlo cuando todavía nadie podía garantizarle que llegaría a donde soñaba.',
        'Y aquí aparece una pregunta que vale mucho más que la historia de Cristiano Ronaldo:',
        '¿Qué haces tú cuando sientes que no encajas?',
        'Porque quizá alguna vez te hicieron sentir que eras diferente.',
        'Quizá alguien se burló de ti.',
        'Quizá alguien te dijo que no eras suficientemente bueno.',
        'Quizá entraste en un lugar donde todos parecían tener algo que tú todavía no tenías.',
        'Y tal vez eso te hizo pensar:',
        '“Este lugar no es para mí.”',
        'Pero sentir que no encajas no significa que debas irte.',
        'A veces significa que estás entrando en un lugar donde todavía tienes mucho que aprender.',
        'No necesitas demostrarle nada al mundo.',
        'Necesitas demostrarte a ti mismo que puedes seguir creciendo.',
        'Cristiano no llegó a donde llegó porque nunca tuvo momentos difíciles.',
        'Llegó atravesándolos.',
        'Y esa diferencia importa.',
        'Porque el talento puede abrir una puerta.',
        'Pero la disciplina es la que te prepara para permanecer dentro.',
        'Así que la próxima vez que alguien te haga sentir que no perteneces, recuerda:',
        'No permitas que la opinión de alguien más determine hasta dónde puedes llegar.',
        'Trabaja.',
        'Aprende.',
        'Mejora.',
        'Vuelve a intentarlo.',
        'Y si todavía no eres quien quieres ser, no significa que hayas fracasado.',
        'Significa que todavía estás en construcción.',
        'Quizás la persona que hoy se siente diferente sea precisamente la que mañana descubra que esa diferencia era parte de su fuerza.',
        'Y ahora pregúntate:',
        '¿Qué estás dispuesto a hacer durante los próximos años para convertirte en la persona que hoy todavía estás soñando ser?'
      ],

      fraseCentral:
        'Sentir que no encajas no significa que debas irte.',

      cierre:
        'No permitas que la opinión de alguien más determine hasta dónde puedes llegar. Trabaja, aprende, mejora y vuelve a intentarlo. Todavía estás en construcción.'
    
      },

    'no-necesitas-ser-el-mejor': {
      numero: 'TEXTO 04',
      titulo: 'No necesitas ser el mejor',
      tema: 'CONSTANCIA Y DISCIPLINA',

      contenido: [
        'No necesitas ser el mejor.',
        'Necesitas estar dispuesto a seguir intentándolo cuando otros dejan de hacerlo.',
        'Un solo día de entrenamiento no va a transformar tu cuerpo.',
        'Un solo libro no va a cambiar tu mentalidad.',
        'Un solo día de esfuerzo no va a cambiar tu vida.',
        'Pero hay algo poderoso en repetir esas pequeñas acciones una y otra vez.',
        'Entrenar hoy.',
        'Leer mañana.',
        'Aprender.',
        'Volver a intentarlo.',
        'Caer y levantarte.',
        'Trabajar incluso cuando todavía no ves resultados.',
        'Porque lo que transforma tu vida no siempre ocurre en un gran momento.',
        'Muchas veces ocurre en esos pequeños momentos en los que nadie te está mirando y tú decides continuar.',
        'Un día quizá mires hacia atrás y descubras que ya no eres la misma persona.',
        'Eres más fuerte.',
        'Más preparado.',
        'Más disciplinado.',
        'Más cerca de aquello que alguna vez parecía demasiado lejos.',
        'El éxito no se construye en un solo momento extraordinario.',
        'Se construye cada vez que decides no detenerte.',
        'Por eso, no te obsesiones con ser el mejor.',
        'Concéntrate en seguir avanzando.',
        'Hazlo una vez.',
        'Y después otra.',
        'Y después otra.',
        'Sé constante.',
        'Porque mientras tú sigas avanzando, el tiempo también estará trabajando a tu favor.',
        'Y quizá algún día descubras que no necesitabas ser el mejor.',
        'Solo necesitabas ser de los que nunca dejaron de intentarlo.'
      ],

      fraseCentral:
        'No necesitas ser el mejor. Necesitas estar dispuesto a seguir intentándolo cuando otros dejan de hacerlo.',

      cierre:
        'No te obsesiones con ser el mejor. Concéntrate en seguir avanzando. Hazlo una vez, y después otra, y después otra. Sé constante. El tiempo también puede trabajar a tu favor.'
    }
   
    };

  constructor(
    private route: ActivatedRoute
  ) {
    this.slug =
      this.route.snapshot.paramMap.get('slug') || '';

    this.texto =
      this.textos[this.slug] || null;
  }

}