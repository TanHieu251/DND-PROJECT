import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P002CompanyComponent } from './p002-company.component';

describe('P002CompanyComponent', () => {
  let component: P002CompanyComponent;
  let fixture: ComponentFixture<P002CompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P002CompanyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P002CompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
