import { TestBed } from '@angular/core/testing';

import { GitprofileService } from './gitprofile.service';

describe('GitprofileService', () => {
  let service: GitprofileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitprofileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
