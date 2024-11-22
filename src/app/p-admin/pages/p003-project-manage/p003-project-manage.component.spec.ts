import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P003ProjectManageComponent } from './p003-project-manage.component';

describe('P003ProjectManageComponent', () => {
  let component: P003ProjectManageComponent;
  let fixture: ComponentFixture<P003ProjectManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P003ProjectManageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P003ProjectManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
