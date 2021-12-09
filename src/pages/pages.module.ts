import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { ComponentsModule } from 'src/components/components.module';
import { ClientsPage } from './clients/clients.page';
import { ProductsPage } from './products/products.page';
import { SalesOrderPage } from './sales-order/sales-order.page';

@NgModule({
  declarations: [
    PagesComponent,
    ClientsPage,
    ProductsPage,
    SalesOrderPage
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports: [
    PagesComponent,
  ]
})
export class PagesModule { }
