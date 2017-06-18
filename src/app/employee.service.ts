import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService
{
    http: Http;
    url: string = 'data.json';
    constructor(private _http: Http)
    {
        this.http = _http;
    }

    getEmployees(){
        return this.http.get(this.url).map((response: Response) => response.json());
    }
}