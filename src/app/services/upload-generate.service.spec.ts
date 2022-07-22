import { TestBed } from '@angular/core/testing';

import { UploadGenerateService } from './upload-generate.service';

describe('UploadGenerateService', () => {
  let service: UploadGenerateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadGenerateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
