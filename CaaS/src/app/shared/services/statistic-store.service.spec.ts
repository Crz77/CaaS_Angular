import { TestBed } from '@angular/core/testing';

import { StatisticStoreService } from './statistic-store.service';

describe('StatisticStoreService', () => {
  let service: StatisticStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatisticStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
