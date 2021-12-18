import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wkt-buttom',
  templateUrl: './buttom.component.html',
  styleUrls: ['./buttom.component.scss']
})
export class ButtomComponent implements OnInit {

@Input()
public buttonName!: string;

  constructor() { }

  ngOnInit() {
  }

}
