import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from './add-product/add-product.component';

@Component({
  selector: 'wkt-product',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss']
})
export class ProductsPage implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(AddProductComponent, {
      minWidth: '40em'
    })
    dialogRef.afterClosed().subscribe()
  }
}

