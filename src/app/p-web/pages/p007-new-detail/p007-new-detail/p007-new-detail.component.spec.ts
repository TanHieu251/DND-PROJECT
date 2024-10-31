import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P007NewDetailComponent } from './p007-new-detail.component';

describe('P007NewDetailComponent', () => {
  let component: P007NewDetailComponent;
  let fixture: ComponentFixture<P007NewDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P007NewDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P007NewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
