import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog-component/dialog.component';

@Component({
  selector: 'wkt-buttom',
  templateUrl: './buttom.component.html',
  styleUrls: ['./buttom.component.scss']
})
export class ButtomComponent implements OnInit {

  @Input()
  public buttonName!: string;

  constructor(public dialog: MatDialog) { }

  public ngOnInit() {
  }

  public openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe();
  }
}
