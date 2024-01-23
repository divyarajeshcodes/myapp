import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';import { Router } from '@angular/router';


@Component({
  selector: 'app-general',
  standalone: true,
  imports: [],
  template: `
<body>
  <div class = container>
    So Who Am I?
    I've recently graduated from Virginia Tech with my Bachelors of Science in Computer Science. 
    </div>
</body>
`,
  styleUrl: './general.component.css'
})

export class GeneralComponent {

}
