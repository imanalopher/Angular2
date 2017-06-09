import {Component, EventEmitter} from '@angular/core';

@Component({
    selector: 'first-component',
    template: `
        <h1>First component</h1>
        <input type="text" #childInput (keyup)="childKeyUp(childInput.value)">

        {{ parentData }}
    `,
    inputs: [`parentData`],
    outputs: ['childEvent']
})

export class FirstComponent {

    childEvent = new EventEmitter<string>();

    childKeyUp(value : string)
    {
        this.childEvent.emit(value);
    }
}

