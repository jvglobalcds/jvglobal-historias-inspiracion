import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Historia } from '../../data/historias';
import { HistoriasService } from '../../services/historias.service';

@Component({
  selector: 'app-categoria',
  imports: [RouterLink],
  templateUrl: './categoria.html',
  styleUrl: './categoria.css'
})
export class Categoria {

  slug = '';

  historiasFiltradas: Historia[] = [];

  constructor(
    private route: ActivatedRoute,
    private historiasService: HistoriasService
  ) {

    this.route.paramMap.subscribe(params => {

      this.slug = params.get('slug') ?? '';

      this.historiasFiltradas =
        this.historiasService.obtenerPorCategoria(this.slug);

    });

  }

  get nombreCategoria(): string {

    const nombres: Record<string, string> = {

      'superacion-personal': 'SUPERACIÓN PERSONAL',
      'disciplina': 'DISCIPLINA',
      'claridad': 'CLARIDAD',
      'liderazgo': 'LIDERAZGO',
      'deporte': 'DEPORTE',
      'adversidad': 'ADVERSIDAD',
      'transformacion': 'TRANSFORMACIÓN',
      'innovacion': 'INNOVACIÓN',
      'familia': 'FAMILIA'

    };

    return nombres[this.slug] ?? 'HISTORIAS';

  }

}