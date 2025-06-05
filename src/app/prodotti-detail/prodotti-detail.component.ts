import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface Prodotto {
  id: number;
  title: string;
  description: string;
  gradientClass: string;
  price: string;
}

@Component({
  selector: 'app-prodotti-detail',
  imports: [CommonModule],
  templateUrl: './prodotti-detail.component.html',
  styleUrl: './prodotti-detail.component.css'
})
export class ProdottiDetailComponent {
  prodotto: any;
  prodotti: Prodotto[] = [
    {
      id: 1,
      title: 'Cuffie Premium',
      description: 'Audio hi-fi con cancellazione attiva del rumore e design ergonomico per sessioni di ascolto prolungate.',
      gradientClass: 'bg-gradient-blue',
      price: '€299'
    },
    {
      id: 2,
      title: 'Speaker Wireless',
      description: 'Altoparlante portatile con tecnologia Bluetooth 5.0 e qualità audio superiore per ogni ambiente.',
      gradientClass: 'bg-gradient-green',
      price: '€199'
    },
    {
      id: 3,
      title: 'Accessori Audio',
      description: 'Linea completa di accessori premium: cavi, supporti e custodie per completare la tua esperienza.',
      gradientClass: 'bg-gradient-purple',
      price: '€49'
    }
  ];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.prodotto = this.prodotti.find(prodotti => prodotti.id === id);
  }

  goToProdotti(): void {
    this.router.navigate(['/prodotti']);
  }
}
