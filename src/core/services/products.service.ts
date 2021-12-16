import { Injectable } from '@angular/core';
import { AppApiService } from './app-api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  endpoint = 'ProductsData';

  constructor(public service: AppApiService) { }

  public getProduct(): void {
    this.service.get()
  }

  public addProduct(): void {
    this.service.push()
  }

  public deleteProduct(): void {

  }
}
