import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P008ServiceComponent } from './p008-service.component';

describe('ServiceComponent', () => {
  let component: P008ServiceComponent;
  let fixture: ComponentFixture<P008ServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P008ServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P008ServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
