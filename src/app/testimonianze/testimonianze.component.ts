import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

  interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

@Component({
  selector: 'app-testimonianze',
  imports: [CommonModule],
  templateUrl: './testimonianze.component.html',
  styleUrl: './testimonianze.component.css'
})
export class TestimonianzeComponent {

  testimonials: Testimonial[] = [
    {
      quote: "La qualità audio è straordinaria. Finalmente cuffie che uniscono prestazioni tecniche eccellenti a un design raffinato che non passa inosservato.",
      author: "Marco Rossi",
      role: "Produttore Musicale",
      avatar: 'bg-gradient-blue'
    },
    {
      quote: "ItalVibes ha ridefinito la mia esperienza di ascolto. Il suono è cristallino e il comfort prolungato li rende perfetti per le mie lunghe sessioni di lavoro.",
      author: "Sofia Bianchi",
      role: "Sound Designer",
      avatar: 'bg-gradient-purple'
    },
    {
      quote: "Incredibile come un prodotto possa essere così elegante e funzionale allo stesso tempo. La tecnologia italiana al suo meglio.",
      author: "Alessandro Verde",
      role: "Musicista",
      avatar: 'bg-gradient-green'
    }
  ];
}
