import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  templateUrl: './classbinding.component.html',
  styleUrls: ['./classbinding.component.css']
})
export class ClassbindingComponent implements OnInit {
  public testVariable: string;
  public isChangeColor: boolean;
  public isChangeFontWeight: boolean;
  constructor() { }

  ngOnInit(): void {
    this.testVariable = "changecolor";
    this.isChangeColor = false;
    this.isChangeFontWeight = true;
  }
  
}
