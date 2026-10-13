import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-construir-personas-comunidad',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './construir-personas-comunidad.html',
  styleUrl: './construir-personas-comunidad.css'
})
export class ConstruirPersonasComunidad implements OnInit {
  confianza = '';
  confianzaDetalle = '';
  escucha = '';
  escuchaDetalle = '';
  contribucion = '';
  contribucionDetalle = '';
  aprendizaje = '';
  accion = '';
  accionDetalle = '';
  compromiso = '';
  compromisoDetalle = '';
  guardado = false;

  private readonly claveGuardado = 'cds_construir_personas_comunidad';

  ngOnInit(): void {
    try {
      const datos = localStorage.getItem(this.claveGuardado);
      if (!datos) return;

      const d = JSON.parse(datos);
      this.confianza = d.confianza ?? '';
      this.confianzaDetalle = d.confianzaDetalle ?? '';
      this.escucha = d.escucha ?? '';
      this.escuchaDetalle = d.escuchaDetalle ?? '';
      this.contribucion = d.contribucion ?? '';
      this.contribucionDetalle = d.contribucionDetalle ?? '';
      this.aprendizaje = d.aprendizaje ?? '';
      this.accion = d.accion ?? '';
      this.accionDetalle = d.accionDetalle ?? '';
      this.compromiso = d.compromiso ?? '';
      this.compromisoDetalle = d.compromisoDetalle ?? '';
    } catch {
      // La enseñanza permanece disponible aunque falle la recuperación.
    }
  }

  guardarReflexion(): void {
    const respuestas = [
      {
        pregunta: '1. ¿CÓMO CONSTRUYO CONFIANZA?',
        respuesta: [this.confianza, this.confianzaDetalle.trim()]
          .filter(Boolean).join('\n') || 'Aún debo reflexionar sobre cómo construyo confianza.'
      },
      {
        pregunta: '2. ¿CÓMO PUEDO ESCUCHAR Y COMPRENDER MEJOR?',
        respuesta: [this.escucha, this.escuchaDetalle.trim()]
          .filter(Boolean).join('\n') || 'Aún debo identificar cómo puedo escuchar mejor.'
      },
      {
        pregunta: '3. ¿CÓMO PUEDO CONTRIBUIR AL CRECIMIENTO DE OTROS?',
        respuesta: [this.contribucion, this.contribucionDetalle.trim()]
          .filter(Boolean).join('\n') || 'Aún debo identificar cómo puedo contribuir.'
      },
      {
        pregunta: '4. ¿QUÉ APRENDIZAJE ME LLEVO?',
        respuesta: this.aprendizaje.trim() || 'Aún debo escribir mi aprendizaje.'
      },
      {
        pregunta: '5. ¿QUÉ ACCIÓN Y COMPROMISO ASUMO?',
        respuesta: [
          this.accion,
          this.accionDetalle.trim(),
          this.compromiso,
          this.compromisoDetalle.trim()
        ].filter(Boolean).join('\n') || 'Aún debo definir una acción y un compromiso.'
      }
    ];

    const datos = {
      confianza: this.confianza,
      confianzaDetalle: this.confianzaDetalle,
      escucha: this.escucha,
      escuchaDetalle: this.escuchaDetalle,
      contribucion: this.contribucion,
      contribucionDetalle: this.contribucionDetalle,
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
      'ENSEÑANZA 03: CONSTRUIR PERSONAS Y COMUNIDAD',
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
