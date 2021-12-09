import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wkt-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  @Input() 
  public showFiller = true;

  constructor() { }

  ngOnInit(): void {
  }

}
