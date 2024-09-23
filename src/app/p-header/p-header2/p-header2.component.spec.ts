import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PHeader2Component } from './p-header2.component';

describe('PHeader2Component', () => {
  let component: PHeader2Component;
  let fixture: ComponentFixture<PHeader2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PHeader2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PHeader2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
