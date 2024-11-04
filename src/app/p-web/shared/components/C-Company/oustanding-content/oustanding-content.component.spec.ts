import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OustandingContentComponent } from './oustanding-content.component';

describe('OustandingContentComponent', () => {
  let component: OustandingContentComponent;
  let fixture: ComponentFixture<OustandingContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OustandingContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OustandingContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
