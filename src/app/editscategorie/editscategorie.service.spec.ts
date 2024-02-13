import { TestBed } from '@angular/core/testing';

import { EditscategorieService } from './editscategorie.service';

describe('EditscategorieService', () => {
  let service: EditscategorieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditscategorieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
