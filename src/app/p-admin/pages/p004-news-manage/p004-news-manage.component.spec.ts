import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P004NewsManageComponent } from './p004-news-manage.component';

describe('P004NewsManageComponent', () => {
  let component: P004NewsManageComponent;
  let fixture: ComponentFixture<P004NewsManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P004NewsManageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P004NewsManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
