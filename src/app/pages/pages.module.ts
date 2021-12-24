import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from './../../shared/shared.module'

import { PagesComponent } from './pages.component';
import { HomePage } from './home/home.page';
import { ClientsPage } from './clients/clients.page';
import { ProductsPage } from './products/products.page';
import { SalesOrderPage } from './sales-order/sales-order.page';
import { ListClientsComponent } from './clients/list-clients/list-clients.component';
import { AddClientComponent } from './clients/add-client/add-client.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ListProductsComponent } from './products/list-products/list-products.component';
import { AddOrderComponent } from './sales-order/add-order/add-order.component';
import { ListOrderComponent } from './sales-order/list-order/list-order.component';

@NgModule({
  declarations: [
    PagesComponent,
    HomePage,
    ClientsPage,
    ProductsPage,
    SalesOrderPage,

    //depois serão dinamizados
    AddClientComponent,
    ListClientsComponent,
    AddProductComponent,
    ListProductsComponent,
    AddOrderComponent,
    ListOrderComponent,
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
