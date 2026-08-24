import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterRequest } from './register-request';

describe('RegisterRequest', () => {
  let component: RegisterRequest;
  let fixture: ComponentFixture<RegisterRequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterRequest],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterRequest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
