import { TestBed } from '@angular/core/testing';

import { UIServiceService } from './uiservice.service';

describe('UIServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UIServiceService = TestBed.get(UIServiceService);
    expect(service).toBeTruthy();
  });
});
