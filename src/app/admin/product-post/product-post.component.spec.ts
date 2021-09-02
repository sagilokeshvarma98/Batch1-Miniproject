import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPostComponent } from './product-post.component';

describe('ProductPostComponent', () => {
  let component: ProductPostComponent;
  let fixture: ComponentFixture<ProductPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
