import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CMembersComponent } from './c-members.component';

describe('CMembersComponent', () => {
  let component: CMembersComponent;
  let fixture: ComponentFixture<CMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CMembersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
