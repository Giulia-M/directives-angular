import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app01';
  showDetails = false;
  // log: number[] = [];
  log: Date[] = [];

  start: Date | undefined;

  /*   onToggle() {
    this.showDetails = !this.showDetails;
    this.log.push(this.log.length + 1);
  } */
  onToggle() {
    this.showDetails = !this.showDetails;
    this.start = new Date(Date.now());
    this.log.push(this.start);
  }
}
