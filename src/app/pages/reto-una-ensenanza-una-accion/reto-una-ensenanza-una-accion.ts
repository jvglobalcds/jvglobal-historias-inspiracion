import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reto-una-ensenanza-una-accion',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './reto-una-ensenanza-una-accion.html',
  styleUrl: './reto-una-ensenanza-una-accion.css'
})
export class RetoUnaEnsenanzaUnaAccion {
  persona = '';
  fechaInicio = this.fechaLocal();
  reflexion = '';
  mensaje = '';
  textoParaCopiar = '';
  etapa = 0;
  fechaSeguimiento = '';

  readonly enlaceGrupo =
    'https://chat.whatsapp.com/IqiCDzdQorxHT6SpfMUs4j';

  readonly etapas = [
    'Identifiqué a una persona con quien conversar.',
    'Inicié una conversación y escuché sus intereses.',
    'Presenté JV Global porque mostró interés en conocerlo.',
    'Di seguimiento y aclaré sus dudas.',
    'Registré el resultado y definí mi siguiente paso.'
  ];

  private fechaLocal(): string {
    const fecha = new Date();
    const año = fecha.getFullYear();
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const dia = String(fecha.getDate()).padStart(2, '0');
    return `${año}-${mes}-${dia}`;
  }

  get fechaLimite(): string {
    const fecha = new Date(`${this.fechaInicio}T12:00:00`);
    fecha.setDate(fecha.getDate() + 6);
    const año = fecha.getFullYear();
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const dia = String(fecha.getDate()).padStart(2, '0');
    return `${año}-${mes}-${dia}`;
  }

  get diasRestantes(): number {
    const hoy = new Date(`${this.fechaLocal()}T12:00:00`);
    const limite = new Date(`${this.fechaLimite}T12:00:00`);
    return Math.max(0, Math.ceil((limite.getTime() - hoy.getTime()) / 86400000));
  }

  get progreso(): number {
    return Math.round((this.etapa / this.etapas.length) * 100);
  }

  cambiarEtapa(indice: number, evento: Event): void {
    const seleccionado = (evento.target as HTMLInputElement).checked;

    if (seleccionado && indice === this.etapa) {
      this.etapa++;
      this.mensaje = 'Avance registrado en esta sesión.';
      return;
    }

    if (!seleccionado && indice === this.etapa - 1) {
      this.etapa--;
      this.mensaje = 'Selección corregida. Puedes volver a completar este paso cuando corresponda.';
    }
  }

  private copiarConMetodoAlternativo(texto: string): boolean {
    const campo = document.createElement('textarea');
    campo.value = texto;
    campo.setAttribute('readonly', '');
    campo.style.position = 'fixed';
    campo.style.left = '-9999px';
    campo.style.top = '0';
    document.body.appendChild(campo);
    campo.focus();
    campo.select();

    let copiado = false;

    try {
      copiado = document.execCommand('copy');
    } catch {
      copiado = false;
    } finally {
      document.body.removeChild(campo);
    }

    return copiado;
  }

  seleccionarMensaje(): void {
    const campo = document.getElementById(
      'mensajeParaCopiar'
    ) as HTMLTextAreaElement | null;

    if (campo) {
      campo.focus();
      campo.select();
      this.mensaje = 'Mensaje seleccionado. Presiona Ctrl+C para copiarlo y pégalo en WhatsApp.';
    }
  }

  async compartirWhatsApp(): Promise<void> {
    const partes = [
      '*JV GLOBAL · RETO 01*',
      '*UNA PERSONA, UNA OPORTUNIDAD*',
      '',
      '🎯 *Mi compromiso:* conseguir que una persona conozca JV Global durante los próximos 7 días.',
      `📅 *Fecha de inicio:* ${this.fechaInicio}`,
      `📅 *Fecha límite:* ${this.fechaLimite}`,
      '',
      `*Mi avance: ${this.etapa} de ${this.etapas.length} pasos (${this.progreso} %)*`
    ];

    if (this.etapa > 0) {
      partes.push('', '*Acciones completadas:*');
      this.etapas.slice(0, this.etapa).forEach((etapa) => {
        partes.push(`✅ ${etapa}`);
      });
    } else {
      partes.push('', 'Todavía estoy preparando mi primera acción.');
    }

    if (this.etapa < this.etapas.length) {
      partes.push(
        '',
        '*Mi siguiente paso:*',
        this.etapas[this.etapa]
      );
    } else {
      partes.push(
        '',
        '*Reto completado:*',
        'He registrado los cinco pasos. Ahora reflexionaré sobre lo aprendido y definiré mi siguiente acción.'
      );
    }

    if (this.reflexion.trim()) {
      partes.push('', '*Mi reflexión:*', this.reflexion.trim());
    }

    partes.push(
      '',
      'El objetivo es escuchar, compartir información con respeto y permitir que cada persona decida libremente.',
      '',
      '*Claridad · Disciplina · Superación*',
      '*¡Juntos Vencemos!*'
    );

    const texto = partes.join('\n');
    this.textoParaCopiar = '';

    const ventana = window.open(this.enlaceGrupo, '_blank');

    try {
      await navigator.clipboard.writeText(texto);
      this.mensaje = 'Mensaje copiado. Pégalo en el grupo de WhatsApp.';
    } catch {
      const copiado = this.copiarConMetodoAlternativo(texto);

      if (copiado) {
        this.mensaje = 'Mensaje copiado. Pégalo en el grupo de WhatsApp.';
      } else {
        this.textoParaCopiar = texto;
        this.mensaje = 'La copia automática no está disponible. Aquí tienes el mensaje para copiarlo manualmente.';
      }
    }

    if (!ventana) {
      this.mensaje += ' Si WhatsApp no se abrió, permite las ventanas emergentes del navegador.';
    }
  }
}
