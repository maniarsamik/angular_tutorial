import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
  public firstName: string;
  public digit: number;
  constructor() { }

  ngOnInit(): void {
    this.firstName = "Interpolation";
    this.digit = 22.537;
  }

}
