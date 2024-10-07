import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInforRelationComponent } from './product-infor-relation.component';

describe('ProductInforRelationComponent', () => {
  let component: ProductInforRelationComponent;
  let fixture: ComponentFixture<ProductInforRelationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductInforRelationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductInforRelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
