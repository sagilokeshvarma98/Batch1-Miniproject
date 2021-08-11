import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressdiplayComponent } from './adressdiplay.component';

describe('AdressdiplayComponent', () => {
  let component: AdressdiplayComponent;
  let fixture: ComponentFixture<AdressdiplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdressdiplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdressdiplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
