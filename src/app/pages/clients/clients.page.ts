import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddClientComponent } from './add-client/add-client.component';

@Component({
  selector: 'wkt-client',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss']
})
export class ClientsPage implements OnInit {

  public buttonName: string = 'Add Client';

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(AddClientComponent, {
      minWidth: '40em'
    })
    dialogRef.afterClosed().subscribe()
  }
}
