import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensSubpageComponent } from './womens-subpage.component';

describe('WomensSubpageComponent', () => {
  let component: WomensSubpageComponent;
  let fixture: ComponentFixture<WomensSubpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomensSubpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomensSubpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
