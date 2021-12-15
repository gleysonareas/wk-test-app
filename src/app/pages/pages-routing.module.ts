import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './home/home.page';
import { ClientsPage } from './clients/clients.page';
import { ProductsPage } from './products/products.page';
import { SalesOrderPage } from './sales-order/sales-order.page';

const routes: Routes = [
    {
        path: 'home',
        component: HomePage,
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
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
