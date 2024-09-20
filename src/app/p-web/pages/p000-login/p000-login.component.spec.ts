import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P000LoginComponent } from './p000-login.component';

describe('P000LoginComponent', () => {
  let component: P000LoginComponent;
  let fixture: ComponentFixture<P000LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P000LoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P000LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
