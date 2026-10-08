import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ensenanza-temporada',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './ensenanza-temporada.html',
  styleUrl: './ensenanza-temporada.css'
})
export class EnsenanzaTemporada {

  temporada = {
    numero: '01',
    titulo: 'MENTALIDAD, PROPÓSITO Y CRECIMIENTO',
    descripcion:
      'Una colección de enseñanzas, reflexiones y exposiciones desarrolladas para aprender, reflexionar y compartir.'
  };

}