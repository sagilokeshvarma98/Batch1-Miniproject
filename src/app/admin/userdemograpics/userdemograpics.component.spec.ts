import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { UserdemograpicsComponent } from './userdemograpics.component';

describe('UserdemograpicsComponent', () => {
  let component: UserdemograpicsComponent;
  let fixture: ComponentFixture<UserdemograpicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule,FormsModule,ReactiveFormsModule,RouterTestingModule],
      declarations: [ UserdemograpicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdemograpicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
