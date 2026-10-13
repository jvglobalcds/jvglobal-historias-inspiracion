import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-educar-antes-motivar',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './educar-antes-motivar.html',
  styleUrl: './educar-antes-motivar.css'
})
export class EducarAntesMotivar implements OnInit {
  necesidad = '';
  necesidadDetalle = '';

  fuente = '';
  fuenteDetalle = '';

  aprendizaje = '';

  accion = '';
  accionDetalle = '';

  compromiso = '';
  compromisoDetalle = '';

  guardado = false;

  private readonly claveGuardado = 'cds_educar_antes_motivar';

  ngOnInit(): void {
    try {
      const datos = localStorage.getItem(this.claveGuardado);
      if (!datos) return;

      const d = JSON.parse(datos);

      this.necesidad = d.necesidad ?? '';
      this.necesidadDetalle = d.necesidadDetalle ?? '';
      this.fuente = d.fuente ?? '';
      this.fuenteDetalle = d.fuenteDetalle ?? '';
      this.aprendizaje = d.aprendizaje ?? '';
      this.accion = d.accion ?? '';
      this.accionDetalle = d.accionDetalle ?? '';
      this.compromiso = d.compromiso ?? '';
      this.compromisoDetalle = d.compromisoDetalle ?? '';
    } catch {
      // La enseñanza continúa disponible aunque no se pueda recuperar el guardado.
    }
  }

  guardarReflexion(): void {
    const respuestas = [
      {
        pregunta: '1. ¿QUÉ NECESITO COMPRENDER O APRENDER?',
        respuesta: [this.necesidad, this.necesidadDetalle.trim()]
          .filter(Boolean).join('\n') || 'Aún debo identificar qué necesito aprender.'
      },
      {
        pregunta: '2. ¿CÓMO PUEDO APRENDERLO?',
        respuesta: [this.fuente, this.fuenteDetalle.trim()]
          .filter(Boolean).join('\n') || 'Aún debo elegir cómo aprender.'
      },
      {
        pregunta: '3. ¿QUÉ IDEA ME LLEVO?',
        respuesta: this.aprendizaje.trim() || 'Aún debo escribir lo que aprendí.'
      },
      {
        pregunta: '4. ¿CÓMO LO PONDRÉ EN PRÁCTICA?',
        respuesta: [this.accion, this.accionDetalle.trim()]
          .filter(Boolean).join('\n') || 'Aún debo elegir una acción concreta.'
      },
      {
        pregunta: '5. ¿CUÁL ES MI COMPROMISO?',
        respuesta: [this.compromiso, this.compromisoDetalle.trim()]
          .filter(Boolean).join('\n') || 'Aún debo definir mi compromiso.'
      }
    ];

    const datos = {
      necesidad: this.necesidad,
      necesidadDetalle: this.necesidadDetalle,
      fuente: this.fuente,
      fuenteDetalle: this.fuenteDetalle,
      aprendizaje: this.aprendizaje,
      accion: this.accion,
      accionDetalle: this.accionDetalle,
      compromiso: this.compromiso,
      compromisoDetalle: this.compromisoDetalle
    };

    try {
      localStorage.setItem(this.claveGuardado, JSON.stringify(datos));
      this.guardado = true;
    } catch {
      this.guardado = false;
      alert('No se pudo guardar la reflexión en este dispositivo.');
      return;
    }

    const mensaje = [
      'JV GLOBAL | LIDERAZGO CDS',
      'ENSEÑANZA 02: EDUCAR ANTES QUE SOLO MOTIVAR',
      '',
      ...respuestas.map(item => `${item.pregunta}\n${item.respuesta}`),
      '',
      'Claridad · Disciplina · Superación',
      'Juntos Vencemos'
    ].join('\n\n');

    try {
      const copia = document.createElement('textarea');
      copia.value = mensaje;
      copia.setAttribute('readonly', '');
      copia.style.position = 'fixed';
      copia.style.opacity = '0';
      document.body.appendChild(copia);
      copia.select();
      const copiado = document.execCommand('copy');
      copia.remove();

      if (copiado) {
        window.open(
          'https://chat.whatsapp.com/IqiCDzdQorxHT6SpfMUs4j',
          '_blank',
          'noopener,noreferrer'
        );
        alert('Tu reflexión está copiada. En WhatsApp, elige el grupo o conversación, pega el mensaje y confirma el envío.');
      } else {
        alert('La reflexión se guardó, pero no se pudo copiar automáticamente. Inténtalo de nuevo.');
      }
    } catch {
      alert('La reflexión se guardó, pero no se pudo abrir WhatsApp. Puedes intentarlo de nuevo.');
    }
  }
}
