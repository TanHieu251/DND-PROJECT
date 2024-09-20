import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P003ContactComponent } from './p003-contact.component';

describe('P003ContactComponent', () => {
  let component: P003ContactComponent;
  let fixture: ComponentFixture<P003ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P003ContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P003ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
