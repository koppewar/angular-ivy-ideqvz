import { Component, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'hello',
  template: `
    <h1>Hello {{ name }}!</h1>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;
  cookieValue: string;
  constructor(private cookieService: CookieService) {
    this.cookieService.set('Test', 'Hello World');
    this.cookieValue = this.cookieService.get('Test');
    console.log(this.cookieValue);
  }
}
