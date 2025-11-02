import { TestBed } from '@angular/core/testing';

import { GroupdealsService } from './groupdeals.service';

describe('GroupdealsService', () => {
  let service: GroupdealsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupdealsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
