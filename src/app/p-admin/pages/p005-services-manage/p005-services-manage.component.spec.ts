import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P005ServicesManageComponent } from './p005-services-manage.component';

describe('P005ServicesManageComponent', () => {
  let component: P005ServicesManageComponent;
  let fixture: ComponentFixture<P005ServicesManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P005ServicesManageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P005ServicesManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
