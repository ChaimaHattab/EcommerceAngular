import { TestBed } from '@angular/core/testing';

import { CreatecategoriesService } from './createcategories.service';

describe('CreatecategoriesService', () => {
  let service: CreatecategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatecategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
