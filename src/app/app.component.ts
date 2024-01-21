import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
  ],
  template:`
  <main>
  <header class="brand-name">
  </header>
  <section class="content">
    <app-home></app-home>
  </section>
  </main>
`,
  styles:[]
})

export class AppComponent {
  title = 'DivyaRajesh';
}
