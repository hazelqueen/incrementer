import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  author = 'Hazel';
  title = 'Incrementer';
  number = 404;
  value = '';

  increment() {
    var val = Math.floor(Math.random() * 10) + 1;
    this.number = this.number + val;
    this.value = 'Incremented Value : ' + val;
  }

  decrement() {
    var val = Math.floor(Math.random() * 10) + 1;
    this.number = this.number - val;
    this.value = 'Decremented Value : ' + val;
  }
}
