import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    // ... any other modules that your app uses
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
