import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P005ProjectDetailComponent } from './p005-project-detail.component';

describe('P005ProjectDetailComponent', () => {
  let component: P005ProjectDetailComponent;
  let fixture: ComponentFixture<P005ProjectDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P005ProjectDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P005ProjectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
