import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/components/components.module';
import { SharedModule } from './../shared/shared.module'

import { HomePage } from 'src/pages/home/home.page';
import { ClientsPage } from './clients/clients.page';
import { ProductsPage } from './products/products.page';
import { SalesOrderPage } from './sales-order/sales-order.page';

@NgModule({
  declarations: [
    HomePage,
    ClientsPage,
    ProductsPage,
    SalesOrderPage
  ],
  imports: [
    ComponentsModule,
    SharedModule,
  ],
  exports: [
    HomePage,
    ClientsPage,
    ProductsPage,
    SalesOrderPage
  ]
})
export class PagesModule { }
