import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P004ProductComponent } from './p004-product.component';

describe('P004ProductComponent', () => {
  let component: P004ProductComponent;
  let fixture: ComponentFixture<P004ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P004ProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P004ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
