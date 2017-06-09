///<reference path="first.component.ts"/>
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <input [(ngModel)]="name">
            Name : {{ name }}
      <ul>
          <li *ngFor="let color of colors">{{ color }}</li>
      </ul>
      
      <p [ngClass]="{ classOne:one, classTwo:two }">Color One</p>
      
      <div>
          <p>{{ one }}</p>
          <p>{{ two }}</p>
      </div>
      
      <button (click)="toggle()">Toggle</button>
            <first-component></first-component>`,
    styles: [`
        .classOne { color: white; }
        .classTwo { background-color: black; }
    `]
})
export class AppComponent {
    name = 'ssdsd';
    url = 'http://lorempixel.com/400/200/';

    public one = true;
    public two = true;

    public toggle(){
        let o = this.one;
        this.one = this.one != true;
        this.two = this.two != true;
    }

    public colors = ['red', 'blue', 'white'];
}
