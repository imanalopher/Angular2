///<reference path="first.component.ts"/>
import { Component } from '@angular/core';
import {EmployeeService} from './employee.service';

@Component({
  selector: 'my-app',
  template: `
      <employee></employee>
  `,
    providers: [EmployeeService]
})
export class AppComponent {

    public childData: string;

    public keyUp(f: string) {
        console.log(f);
    }
}
