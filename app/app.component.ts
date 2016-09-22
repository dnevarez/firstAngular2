import { Component } from '@angular/core';     //Allows us access to Angulars core component.
@Component({                                   // Associates metadata with the AppComponent class
  selector: 'my-app',                          // -- selector specifies a simple CSS selector for an HTML element that reperesents the component.
  template: '<h1>My First Angular App</h1>'    // -- template tells Angular how to render the components view.
})
export class AppComponent { }                  // A component class that controls the appearance and behavior of a view through its template. We only have the root component, AppComponent. 
