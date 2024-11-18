import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P001ProductCategoryComponent } from './p001-product-category.component';

describe('P001ProductCategoryComponent', () => {
  let component: P001ProductCategoryComponent;
  let fixture: ComponentFixture<P001ProductCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P001ProductCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P001ProductCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
