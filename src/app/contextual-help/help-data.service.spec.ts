import { TestBed } from '@angular/core/testing';

import { HelpDataService } from './help-data.service';

describe('HelpDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HelpDataService = TestBed.get(HelpDataService);
    expect(service).toBeTruthy();
  });
});
