
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';

interface AreaContenido {
  titulo: string;
  descripcion: string;
  temas: string[];
}

@Component({
  selector: 'app-ensenanza-area',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './ensenanza-area.html',
  styleUrl: './ensenanza-area.css',
})
export class EnsenanzaArea implements OnInit {

    leccionesCompletadas = 0;
    totalLecciones = 0;
  areaActual: AreaContenido = {
    titulo: 'Área no encontrada',
    descripcion: 'No se encontró el área de enseñanza solicitada.',
    temas: [],
  };

  private areas: Record<string, AreaContenido> = {
    claridad: {
      titulo: 'Claridad',
      descripcion:
        'Desarrolla una comprensión consciente de tu propósito, tus objetivos y el camino que deseas construir.',
      temas: [
        'Autoconocimiento y propósito',
        'Visión personal y objetivos',
        'Pensamiento consciente',
        'Toma de decisiones',
        'Planificación y dirección',
      ],
    },

    disciplina: {
      titulo: 'Disciplina',
      descripcion:
        'Aprende a convertir tus decisiones en acciones constantes mediante hábitos, organización y compromiso.',
      temas: [
        'Hábitos y constancia',
        'Organización personal',
        'Gestión del tiempo',
        'Compromiso y responsabilidad',
        'Ejecución y seguimiento',
      ],
    },

    superacion: {
      titulo: 'Superación',
      descripcion:
        'Fortalece tu capacidad para aprender de las experiencias, afrontar desafíos y seguir avanzando.',
      temas: [
        'Resiliencia',
        'Aprendizaje de los errores',
        'Gestión de desafíos',
        'Desarrollo del potencial',
        'Adaptación y mejora continua',
      ],
    },

    emprendimiento: {
      titulo: 'Emprendimiento y negocios',
      descripcion:
        'Explora conocimientos para transformar ideas en proyectos, comprender modelos de negocio y crear valor.',
      temas: [
        'Mentalidad emprendedora',
        'Modelos de negocio',
        'Propuesta de valor',
        'Ventas y servicio',
        'Creación y desarrollo de proyectos',
      ],
    },

    liderazgo: {
      titulo: 'Liderazgo',
      descripcion:
        'Desarrolla habilidades para orientar, comunicar, colaborar y contribuir al crecimiento de otras personas.',
      temas: [
        'Liderazgo consciente',
        'Comunicación efectiva',
        'Trabajo en equipo',
        'Responsabilidad y servicio',
        'Acompañamiento y desarrollo de personas',
      ],
    },

    educacion: {
      titulo: 'Educación y conocimiento',
      descripcion:
        'Fortalece tu capacidad de aprender, investigar, comprender y aplicar nuevos conocimientos.',
      temas: [
        'Aprendizaje continuo',
        'Pensamiento crítico',
        'Métodos de estudio',
        'Investigación y comprensión',
        'Desarrollo de capacidades',
      ],
    },

    tecnologia: {
      titulo: 'Tecnología e inteligencia artificial',
      descripcion:
        'Conoce herramientas digitales y nuevas tecnologías que pueden ampliar tus capacidades y posibilidades.',
      temas: [
        'Alfabetización digital',
        'Inteligencia artificial',
        'Herramientas de productividad',
        'Automatización',
        'Innovación y uso responsable de la tecnología',
      ],
    },

    finanzas: {
      titulo: 'Finanzas y educación económica',
      descripcion:
        'Adquiere conocimientos para comprender, organizar y administrar tus recursos con mayor conciencia.',
      temas: [
        'Educación financiera básica',
        'Presupuesto personal',
        'Ahorro y planificación',
        'Administración de recursos',
        'Decisiones económicas responsables',
      ],
    },

    marketing: {
      titulo: 'Marketing y comunicación',
      descripcion:
        'Aprende a comunicar ideas, crear contenido y comprender estrategias para transmitir propuestas de valor.',
      temas: [
        'Comunicación de valor',
        'Marca personal',
        'Creación de contenido',
        'Marketing digital',
        'Estrategias de comunicación',
      ],
    },

    'desarrollo-personal': {
      titulo: 'Desarrollo personal',
      descripcion:
        'Explora herramientas para conocerte mejor, fortalecer tus habilidades y evolucionar conscientemente.',
      temas: [
        'Autoconocimiento',
        'Habilidades personales',
        'Inteligencia emocional',
        'Relaciones humanas',
        'Evolución consciente',
      ],
    },

    'vision-legado': {
      titulo: 'Visión y legado',
      descripcion:
        'Reflexiona sobre el futuro que deseas construir y la contribución que puede trascender en el tiempo.',
      temas: [
        'Visión a largo plazo',
        'Propósito y contribución',
        'Construcción de proyectos duraderos',
        'Mentoría y servicio',
        'Legado generacional',
      ],
    },
  };

  constructor(
  private route: ActivatedRoute,
  private router: Router
) {}

ngOnInit(): void {
  this.route.paramMap.subscribe((params) => {
    const slug = params.get('slug') ?? '';

    this.areaActual = this.areas[slug] ?? {
      titulo: 'Área no encontrada',
      descripcion: 'No se encontró el área de enseñanza solicitada.',
      temas: [],
    };

    this.actualizarProgreso();
  });

  window.addEventListener('focus', () => {
    this.actualizarProgreso();
  });
}

 actualizarProgreso(): void {
  this.totalLecciones = this.areaActual.temas.length;

  this.leccionesCompletadas = 0;

  if (this.areaActual.titulo === 'Claridad') {

    const leccion1 = localStorage.getItem(
      'jv-leccion-autoconocimiento-proposito'
    );

    const leccion2 = localStorage.getItem(
      'jv-leccion-vision-personal-objetivos'
    );

    const leccion3 = localStorage.getItem(
      'jv-leccion-pensamiento-consciente'
    );

    const leccion4 = localStorage.getItem(
      'jv-leccion-toma-de-decisiones'
    );

    const leccion5 = localStorage.getItem(
      'jv-leccion-planificacion-y-direccion'
    );

    if (leccion1 === 'completada') {
      this.leccionesCompletadas++;
    }

    if (leccion2 === 'completada') {
      this.leccionesCompletadas++;
    }

    if (leccion3 === 'completada') {
      this.leccionesCompletadas++;
    }

    if (leccion4 === 'completada') {
      this.leccionesCompletadas++;
    }

    if (leccion5 === 'completada') {
      this.leccionesCompletadas++;
    }
  }
}
}