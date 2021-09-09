import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsSubpageComponent } from './kids-subpage.component';

describe('KidsSubpageComponent', () => {
  let component: KidsSubpageComponent;
  let fixture: ComponentFixture<KidsSubpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidsSubpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsSubpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
