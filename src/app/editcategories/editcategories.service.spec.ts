import { TestBed } from '@angular/core/testing';

import { EditcategoriesService } from './editcategories.service';

describe('EditcategoriesService', () => {
  let service: EditcategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditcategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
