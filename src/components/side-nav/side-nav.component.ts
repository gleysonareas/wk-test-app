import { Component, Input, OnInit } from '@angular/core';
import { PAGES_MENU } from './../../consts/pages-menu.const';
import { PagesMenuModel } from './../../models/pages-menu.model';

@Component({
  selector: 'wkt-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  public menuItens: PagesMenuModel[] = PAGES_MENU;

  constructor() { }

  ngOnInit(): void {
  }

}
