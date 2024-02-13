import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesCardComponent } from './articles-card.component';

describe('ArticlesCardComponent', () => {
  let component: ArticlesCardComponent;
  let fixture: ComponentFixture<ArticlesCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticlesCardComponent]
    });
    fixture = TestBed.createComponent(ArticlesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
