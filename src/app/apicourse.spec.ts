import { TestBed } from '@angular/core/testing';

import { Apicourse } from './apicourse';

describe('Apicourse', () => {
  let service: Apicourse;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Apicourse);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
