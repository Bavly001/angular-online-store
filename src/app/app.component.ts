import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'online-store';
  mode: any;
  changeMode() {
    if (localStorage.getItem('mode')) {
      let currentMode: any = localStorage.getItem('mode');
      this.mode = JSON.parse(currentMode);
    } else this.mode = true;
    this.mode = !this.mode;
    localStorage.setItem('mode', JSON.stringify(this.mode));
  }
}
