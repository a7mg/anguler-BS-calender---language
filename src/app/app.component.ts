import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lang = 'en';
  date: string;
  constructor() { }

  calenderValue(date: string) {
    this.date = date;
  }
}
