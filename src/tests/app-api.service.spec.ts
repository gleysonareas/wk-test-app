/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AppApiService } from '../services/app-api.service';

describe('Service: AppApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppApiService]
    });
  });

  it('should ...', inject([AppApiService], (service: AppApiService) => {
    expect(service).toBeTruthy();
  }));
});
