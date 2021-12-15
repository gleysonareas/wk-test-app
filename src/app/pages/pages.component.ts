import { Component, OnInit } from '@angular/core';
import { PagesMenuModel } from 'src/shared/models/pages-menu.model';
import { PAGES_MENU } from 'src/shared/consts/pages-menu.const';

@Component({
  selector: 'wkt-pages',
  templateUrl: 'pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

public pagesMenu: PagesMenuModel[] = PAGES_MENU;

  constructor() { }

  ngOnInit() {
  }

}
