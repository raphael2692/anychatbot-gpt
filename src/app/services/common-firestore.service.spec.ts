import { TestBed } from '@angular/core/testing';

import { CommonFirestoreService } from './common-firestore.service';

describe('CommonFirestoreService', () => {
  let service: CommonFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
