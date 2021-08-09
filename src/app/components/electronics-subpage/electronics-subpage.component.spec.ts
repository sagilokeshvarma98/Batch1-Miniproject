import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicsSubpageComponent } from './electronics-subpage.component';

describe('ElectronicsSubpageComponent', () => {
  let component: ElectronicsSubpageComponent;
  let fixture: ComponentFixture<ElectronicsSubpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectronicsSubpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicsSubpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
