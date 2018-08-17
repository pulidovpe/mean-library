import { TestBed, inject } from '@angular/core/testing';

import { ApiBookService } from './api-book.service';

describe('ApiBookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiBookService]
    });
  });

  it('should be created', inject([ApiBookService], (service: ApiBookService) => {
    expect(service).toBeTruthy();
  }));
});
