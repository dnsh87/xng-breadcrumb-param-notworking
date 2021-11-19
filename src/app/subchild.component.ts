import { Component, Input } from '@angular/core';

@Component({
  selector: 'subchild',
  template: `<p>SubChild</p><a routerLink="/home">go to home</a>`,
})
export class SubChildComponent {}
