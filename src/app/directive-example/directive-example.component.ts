import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrls: ['./directive-example.component.css']
})
export class DirectiveExampleComponent implements OnInit {
  isVariable = true;
  constructor() { }
  public currentDay: number;
  public selectedTab=1;
  public days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  public testdays = [
    { dayNumber: 0, dayName:'Sunday'},
    { dayName:'Monday', dayNumber:1},
    { dayName:'Tuesday', dayNumber:2},
    { dayName:'Wednseday', dayNumber:3},
    { dayName:'Thursday', dayNumber:4},
    { dayName:'Friday', dayNumber:5},
    { dayName:'Saturday', dayNumber:6},
  ];
  ngOnInit(): void {
    this.currentDay = new Date().getDay();
  }
}
