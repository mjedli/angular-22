import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {

  count = signal(0);

  users = ['Mejdi', 'Ali', 'Sara'];

  isConnected = true;

  rdv = {
    date: '2026-10-10',
    heure: '08:00',
    reservedId: '123'
  };

  increment() {
    this.count.update(value => value + 1);
  }

  decrement() {
    this.count.update(value => value - 1);
  }

  reset() {
    this.count.set(0);
  }

}
