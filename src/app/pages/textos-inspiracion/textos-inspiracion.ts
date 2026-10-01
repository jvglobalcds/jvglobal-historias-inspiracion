import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface TextoInspiracion {
  id: string;
  titulo: string;
  tema: string;
  descripcion: string;
}

@Component({
  selector: 'app-textos-inspiracion',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './textos-inspiracion.html',
  styleUrl: './textos-inspiracion.css'
})
export class TextosInspiracion {

   textos: TextoInspiracion[] = [

    {
      id: 'muevete-como-si-todo-te-fuera-a-salir-bien',
      titulo: 'Muévete como si todo te fuera a salir bien',
      tema: 'FE Y CONFIANZA',
      descripcion:
        'Una reflexión sobre avanzar aunque todavía no podamos ver cómo sucederán las cosas.'
    },

    {
      id: 'kfc-coronel-sanders-demasiado-tarde',
      titulo: 'KFC · Coronel Sanders: Cuando todos creen que ya es demasiado tarde',
      tema: 'PERSEVERANCIA Y PROPÓSITO',
      descripcion:
        'La historia de un hombre que comenzó una nueva etapa cuando muchos habrían pensado que ya era demasiado tarde.'
    
    },

    {
      id: 'cristiano-ronaldo-el-nino-que-no-se-rindio',
      titulo: 'Cristiano Ronaldo · El niño que tuvo que aprender a no rendirse',
      tema: 'DISCIPLINA Y SUPERACIÓN',
      descripcion:
        'Una reflexión sobre lo que ocurre cuando decides seguir creciendo aunque todavía sientas que no encajas.'
    
    },

    {
      id: 'no-necesitas-ser-el-mejor',
      titulo: 'No necesitas ser el mejor',
      tema: 'CONSTANCIA Y DISCIPLINA',
      descripcion:
        'Una reflexión sobre cómo las pequeñas acciones repetidas pueden transformar tu cuerpo, tu mente y tu vida.'
    }

  ];

}