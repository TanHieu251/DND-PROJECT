import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBannerComponent } from './new-benner.component';

describe('NewBennerComponent', () => {
  let component: NewBannerComponent;
  let fixture: ComponentFixture<NewBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
