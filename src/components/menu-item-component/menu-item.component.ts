import { Component, Input, OnInit } from '@angular/core';
import { PagesMenuModel } from '../../models/pages-menu.model';

@Component({
  selector: 'wkt-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input()
  public item!: PagesMenuModel;

  constructor() { }

  ngOnInit() {
  }

}
