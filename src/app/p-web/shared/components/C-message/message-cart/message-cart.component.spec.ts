import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageCartComponent } from './message-cart.component';

describe('MessageCartComponent', () => {
  let component: MessageCartComponent;
  let fixture: ComponentFixture<MessageCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessageCartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessageCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
