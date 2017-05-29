import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <ul>
    <li><a routerLink="/">Home</a></li>
    <li><a routerLink="/about">About</a></li>
  </ul>
  <router-outlet></router-outlet>
    `,
  // Changed to router-outlet instead as this will change dynamically depending on what url it is on
  // template: `
  //  <user></user>
  //   `,
})
export class AppComponent  {

}
