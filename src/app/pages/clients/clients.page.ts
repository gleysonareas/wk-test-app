import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wkt-client',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss']
})
export class ClientsPage implements OnInit {

  public buttonName: string = 'Add Client';

  constructor() { }

  ngOnInit() {
  }
}
