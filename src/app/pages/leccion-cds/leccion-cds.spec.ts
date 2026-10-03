import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeccionCds } from './leccion-cds';

describe('LeccionCds', () => {
  let component: LeccionCds;
  let fixture: ComponentFixture<LeccionCds>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeccionCds],
    }).compileComponents();

    fixture = TestBed.createComponent(LeccionCds);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
