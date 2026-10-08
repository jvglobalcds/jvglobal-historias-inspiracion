import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface LeccionBusqueda {
  area: string;
  areaTitulo: string;
  leccion: string;
  titulo: string;
  descripcion: string;
}

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './buscador.html',
  styleUrl: './buscador.css'
})
export class Buscador {

  termino = '';

  lecciones: LeccionBusqueda[] = [

    // CLARIDAD
    {
      area: 'claridad',
      areaTitulo: 'Claridad',
      leccion: 'autoconocimiento-y-proposito',
      titulo: 'Autoconocimiento y propósito',
      descripcion: 'Comprender quién eres, qué quieres construir y cuál es tu propósito.'
    },
    {
      area: 'claridad',
      areaTitulo: 'Claridad',
      leccion: 'vision-personal-y-objetivos',
      titulo: 'Visión personal y objetivos',
      descripcion: 'Definir una visión personal y establecer objetivos claros.'
    },
    {
      area: 'claridad',
      areaTitulo: 'Claridad',
      leccion: 'pensamiento-consciente',
      titulo: 'Pensamiento consciente',
      descripcion: 'Desarrollar una forma consciente de observar y dirigir tus pensamientos.'
    },
    {
      area: 'claridad',
      areaTitulo: 'Claridad',
      leccion: 'toma-de-decisiones',
      titulo: 'Toma de decisiones',
      descripcion: 'Aprender a tomar decisiones con claridad y responsabilidad.'
    },
    {
      area: 'claridad',
      areaTitulo: 'Claridad',
      leccion: 'planificacion-y-direccion',
      titulo: 'Planificación y dirección',
      descripcion: 'Convertir la claridad en dirección mediante planificación.'
    },

    // DISCIPLINA
    {
      area: 'disciplina',
      areaTitulo: 'Disciplina',
      leccion: 'habitos-y-constancia',
      titulo: 'Hábitos y constancia',
      descripcion: 'Aprender a construir hábitos y mantener acciones constantes.'
    },
    {
      area: 'disciplina',
      areaTitulo: 'Disciplina',
      leccion: 'organizacion-personal',
      titulo: 'Organización personal',
      descripcion: 'Desarrollar orden y organización para gestionar mejor tus responsabilidades.'
    },
    {
      area: 'disciplina',
      areaTitulo: 'Disciplina',
      leccion: 'gestion-del-tiempo',
      titulo: 'Gestión del tiempo',
      descripcion: 'Aprender a utilizar el tiempo de manera consciente y efectiva.'
    },
    {
      area: 'disciplina',
      areaTitulo: 'Disciplina',
      leccion: 'compromiso-y-responsabilidad',
      titulo: 'Compromiso y responsabilidad',
      descripcion: 'Comprender el compromiso y asumir responsabilidad sobre las propias decisiones.'
    },
    {
      area: 'disciplina',
      areaTitulo: 'Disciplina',
      leccion: 'ejecucion-y-seguimiento',
      titulo: 'Ejecución y seguimiento',
      descripcion: 'Convertir las decisiones en acciones y realizar seguimiento de los avances.'
    },

    // SUPERACIÓN
    {
      area: 'superacion',
      areaTitulo: 'Superación',
      leccion: 'resiliencia',
      titulo: 'Resiliencia',
      descripcion: 'Desarrollar la capacidad de afrontar dificultades y continuar avanzando.'
    },
    {
      area: 'superacion',
      areaTitulo: 'Superación',
      leccion: 'aprendizaje-de-los-errores',
      titulo: 'Aprendizaje de los errores',
      descripcion: 'Transformar los errores y experiencias en oportunidades de aprendizaje.'
    },
    {
      area: 'superacion',
      areaTitulo: 'Superación',
      leccion: 'gestion-de-desafios',
      titulo: 'Gestión de desafíos',
      descripcion: 'Aprender a afrontar desafíos con una actitud de crecimiento.'
    },
    {
      area: 'superacion',
      areaTitulo: 'Superación',
      leccion: 'desarrollo-del-potencial',
      titulo: 'Desarrollo del potencial',
      descripcion: 'Identificar y desarrollar capacidades para avanzar hacia un mayor potencial.'
    },
    {
      area: 'superacion',
      areaTitulo: 'Superación',
      leccion: 'adaptacion-y-mejora-continua',
      titulo: 'Adaptación y mejora continua',
      descripcion: 'Desarrollar la capacidad de adaptarse y mejorar de manera constante.'
    },

    // EMPRENDIMIENTO Y NEGOCIOS
    {
      area: 'emprendimiento',
      areaTitulo: 'Emprendimiento y Negocios',
      leccion: 'mentalidad-emprendedora',
      titulo: 'Mentalidad emprendedora',
      descripcion: 'Desarrollar una mentalidad orientada a crear valor y desarrollar proyectos.'
    },
    {
      area: 'emprendimiento',
      areaTitulo: 'Emprendimiento y Negocios',
      leccion: 'modelos-de-negocio',
      titulo: 'Modelos de negocio',
      descripcion: 'Comprender cómo funcionan diferentes modelos de negocio.'
    },
    {
      area: 'emprendimiento',
      areaTitulo: 'Emprendimiento y Negocios',
      leccion: 'propuesta-de-valor',
      titulo: 'Propuesta de valor',
      descripcion: 'Comprender cómo identificar y comunicar una propuesta de valor.'
    },
    {
      area: 'emprendimiento',
      areaTitulo: 'Emprendimiento y Negocios',
      leccion: 'ventas-y-servicio',
      titulo: 'Ventas y servicio',
      descripcion: 'Comprender la relación entre ventas, servicio y generación de valor.'
    },
    {
      area: 'emprendimiento',
      areaTitulo: 'Emprendimiento y Negocios',
      leccion: 'creacion-y-desarrollo-de-proyectos',
      titulo: 'Creación y desarrollo de proyectos',
      descripcion: 'Convertir ideas en proyectos y trabajar en su desarrollo.'
    },

    // LIDERAZGO
    {
      area: 'liderazgo',
      areaTitulo: 'Liderazgo',
      leccion: 'liderazgo-consciente',
      titulo: 'Liderazgo consciente',
      descripcion: 'Comprender el liderazgo desde la responsabilidad, conciencia y servicio.'
    },
    {
      area: 'liderazgo',
      areaTitulo: 'Liderazgo',
      leccion: 'comunicacion-efectiva',
      titulo: 'Comunicación efectiva',
      descripcion: 'Desarrollar una comunicación clara, consciente y efectiva.'
    },
    {
      area: 'liderazgo',
      areaTitulo: 'Liderazgo',
      leccion: 'trabajo-en-equipo',
      titulo: 'Trabajo en equipo',
      descripcion: 'Comprender la importancia de colaborar y construir junto a otras personas.'
    },
    {
      area: 'liderazgo',
      areaTitulo: 'Liderazgo',
      leccion: 'responsabilidad-y-servicio',
      titulo: 'Responsabilidad y servicio',
      descripcion: 'Entender el liderazgo como responsabilidad y servicio hacia los demás.'
    },
    {
      area: 'liderazgo',
      areaTitulo: 'Liderazgo',
      leccion: 'acompanamiento-y-desarrollo-de-personas',
      titulo: 'Acompañamiento y desarrollo de personas',
      descripcion: 'Aprender a acompañar y contribuir al desarrollo de otras personas.'
    },

    // EDUCACIÓN Y CONOCIMIENTO
    {
      area: 'educacion',
      areaTitulo: 'Educación y Conocimiento',
      leccion: 'aprendizaje-continuo',
      titulo: 'Aprendizaje continuo',
      descripcion: 'Desarrollar una actitud permanente de aprendizaje.'
    },
    {
      area: 'educacion',
      areaTitulo: 'Educación y Conocimiento',
      leccion: 'pensamiento-critico',
      titulo: 'Pensamiento crítico',
      descripcion: 'Aprender a analizar información y formar criterios propios.'
    },
    {
      area: 'educacion',
      areaTitulo: 'Educación y Conocimiento',
      leccion: 'metodos-de-estudio',
      titulo: 'Métodos de estudio',
      descripcion: 'Conocer herramientas para estudiar y aprender de manera más efectiva.'
    },
    {
      area: 'educacion',
      areaTitulo: 'Educación y Conocimiento',
      leccion: 'investigacion-y-comprension',
      titulo: 'Investigación y comprensión',
      descripcion: 'Desarrollar capacidades para investigar, comprender y aplicar información.'
    },
    {
      area: 'educacion',
      areaTitulo: 'Educación y Conocimiento',
      leccion: 'desarrollo-de-capacidades',
      titulo: 'Desarrollo de capacidades',
      descripcion: 'Fortalecer capacidades mediante aprendizaje y práctica.'
    },

    // TECNOLOGÍA E IA
    {
      area: 'tecnologia',
      areaTitulo: 'Tecnología e Inteligencia Artificial',
      leccion: 'alfabetizacion-digital',
      titulo: 'Alfabetización digital',
      descripcion: 'Desarrollar conocimientos fundamentales para desenvolverse en entornos digitales.'
    },
    {
      area: 'tecnologia',
      areaTitulo: 'Tecnología e Inteligencia Artificial',
      leccion: 'inteligencia-artificial',
      titulo: 'Inteligencia artificial',
      descripcion: 'Comprender las posibilidades y el uso responsable de la inteligencia artificial.'
    },
    {
      area: 'tecnologia',
      areaTitulo: 'Tecnología e Inteligencia Artificial',
      leccion: 'herramientas-de-productividad',
      titulo: 'Herramientas de productividad',
      descripcion: 'Conocer herramientas digitales que pueden ampliar la productividad.'
    },
    {
      area: 'tecnologia',
      areaTitulo: 'Tecnología e Inteligencia Artificial',
      leccion: 'automatizacion',
      titulo: 'Automatización',
      descripcion: 'Comprender cómo utilizar la tecnología para automatizar procesos.'
    },
    {
      area: 'tecnologia',
      areaTitulo: 'Tecnología e Inteligencia Artificial',
      leccion: 'innovacion-y-uso-responsable-de-la-tecnologia',
      titulo: 'Innovación y uso responsable de la tecnología',
      descripcion: 'Explorar la innovación y utilizar la tecnología de manera responsable.'
    },

    // FINANZAS
    {
      area: 'finanzas',
      areaTitulo: 'Finanzas y Educación Económica',
      leccion: 'educacion-financiera-basica',
      titulo: 'Educación financiera básica',
      descripcion: 'Comprender conceptos fundamentales de educación financiera.'
    },
    {
      area: 'finanzas',
      areaTitulo: 'Finanzas y Educación Económica',
      leccion: 'presupuesto-personal',
      titulo: 'Presupuesto personal',
      descripcion: 'Aprender a organizar y planificar los recursos personales.'
    },
    {
      area: 'finanzas',
      areaTitulo: 'Finanzas y Educación Económica',
      leccion: 'ahorro-y-planificacion',
      titulo: 'Ahorro y planificación',
      descripcion: 'Comprender la importancia del ahorro y la planificación financiera.'
    },
    {
      area: 'finanzas',
      areaTitulo: 'Finanzas y Educación Económica',
      leccion: 'administracion-de-recursos',
      titulo: 'Administración de recursos',
      descripcion: 'Aprender a administrar los recursos de manera consciente.'
    },
    {
      area: 'finanzas',
      areaTitulo: 'Finanzas y Educación Económica',
      leccion: 'decisiones-economicas-responsables',
      titulo: 'Decisiones económicas responsables',
      descripcion: 'Desarrollar criterios para tomar decisiones económicas responsables.'
    },

    // MARKETING
    {
      area: 'marketing',
      areaTitulo: 'Marketing y Comunicación',
      leccion: 'comunicacion-de-valor',
      titulo: 'Comunicación de valor',
      descripcion: 'Aprender a comunicar ideas y propuestas de valor.'
    },
    {
      area: 'marketing',
      areaTitulo: 'Marketing y Comunicación',
      leccion: 'marca-personal',
      titulo: 'Marca personal',
      descripcion: 'Comprender los fundamentos de la construcción de una marca personal.'
    },
    {
      area: 'marketing',
      areaTitulo: 'Marketing y Comunicación',
      leccion: 'creacion-de-contenido',
      titulo: 'Creación de contenido',
      descripcion: 'Desarrollar contenidos con propósito y valor.'
    },
    {
      area: 'marketing',
      areaTitulo: 'Marketing y Comunicación',
      leccion: 'marketing-digital',
      titulo: 'Marketing digital',
      descripcion: 'Conocer fundamentos del marketing en entornos digitales.'
    },
    {
      area: 'marketing',
      areaTitulo: 'Marketing y Comunicación',
      leccion: 'estrategias-de-comunicacion',
      titulo: 'Estrategias de comunicación',
      descripcion: 'Comprender estrategias para comunicar de manera efectiva.'
    },

    // DESARROLLO PERSONAL
    {
      area: 'desarrollo-personal',
      areaTitulo: 'Desarrollo Personal',
      leccion: 'autoconocimiento',
      titulo: 'Autoconocimiento',
      descripcion: 'Profundizar en el conocimiento personal y la comprensión de uno mismo.'
    },
    {
      area: 'desarrollo-personal',
      areaTitulo: 'Desarrollo Personal',
      leccion: 'habilidades-personales',
      titulo: 'Habilidades personales',
      descripcion: 'Desarrollar habilidades que favorezcan la evolución personal.'
    },
    {
      area: 'desarrollo-personal',
      areaTitulo: 'Desarrollo Personal',
      leccion: 'inteligencia-emocional',
      titulo: 'Inteligencia emocional',
      descripcion: 'Comprender y gestionar mejor las emociones.'
    },
    {
      area: 'desarrollo-personal',
      areaTitulo: 'Desarrollo Personal',
      leccion: 'relaciones-humanas',
      titulo: 'Relaciones humanas',
      descripcion: 'Fortalecer la comprensión y construcción de relaciones saludables.'
    },
    {
      area: 'desarrollo-personal',
      areaTitulo: 'Desarrollo Personal',
      leccion: 'evolucion-consciente',
      titulo: 'Evolución consciente',
      descripcion: 'Comprender el desarrollo personal como un proceso consciente y continuo.'
    },

    // VISIÓN Y LEGADO
    {
      area: 'vision-legado',
      areaTitulo: 'Visión y Legado',
      leccion: 'vision-a-largo-plazo',
      titulo: 'Visión a largo plazo',
      descripcion: 'Desarrollar una visión orientada al futuro.'
    },
    {
      area: 'vision-legado',
      areaTitulo: 'Visión y Legado',
      leccion: 'proposito-y-contribucion',
      titulo: 'Propósito y contribución',
      descripcion: 'Reflexionar sobre el propósito y la contribución que deseas realizar.'
    },
    {
      area: 'vision-legado',
      areaTitulo: 'Visión y Legado',
      leccion: 'construccion-de-proyectos-duraderos',
      titulo: 'Construcción de proyectos duraderos',
      descripcion: 'Comprender cómo construir proyectos con visión de permanencia.'
    },
    {
      area: 'vision-legado',
      areaTitulo: 'Visión y Legado',
      leccion: 'mentoria-y-servicio',
      titulo: 'Mentoría y servicio',
      descripcion: 'Comprender la mentoría y el servicio como formas de contribuir al crecimiento de otros.'
    },
    {
      area: 'vision-legado',
      areaTitulo: 'Visión y Legado',
      leccion: 'legado-generacional',
      titulo: 'Legado generacional',
      descripcion: 'Reflexionar sobre aquello que puede trascender y permanecer en el tiempo.'
    }
  ];

  get leccionesFiltradas(): LeccionBusqueda[] {

    const termino = this.termino
      .trim()
      .toLowerCase();

    if (!termino) {
      return [];
    }

    return this.lecciones.filter(leccion =>
      leccion.titulo.toLowerCase().includes(termino) ||
      leccion.areaTitulo.toLowerCase().includes(termino) ||
      leccion.descripcion.toLowerCase().includes(termino)
    );
  }
}