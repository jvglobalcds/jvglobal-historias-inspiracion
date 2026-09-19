import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Historia } from '../../data/historias';
import { HistoriasService } from '../../services/historias.service';

@Component({
  selector: 'app-categoria',
  imports: [RouterLink, FormsModule],
  templateUrl: './categoria.html',
  styleUrl: './categoria.css'
})
export class Categoria {

  slug = '';

  historiasFiltradas: Historia[] = [];

  terminoBusqueda = '';

  private historiasCategoria: Historia[] = [];

  constructor(
    private route: ActivatedRoute,
    private historiasService: HistoriasService
  ) {

    this.route.paramMap.subscribe(params => {

      this.slug = params.get('slug') ?? '';

      this.historiasCategoria =
        this.historiasService.obtenerPorCategoria(this.slug);

      this.filtrarHistorias();

    });

  }

  filtrarHistorias(): void {

    const termino = this.normalizar(this.terminoBusqueda);

    if (!termino) {

      this.historiasFiltradas = [
        ...this.historiasCategoria
      ];

      return;
    }

    this.historiasFiltradas =
      this.historiasCategoria.filter(historia => {

        const contenido = [
          historia.nombre,
          historia.contexto,
          historia.epoca,
          ...historia.categoria,
          ...historia.temas,
          ...historia.valoresCds
        ]
          .map(valor => this.normalizar(valor))
          .join(' ');

        return contenido.includes(termino);

      });

  }

  private normalizar(texto: string): string {

    return texto
      .trim()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

  }

  get nombreCategoria(): string {

    const nombres: Record<string, string> = {

      'superacion-personal': 'SUPERACIÓN PERSONAL',
      'disciplina': 'DISCIPLINA',
      'claridad': 'CLARIDAD',
      'liderazgo': 'LIDERAZGO',
      'deporte': 'DEPORTES',
      'adversidad': 'ADVERSIDAD',
      'transformacion': 'TRANSFORMACIÓN',
      'innovacion': 'INNOVACIÓN',
      'familia': 'FAMILIA',
      'legado': 'LEGADO'

    };

    return nombres[this.slug] ?? 'HISTORIAS';

  }

}