import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Feature {
  title: string;
  description: string;
  image: string;
  reverse: boolean;
}

@Component({
  selector: 'app-design',
  imports: [CommonModule,],
  templateUrl: './design.component.html',
  styleUrl: './design.component.css'
})
export class DesignComponent {
  features: Feature[] = [
    {
      title: 'Design Minimalista',
      description: 'Linee pulite e materiali pregiati si fondono in un design che celebra la tradizione italiana del bello. Ogni dettaglio è studiato per garantire eleganza e funzionalità.',
      image: 'gradient-gray',
      reverse: false
    },
    {
      title: 'Tecnologia Avanzata',
      description: 'Driver personalizzati, elaborazione digitale del segnale e componenti di alta qualità garantiscono una riproduzione audio fedele e coinvolgente.',
      image: 'gradient-orange',
      reverse: true
    },
    {
      title: 'Sostenibilità',
      description: 'Utilizziamo materiali riciclabili e processi produttivi a basso impatto ambientale, per un futuro più sostenibile senza compromessi sulla qualità.',
      image: 'gradient-green',
      reverse: false
    }
  ];
}
