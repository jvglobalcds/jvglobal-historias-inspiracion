import { Injectable } from '@angular/core';
import { HISTORIAS, Historia } from '../data/historias';

@Injectable({
  providedIn: 'root'
})
export class HistoriasService {

  readonly historias = HISTORIAS;

  obtenerTodas(): Historia[] {
    return this.historias;
  }

  obtenerPorId(id: string): Historia | undefined {
    return this.historias.find(
      historia => historia.id === id
    );
  }

  obtenerPorCategoria(slug: string): Historia[] {

    const categoriaBuscada = this.normalizar(slug);

    return this.historias.filter(historia =>
      historia.categoria.some(
        categoria =>
          this.normalizar(categoria) === categoriaBuscada
      )
    );
  }

  buscar(termino: string): Historia[] {

    const busqueda = this.normalizar(termino);

    if (!busqueda) {
      return [];
    }

    return this.historias.filter(historia => {

      const contenido = [
        historia.nombre,
        historia.epoca,
        historia.contexto,
        ...historia.categoria,
        ...historia.temas,
        ...historia.valoresCds
      ]
        .map(valor => this.normalizar(valor))
        .join(' ');

      return contenido.includes(busqueda);

    });
  }

  private normalizar(texto: string): string {

    return texto
      .trim()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

  }

}