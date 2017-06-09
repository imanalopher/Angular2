"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FirstComponent = (function () {
    function FirstComponent() {
        this.childEvent = new core_1.EventEmitter();
    }
    FirstComponent.prototype.childKeyUp = function (value) {
        this.childEvent.emit(value);
    };
    return FirstComponent;
}());
FirstComponent = __decorate([
    core_1.Component({
        selector: 'first-component',
        template: "\n        <h1>First component</h1>\n        <input type=\"text\" #childInput (keyup)=\"childKeyUp(childInput.value)\">\n\n        {{ parentData }}\n    ",
        inputs: ["parentData"],
        outputs: ['childEvent']
    })
], FirstComponent);
exports.FirstComponent = FirstComponent;
//# sourceMappingURL=first.component.js.map