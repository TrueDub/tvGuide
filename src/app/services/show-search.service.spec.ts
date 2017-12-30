import { TestBed, inject } from '@angular/core/testing';

import { ShowSearchServiceService } from './show-search.service';

describe('ShowSearchServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowSearchServiceService]
    });
  });

  it('should be created', inject([ShowSearchServiceService], (service: ShowSearchServiceService) => {
    expect(service).toBeTruthy();
  }));
});
