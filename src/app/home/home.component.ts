import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [

  ],
  template: `
    <body>
      <div class="hero">Hi, I'm Divya and I'm a </div>
      <div class="container">
        <div class="typed-out">Web Developer</div>
      </div>
      <div class="button" (click)="navigateToLearnMore()">Learn More</div>
    </body>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) { }

  navigateToLearnMore() {
    this.router.navigate(['/general']);
  }
}
