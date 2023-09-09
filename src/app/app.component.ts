import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-sidenav />
    <main class="main">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: []
})
export class AppComponent {
  title = 'MySampleAngular';
}
