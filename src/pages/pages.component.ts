import { Component, OnInit } from '@angular/core';
import { PAGES_MENU } from 'src/consts/pages-menu.const';
import { PagesMenuModel } from 'src/models/pages-menu.model';

@Component({
  selector: 'wkt-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  public pages: PagesMenuModel[] = PAGES_MENU;

  constructor() { }

  ngOnInit() {
  }

}
