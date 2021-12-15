import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from './../../shared/shared.module'

import { PagesComponent } from './pages.component';
import { HomePage } from './home/home.page';
import { ClientsPage } from './clients/clients.page';
import { ProductsPage } from './products/products.page';
import { SalesOrderPage } from './sales-order/sales-order.page';

@NgModule({
  declarations: [
    PagesComponent,
    HomePage,
    ClientsPage,
    ProductsPage,
    SalesOrderPage
  ],
  imports: [
    PagesRoutingModule,
    SharedModule,
  ],
  exports: [
    SharedModule,
    PagesComponent,
    HomePage,
    ClientsPage,
    ProductsPage,
    SalesOrderPage
  ]
})
export class PagesModule { }
