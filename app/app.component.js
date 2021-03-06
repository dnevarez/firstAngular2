"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core'); //Allows us access to Angulars core component.
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        //Allows us access to Angulars core component.
        core_1.Component({
            selector: 'my-app',
            template: '<h1>My First Angular App</h1>' // -- template tells Angular how to render the components view.
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent; // A component class that controls the appearance and behavior of a view through its template. We only have the root component, AppComponent. 
//# sourceMappingURL=app.component.js.map