import { Component } from '@angular/core';


@Component({
  selector: 'racing-app',
  template: `

  <main><router-outlet></router-outlet></main>
`,
})
export class AppComponent {
  heading = "Ultra Racing Schedule"
}
