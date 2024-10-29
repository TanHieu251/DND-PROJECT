import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P007NewsComponent } from './p007-news.component';

describe('P007NewsComponent', () => {
  let component: P007NewsComponent;
  let fixture: ComponentFixture<P007NewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P007NewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P007NewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
