import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P006OrderManageComponent } from './p006-order-manage.component';

describe('P006OrderManageComponent', () => {
  let component: P006OrderManageComponent;
  let fixture: ComponentFixture<P006OrderManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P006OrderManageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P006OrderManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
