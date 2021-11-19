import { Component, Input } from '@angular/core';

@Component({
  selector: 'child',
  template: `<p>Child</p><br/><a 
  [routerLink]="['/home/child/subchild']" [queryParams]="{prop: 'ss'}">go to subchild</a><br/><a routerLink="/home">go to home</a>`,
})
export class ChildComponent {}
