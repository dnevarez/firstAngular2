// This file is the entry point of the application
import { NgModule }      from '@angular/core';

// Our root module (this file) needs to import BrowserModule since the app runs in the browser.
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports:      [ BrowserModule ]
})
export class AppModule { }

// This is all that's required for this app. In a real app we'd likely import FormsModule, RouterModule and HttpModule.
