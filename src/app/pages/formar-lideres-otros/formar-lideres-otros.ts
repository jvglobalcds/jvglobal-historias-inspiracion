import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formar-lideres-otros',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './formar-lideres-otros.html',
  styleUrl: './formar-lideres-otros.css'
})
export class FormarLideresOtros implements OnInit {
  private readonly clave = 'cds_formar_lideres_otros';
  private readonly invitacion = 'https://chat.whatsapp.com/IqiCDzdQorxHT6SpfMUs4j';

  reflexiones = [
    {
      titulo: '1. Acompañar sin controlar',
      pregunta: '¿Cómo puedo acompañar a una persona sin decidir por ella?',
      opciones: [
        'Escuchar sus ideas antes de aconsejar.',
        'Ayudarle a analizar alternativas.',
        'Respetar sus decisiones y su proceso.'
      ],
      seleccion: '',
      respuesta: ''
    },
    {
      titulo: '2. Enseñar con el ejemplo',
      pregunta: '¿Qué conducta necesito fortalecer para ser un ejemplo coherente?',
      opciones: [
        'Cumplir los compromisos que asumo.',
        'Reconocer mis errores y aprender de ellos.',
        'Actuar con respeto incluso ante las diferencias.'
      ],
      seleccion: '',
      respuesta: ''
    },
    {
      titulo: '3. Compartir lo aprendido',
      pregunta: '¿Qué conocimiento o experiencia puedo compartir para ayudar a alguien a avanzar?',
      opciones: [
        'Una habilidad que he desarrollado.',
        'Una experiencia de la que aprendí.',
        'Un recurso o una orientación útil.'
      ],
      seleccion: '',
      respuesta: ''
    },
    {
      titulo: '4. Desarrollar autonomía',
      pregunta: '¿Cómo puedo ayudar a otra persona a confiar en su propio criterio?',
      opciones: [
        'Hacer preguntas que le ayuden a pensar.',
        'Reconocer sus avances y capacidades.',
        'Animarla a tomar decisiones responsables.'
      ],
      seleccion: '',
      respuesta: ''
    },
    {
      titulo: '5. Formar a otros líderes',
      pregunta: '¿Qué acción concreta puedo realizar esta semana para contribuir al crecimiento de otra persona?',
      opciones: [
        'Dedicar tiempo a escucharla.',
        'Compartir una enseñanza útil.',
        'Acompañarla a poner en práctica lo aprendido.'
      ],
      seleccion: '',
      respuesta: ''
    }
  ];

  mensaje = '';

  ngOnInit(): void {
    try {
      const guardado = localStorage.getItem(this.clave);
      if (guardado) {
        const respuestas = JSON.parse(guardado);
        this.reflexiones = this.reflexiones.map((item, i) => ({
          ...item,
          seleccion: respuestas[i]?.seleccion ?? '',
          respuesta: respuestas[i]?.respuesta ?? ''
        }));
      }
    } catch {
      this.mensaje = 'No fue posible recuperar las respuestas guardadas.';
    }
  }

  guardarLocalmente(): void {
    try {
      localStorage.setItem(this.clave, JSON.stringify(
        this.reflexiones.map(({ seleccion, respuesta }) => ({
          seleccion,
          respuesta
        }))
      ));
      this.mensaje = 'Tus reflexiones se guardaron en este dispositivo.';
    } catch {
      this.mensaje = 'No fue posible guardar las respuestas en este navegador.';
    }
  }

  guardarReflexion(): void {
    this.guardarLocalmente();

    const partes = this.reflexiones.map((item) => {
      const eleccion = item.seleccion
        ? `Opción elegida: ${item.seleccion}`
        : 'Opción elegida: Sin seleccionar';
      const respuesta = item.respuesta.trim()
        ? item.respuesta.trim()
        : 'Reflexión escrita: Pendiente';
      return `${item.titulo}\n${item.pregunta}\n${eleccion}\nMi reflexión: ${respuesta}`;
    });

    const mensaje = [
      'JV GLOBAL | LIDERAZGO CDS',
      'ENSEÑANZA 04: FORMAR LÍDERES QUE FORMEN A OTROS',
      '',
      ...partes,
      '',
      'Claridad · Disciplina · Superación',
      'Juntos vencemos.'
    ].join('\n\n');

    const area = document.createElement('textarea');
    area.value = mensaje;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();

    let copiado = false;
    try {
      copiado = document.execCommand('copy');
    } catch {
      copiado = false;
    }
    area.remove();

    if (copiado) {
      this.mensaje = 'Reflexiones preparadas y copiadas. En WhatsApp, entra al grupo y pega el mensaje antes de enviarlo.';
    } else {
      this.mensaje = 'No se pudo copiar automáticamente. Puedes guardar tus respuestas e intentarlo nuevamente.';
    }

    window.open(this.invitacion, '_blank', 'noopener,noreferrer');
  }
}
