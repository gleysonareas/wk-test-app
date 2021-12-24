import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClientsService } from 'src/core/services/clients.service';

@Component({
  selector: 'wkt-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: ClientsService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  canSave(): void {
    this.service.addClient();
  }

  canCancel(): void {
    this.dialog.closeAll()
  }

}
