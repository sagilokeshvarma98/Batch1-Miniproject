import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentGateComponent } from './payment-gate.component';

describe('PaymentGateComponent', () => {
  let component: PaymentGateComponent;
  let fixture: ComponentFixture<PaymentGateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentGateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentGateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
