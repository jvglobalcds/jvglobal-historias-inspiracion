import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-liderazgo-cds',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './liderazgo-cds.html',
  styleUrl: './liderazgo-cds.css'
})
export class LiderazgoCds {
  ejes = [
    {
      numero: '01',
      titulo: 'CRECER PARA PODER CONTRIBUIR',
      descripcion:
        'El liderazgo comienza por uno mismo: reconocer lo que necesitamos aprender, fortalecer nuestras capacidades y asumir la responsabilidad de nuestro propio crecimiento.',
      pregunta:
        '¿Qué capacidad necesito desarrollar para avanzar?'
    },
    {
      numero: '02',
      titulo: 'EDUCAR ANTES QUE SOLO MOTIVAR',
      descripcion:
        'La motivación puede impulsarnos a comenzar. El aprendizaje nos ayuda a comprender nuestro rumbo, tomar mejores decisiones y convertir las intenciones en acciones.',
      pregunta:
        '¿Qué necesito comprender o aprender para dar mi siguiente paso?'
    },
    {
      numero: '03',
      titulo: 'CONSTRUIR PERSONAS Y COMUNIDAD',
      descripcion:
        'Un grupo se fortalece cuando las personas construyen confianza, aprenden a colaborar y encuentran un espacio para aportar. Los números no sustituyen el desarrollo humano.',
      pregunta:
        '¿Cómo puedo contribuir hoy al crecimiento de otra persona?'
    },
    {
      numero: '04',
      titulo: 'FORMAR LÍDERES QUE FORMEN A OTROS',
      descripcion:
        'Liderar también significa escuchar, acompañar, compartir lo aprendido y crear oportunidades para que otras personas desarrollen su propio criterio y capacidad de actuar.',
      pregunta:
        '¿Estoy ayudando a otros a crecer con autonomía y confianza?'
    }
  ];
}
