import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { ProdottiComponent } from '../prodotti/prodotti.component';
import { DesignComponent } from "../design/design.component";
import { TestimonianzeComponent } from '../testimonianze/testimonianze.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, ProdottiComponent, DesignComponent, TestimonianzeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

}
