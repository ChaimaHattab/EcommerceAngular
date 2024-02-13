import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditscategorieComponent } from './editscategorie.component';

describe('EditscategorieComponent', () => {
  let component: EditscategorieComponent;
  let fixture: ComponentFixture<EditscategorieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditscategorieComponent]
    });
    fixture = TestBed.createComponent(EditscategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
