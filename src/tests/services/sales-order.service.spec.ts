/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SalesOrderService } from '../../services/sales-order.service';

describe('Service: SalesOrder', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SalesOrderService]
    });
  });

  it('should ...', inject([SalesOrderService], (service: SalesOrderService) => {
    expect(service).toBeTruthy();
  }));
});
