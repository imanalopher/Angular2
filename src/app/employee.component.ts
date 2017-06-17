import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
    selector: 'employee',
    templateUrl: './employee.component.html'
})

export class EmployeeComponent {
    employees = [];

    constructor(_employee: EmployeeService) {
        this.employees = _employee.getEmployees();
    }
}