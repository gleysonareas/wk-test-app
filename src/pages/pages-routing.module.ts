import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsPage } from './clients/clients.page';
import { PagesComponent } from './pages.component';
import { ProductsPage } from './products/products.page';
import { SalesOrderPage } from './sales-order/sales-order.page';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
    },
    {
        path: 'clients',
        component: ClientsPage,
    },
    {
        path: 'products',
        component: ProductsPage,
    },
    {
        path: 'sales-order',
        component: SalesOrderPage,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
