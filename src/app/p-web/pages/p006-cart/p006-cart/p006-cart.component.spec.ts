import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P006CartComponent } from './p006-cart.component';

describe('P006CartComponent', () => {
  let component: P006CartComponent;
  let fixture: ComponentFixture<P006CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P006CartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P006CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
