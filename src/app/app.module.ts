import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {FirstComponent} from './first.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form.component';
import {EmployeeComponent} from './employee.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, FirstComponent, FormComponent, EmployeeComponent ],
  providers:    [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
