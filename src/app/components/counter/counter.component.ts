import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  counter: number = 0;

  handleUpdateCounter = (value: number = 1) => {
    if (this.counter + value < 0) {
      this.counter = 0;
    } else {
      this.counter += value;
    }
  }
  handleReset = () => {this.counter = 0}

}
