import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sys001LoginComponent } from './sys001-login.component';

describe('Sys001LoginComponent', () => {
  let component: Sys001LoginComponent;
  let fixture: ComponentFixture<Sys001LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Sys001LoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sys001LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
