import { TestBed } from '@angular/core/testing';

import { DogparkDataService } from './dogpark-data.service';

describe('DogparkDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DogparkDataService = TestBed.get(DogparkDataService);
    expect(service).toBeTruthy();
  });
});
