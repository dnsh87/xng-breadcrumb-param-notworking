import { Component, Input } from '@angular/core';

@Component({
  selector: 'home',
  template: `<p>Home</p><a routerLink="/login">go to login</a><br/><a [routerLink]="['/home/child']" [queryParams]="{prop: 'childParam'}">go to child</a><router-outlet></router-outlet>`,
})
export class HomeComponent {}
