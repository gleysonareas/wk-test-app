import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ProductsService } from 'src/core/services/products.service';
import { ProductsModel } from 'src/shared/models/products.model';

@Component({
  selector: 'wkt-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  public product?: ProductsModel;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: ProductsService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  canSave(): void {
    this.service.addProduct();
  }

  canCancel(): void {
    this.dialog.closeAll()
  }
}
