
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-liderazgo-personal',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './liderazgo-personal.html',
  styleUrl: './liderazgo-personal.css'
})
export class LiderazgoPersonal implements OnInit {

  // 1. Mis fortalezas
  fortalezaEscuchar = false;
  fortalezaResponsable = false;
  fortalezaAprender = false;
  fortalezaIniciativa = false;
  fortalezaSuperacion = false;
  fortalezaAyudar = false;
  fortalezas = '';

  // 2. Capacidad que quiero desarrollar
  mejorarConfianza = false;
  mejorarTiempo = false;
  mejorarDisciplina = false;
  mejorarComunicacion = false;
  mejorarAprendizaje = false;
  mejorarDecisiones = false;
  mejorar = '';

  // 3. Mi objetivo
  objetivo = '';
  objetivoDetalle = '';

  // 4. La acción que voy a repetir
  accion = '';
  accionDetalle = '';

  // 5. Mi compromiso
  compromiso = '';
  compromisoDetalle = '';

  guardado = false;

  private readonly claveGuardado = 'cds_liderazgo_personal';

  private readonly enlaceGrupo =
    'https://chat.whatsapp.com/IqiCDzdQorxHT6SpfMUs4j';

  ngOnInit(): void {
    try {
      const datos = localStorage.getItem(this.claveGuardado);

      if (!datos) return;

      const d = JSON.parse(datos);

      this.fortalezaEscuchar = d.fortalezaEscuchar ?? false;
      this.fortalezaResponsable = d.fortalezaResponsable ?? false;
      this.fortalezaAprender = d.fortalezaAprender ?? false;
      this.fortalezaIniciativa = d.fortalezaIniciativa ?? false;
      this.fortalezaSuperacion = d.fortalezaSuperacion ?? false;
      this.fortalezaAyudar = d.fortalezaAyudar ?? false;
      this.fortalezas = d.fortalezas ?? '';

      this.mejorarConfianza = d.mejorarConfianza ?? false;
      this.mejorarTiempo = d.mejorarTiempo ?? false;
      this.mejorarDisciplina = d.mejorarDisciplina ?? false;
      this.mejorarComunicacion = d.mejorarComunicacion ?? false;
      this.mejorarAprendizaje = d.mejorarAprendizaje ?? false;
      this.mejorarDecisiones = d.mejorarDecisiones ?? false;
      this.mejorar = d.mejorar ?? '';

      this.objetivo = d.objetivo ?? '';
      this.objetivoDetalle = d.objetivoDetalle ?? '';

      this.accion = d.accion ?? '';
      this.accionDetalle = d.accionDetalle ?? '';

      this.compromiso = d.compromiso ?? '';
      this.compromisoDetalle = d.compromisoDetalle ?? '';

    } catch {
      // La página continúa disponible aunque falle la recuperación.
    }
  }

  async guardarReflexion(): Promise<void> {

    const fortalezasSeleccionadas = [
      this.fortalezaEscuchar ? 'Escuchar con atención' : '',
      this.fortalezaResponsable ? 'Ser responsable' : '',
      this.fortalezaAprender ? 'Aprender constantemente' : '',
      this.fortalezaIniciativa ? 'Tomar la iniciativa' : '',
      this.fortalezaSuperacion ? 'Superarme ante las dificultades' : '',
      this.fortalezaAyudar ? 'Ayudar a otras personas' : '',
      this.fortalezas.trim()
    ].filter(Boolean);

    const capacidadesSeleccionadas = [
      this.mejorarConfianza ? 'Fortalecer mi confianza' : '',
      this.mejorarTiempo ? 'Organizar mejor mi tiempo' : '',
      this.mejorarDisciplina ? 'Fortalecer mi disciplina' : '',
      this.mejorarComunicacion ? 'Mejorar mi comunicación' : '',
      this.mejorarAprendizaje ? 'Desarrollar mi aprendizaje' : '',
      this.mejorarDecisiones ? 'Tomar mejores decisiones' : '',
      this.mejorar.trim()
    ].filter(Boolean);

    const respuestas = [
      {
        pregunta: '1. MIS FORTALEZAS',
        respuesta: fortalezasSeleccionadas.join(', ') ||
          'Aún estoy descubriendo mis fortalezas.'
      },
      {
        pregunta: '2. LA CAPACIDAD QUE QUIERO DESARROLLAR',
        respuesta: capacidadesSeleccionadas.join(', ') ||
          'Aún debo elegir qué capacidad desarrollar.'
      },
      {
        pregunta: '3. MI OBJETIVO PARA LOS PRÓXIMOS SIETE DÍAS',
        respuesta: [
          this.objetivo,
          this.objetivoDetalle.trim()
        ].filter(Boolean).join('\n') ||
          'Aún debo definir mi objetivo.'
      },
      {
        pregunta: '4. LA ACCIÓN QUE VOY A REPETIR',
        respuesta: [
          this.accion,
          this.accionDetalle.trim()
        ].filter(Boolean).join('\n') ||
          'Aún debo elegir una acción.'
      },
      {
        pregunta: '5. MI COMPROMISO Y REVISIÓN',
        respuesta: [
          this.compromiso,
          this.compromisoDetalle.trim()
        ].filter(Boolean).join('\n') ||
          'Aún debo definir mi compromiso.'
      }
    ];

    const datos = {
      fortalezaEscuchar: this.fortalezaEscuchar,
      fortalezaResponsable: this.fortalezaResponsable,
      fortalezaAprender: this.fortalezaAprender,
      fortalezaIniciativa: this.fortalezaIniciativa,
      fortalezaSuperacion: this.fortalezaSuperacion,
      fortalezaAyudar: this.fortalezaAyudar,
      fortalezas: this.fortalezas,

      mejorarConfianza: this.mejorarConfianza,
      mejorarTiempo: this.mejorarTiempo,
      mejorarDisciplina: this.mejorarDisciplina,
      mejorarComunicacion: this.mejorarComunicacion,
      mejorarAprendizaje: this.mejorarAprendizaje,
      mejorarDecisiones: this.mejorarDecisiones,
      mejorar: this.mejorar,

      objetivo: this.objetivo,
      objetivoDetalle: this.objetivoDetalle,

      accion: this.accion,
      accionDetalle: this.accionDetalle,

      compromiso: this.compromiso,
      compromisoDetalle: this.compromisoDetalle
    };

    try {
      localStorage.setItem(
        this.claveGuardado,
        JSON.stringify(datos)
      );
      this.guardado = true;
    } catch {
      this.guardado = false;
    }

    const mensaje = [
      'JV GLOBAL | LIDERAZGO CDS',
      'MI REFLEXIÓN: LIDERAZGO PERSONAL',
      '',
      ...respuestas.map(
        item => `${item.pregunta}\n${item.respuesta}`
      ),
      '',
      'Claridad · Disciplina · Superación',
      'Juntos Vencemos'
    ].join('\n\n');

    // Copiar el texto completo para pegarlo en el grupo.
    try {
      await navigator.clipboard.writeText(mensaje);

      alert(
        '¡Reflexión copiada! Al entrar al grupo de JV GLOBAL, ' +
        'pulsa el campo de mensaje, pega el texto y envíalo.'
      );

      window.open(
        this.enlaceGrupo,
        '_blank',
        'noopener,noreferrer'
      );

    } catch {
      alert(
        'No se pudo copiar automáticamente. Abre la página mediante ' +
        'HTTPS o localhost y vuelve a intentarlo.'
      );
    }
  }
}
