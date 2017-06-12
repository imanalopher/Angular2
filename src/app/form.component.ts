import { Component } from '@angular/core';

@Component({
    selector: 'form-component',
    templateUrl: './form.component.html'
})

export class FormComponent {

    onSubmit(value: any) {
        console.log(value);
    }
}