import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CContentComponent } from './c-content.component';

describe('CContentComponent', () => {
  let component: CContentComponent;
  let fixture: ComponentFixture<CContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
