///<reference path="first.component.ts"/>
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <input type="text" #inputText (keyup)="keyUp(inputText.value)">
      {{ childData }}
      <first-component (childEvent) = "childData = $event" [parentData]="inputText.value"></first-component>
      <form-component></form-component>
  `
})
export class AppComponent {

    public childData : string;

    public keyUp(f: string) {
        console.log(f);
    }
}
