import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
    selector: 'form-component',
    templateUrl: './form.component.html'
})

export class FormComponent {
    userForm = new FormGroup({
        name: new FormControl(),
        email: new FormControl(),
        address: new FormGroup({
            street: new FormControl(),
            city: new FormControl(),
            postalcode: new FormControl()
        })
    });

    onSubmit() {
        console.log(this.userForm.value);
    }
}