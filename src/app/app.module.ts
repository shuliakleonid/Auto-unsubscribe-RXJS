import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IntervalComponent } from './interval/interval.component';
import { IntervalDecoratorComponent } from './interval-decorator/interval-decorator.component';

@NgModule({
  declarations: [
    AppComponent,
    IntervalComponent,
    IntervalDecoratorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
