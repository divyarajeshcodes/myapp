import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterModule,
  ],
  template:`
  <main>
  <header class="brand-name">
  </header>
  <section class="content">
  <router-outlet></router-outlet>
  </section>
  </main>
`,
  styles:[]
})

export class AppComponent {
  title = 'DivyaRajesh';
}
