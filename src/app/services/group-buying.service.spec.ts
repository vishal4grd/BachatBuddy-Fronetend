import { TestBed } from '@angular/core/testing';

import { GroupBuyingService } from './group-buying.service';

describe('GroupBuyingService', () => {
    let service: GroupBuyingService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(GroupBuyingService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
