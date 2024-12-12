import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P009ProjectCategoryComponent } from './p009-project-category.component';

describe('P009ProjectCategoryComponent', () => {
  let component: P009ProjectCategoryComponent;
  let fixture: ComponentFixture<P009ProjectCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P009ProjectCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P009ProjectCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
