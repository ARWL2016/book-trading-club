import { TestBed, inject } from '@angular/core/testing';

import { BrowseBooksService } from './browse-books.service';

describe('BrowseBooksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BrowseBooksService]
    });
  });

  it('should ...', inject([BrowseBooksService], (service: BrowseBooksService) => {
    expect(service).toBeTruthy();
  }));
});
