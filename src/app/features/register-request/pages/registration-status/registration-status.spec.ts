import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationStatus } from './registration-status';

describe('RegistrationStatus', () => {
  let component: RegistrationStatus;
  let fixture: ComponentFixture<RegistrationStatus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationStatus],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrationStatus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
