import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent implements OnInit {
  public dynamicimagepath: string;
  public isDisabled: boolean;
  constructor() { }
  ngOnInit(): void {
    this.dynamicimagepath = "../../assets/feed2x_new.png";
    this.isDisabled = false;
  }
}
