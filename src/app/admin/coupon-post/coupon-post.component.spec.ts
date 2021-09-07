import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponPostComponent } from './coupon-post.component';

describe('CouponPostComponent', () => {
  let component: CouponPostComponent;
  let fixture: ComponentFixture<CouponPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouponPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
