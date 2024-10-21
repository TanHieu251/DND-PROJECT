import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PHeaaderComponent } from './p-heaader.component';

describe('PHeaaderComponent', () => {
  let component: PHeaaderComponent;
  let fixture: ComponentFixture<PHeaaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PHeaaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PHeaaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
