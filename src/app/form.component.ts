import { Component } from '@angular/core';
import {FormGroup, FormBuilder, Validators }  from '@angular/forms';

@Component({
    selector: 'form-component',
    templateUrl: './form.component.html'
})

export class FormComponent {

    userForm: FormGroup;

    constructor(_formBuilder: FormBuilder) {

        this.userForm = _formBuilder.group({
            name : [null, [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
            email : [],
            address: _formBuilder.group({
                street: [],
                city: [],
                postalcode : []
            })
        });
    }

    private onSubmit(userFormData: any): void {
        console.log(userFormData);
    }
}