import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Historia } from '../../data/historias';
import { HistoriasService } from '../../services/historias.service';

@Component({
  selector: 'app-buscador',
  imports: [FormsModule, RouterLink],
  templateUrl: './buscador.html',
  styleUrl: './buscador.css'
})
export class Buscador {

  termino = '';

  constructor(
    private historiasService: HistoriasService
  ) {}

  get historiasFiltradas(): Historia[] {

    return this.historiasService.buscar(this.termino);

  }

}