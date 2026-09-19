import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Historia as HistoriaData } from '../../data/historias';
import { HistoriasService } from '../../services/historias.service';

@Component({
  selector: 'app-historia',
  imports: [RouterLink],
  templateUrl: './historia.html',
  styleUrl: './historia.css'
})
export class Historia {

  historia!: HistoriaData;

  constructor(
    private route: ActivatedRoute,
    private historiasService: HistoriasService
  ) {

    this.route.paramMap.subscribe(params => {

      const slug = params.get('slug') ?? '';

      const encontrada =
        this.historiasService.obtenerPorId(slug);

      if (encontrada) {
        this.historia = encontrada;
      }

    });

  }

}