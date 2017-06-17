import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService
{
    getEmployees(){
        return [
            {'id': 1, 'name': 'Name1', gender: 'Male'},
            {'id': 1, 'name': 'Name2', gender: 'Male'},
            {'id': 1, 'name': 'Name3', gender: 'Female'},
        ];
    }
}