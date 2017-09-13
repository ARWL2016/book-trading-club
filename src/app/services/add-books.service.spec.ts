import { TestBed, inject } from '@angular/core/testing';

import { AddBooksService } from './add-books.service';

describe('AddBooksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddBooksService]
    });
  });

  it('should ...', inject([AddBooksService], (service: AddBooksService) => {
    expect(service).toBeTruthy();
  }));
});
