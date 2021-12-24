import { Injectable } from '@angular/core';
import { AppApiService } from './app-api.service';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  endpoint = 'ClientsData';

  constructor(public service: AppApiService) { }

  public getClient(data: any): void {
    this.service.get()
  }

  public addClient(): void {
    this.service.push()
  }

  public deleteClient(): void {

  }

}
