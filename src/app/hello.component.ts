import { Component, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  constructor(
    private cookieService: CookieService,
    private httpClient: HttpClient
  ) {
    this.cookieService.set(
      'Test',
      'Hello World',
      1,
      '/',
      '.typicode.com',
      true,
      'None'
    );
    this.cookieValue = this.cookieService.get('Test');
    console.log(this.cookieValue);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.httpClient
      .get('https://my-json-server.typicode.com/typicode/demo/comments', {
        headers,
        withCredentials: true
      })
      .subscribe(data => {
        console.log(data);
      });
  }
}
