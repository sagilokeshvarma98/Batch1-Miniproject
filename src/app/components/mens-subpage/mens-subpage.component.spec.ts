import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensSubpageComponent } from './mens-subpage.component';

describe('MensSubpageComponent', () => {
  let component: MensSubpageComponent;
  let fixture: ComponentFixture<MensSubpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensSubpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensSubpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
