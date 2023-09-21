import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
 test = "Hello World!"

 add(number1: number, number2: number) {
  return number1 + number2;
 }
}
