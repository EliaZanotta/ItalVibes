import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet, CommonModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ItalVibes';
}
