import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P008SidebarManageComponent } from './p008-sidebar-manage.component';

describe('P008SidebarManageComponent', () => {
  let component: P008SidebarManageComponent;
  let fixture: ComponentFixture<P008SidebarManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P008SidebarManageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P008SidebarManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
