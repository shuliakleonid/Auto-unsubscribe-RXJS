import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  displayService = false;
  displayDisplayDecorator = false;

  switchDisplayService() {
    this.displayService = !this.displayService;
  }

  switchDisplayDecorator() {
    this.displayDisplayDecorator = !this.displayDisplayDecorator;
  }
}
