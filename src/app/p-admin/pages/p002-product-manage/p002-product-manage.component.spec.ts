import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P002ProductManageComponent } from './p002-product-manage.component';

describe('P002ProductManageComponent', () => {
  let component: P002ProductManageComponent;
  let fixture: ComponentFixture<P002ProductManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P002ProductManageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P002ProductManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
