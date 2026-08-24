import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePassword } from './create-password';

describe('CreatePassword', () => {
  let component: CreatePassword;
  let fixture: ComponentFixture<CreatePassword>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePassword],
    }).compileComponents();

    fixture = TestBed.createComponent(CreatePassword);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
