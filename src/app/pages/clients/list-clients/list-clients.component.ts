import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddClientComponent } from '../add-client/add-client.component';
import { ClientsService } from 'src/core/services/clients.service';
import { ELEMENT_DATA } from './ELEMENT_DATA';
import { ClientsModel } from 'src/shared/models/clients.model';

@Component({
  selector: 'wkt-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit {

  public displayedColumns!: string[];
  public dataSource!: ClientsModel[];

  constructor(
    public dialog: MatDialog,
    private service: ClientsService
  ) { }

  ngOnInit() {
    this.displayedColumns = ['position', 'name', 'cpf', 'email', 'action'];
    this.service.getClient((data: ClientsModel[]) => this.dataSource = data);
    this.dataSource = ELEMENT_DATA;
  }

  public edit(element: any) {
    const dialogRef = this.dialog.open(AddClientComponent)

    dialogRef.afterClosed().subscribe();
  }

  public deleteItem(element: any) {
  }

}
