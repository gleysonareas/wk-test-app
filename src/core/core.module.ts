import { NgModule } from "@angular/core";
import { TemplateModule } from "./template/template.module";
import { AppApiService } from "./services/app-api.service";
import { ClientsService } from "./services/clients.service";
import { ProductsService } from "./services/products.service";
import { SalesOrderService } from "./services/sales-order.service";

@NgModule({
    imports: [
        TemplateModule,
    ],
    exports: [
        TemplateModule,
    ],
    providers: [
        AppApiService,
        ClientsService,
        ProductsService,
        SalesOrderService
    ],

})
export class CoreModule {
}