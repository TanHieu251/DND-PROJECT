import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsRealationComponent } from './news-realation.component';

describe('NewsRealationComponent', () => {
  let component: NewsRealationComponent;
  let fixture: ComponentFixture<NewsRealationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsRealationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsRealationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
