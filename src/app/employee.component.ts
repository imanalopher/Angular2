import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
    selector: 'employee',
    templateUrl: './employee.component.html'
})

export class EmployeeComponent {

    employees: Array<any>;

    constructor(private _employee: EmployeeService) {
        this._employee.getEmployees()
            .subscribe(employeeData => this.employees = employeeData);
        console.log(this.employees);
    }
}