import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P005ProjectComponent } from './p005-project.component';

describe('P005ProjectComponent', () => {
  let component: P005ProjectComponent;
  let fixture: ComponentFixture<P005ProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P005ProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P005ProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
