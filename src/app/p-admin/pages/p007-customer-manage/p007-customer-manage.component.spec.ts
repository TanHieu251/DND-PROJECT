import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P007CustomerManageComponent } from './p007-customer-manage.component';

describe('P007CustomerManageComponent', () => {
  let component: P007CustomerManageComponent;
  let fixture: ComponentFixture<P007CustomerManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P007CustomerManageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P007CustomerManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
