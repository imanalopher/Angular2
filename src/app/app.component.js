"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
///<reference path="first.component.ts"/>
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'ssdsd';
        this.url = 'http://lorempixel.com/400/200/';
        this.one = true;
        this.two = true;
        this.colors = ['red', 'blue', 'white'];
    }
    AppComponent.prototype.toggle = function () {
        var o = this.one;
        this.one = this.one != true;
        this.two = this.two != true;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n      <input [(ngModel)]=\"name\">\n            Name : {{ name }}\n      <ul>\n          <li *ngFor=\"let color of colors\">{{ color }}</li>\n      </ul>\n      \n      <p [ngClass]=\"{ classOne:one, classTwo:two }\">Color One</p>\n      \n      <div>\n          <p>{{ one }}</p>\n          <p>{{ two }}</p>\n      </div>\n      \n      <button (click)=\"toggle()\">Toggle</button>\n            <first-component></first-component>",
        styles: ["\n        .classOne { color: white; }\n        .classTwo { background-color: black; }\n    "]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map