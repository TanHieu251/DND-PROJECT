import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P001RegisterComponent } from './p001-register.component';

describe('P001RegisterComponent', () => {
  let component: P001RegisterComponent;
  let fixture: ComponentFixture<P001RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P001RegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P001RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
