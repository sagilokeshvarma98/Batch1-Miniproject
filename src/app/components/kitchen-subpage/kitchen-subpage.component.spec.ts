import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenSubpageComponent } from './kitchen-subpage.component';

describe('KitchenSubpageComponent', () => {
  let component: KitchenSubpageComponent;
  let fixture: ComponentFixture<KitchenSubpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitchenSubpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenSubpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
