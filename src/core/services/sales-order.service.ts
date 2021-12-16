import { Injectable } from '@angular/core';
import { AppApiService } from './app-api.service';

@Injectable({
  providedIn: 'root'
})
export class SalesOrderService {

  endpoint = 'SalesOrderData';

  constructor(public service: AppApiService) { }

  public getSalesOrder(): void {
    this.service.get()
  }

  public addSalesOrder(): void {
    this.service.push()
  }

  public deleteSalesOrder(): void {

  }
}
