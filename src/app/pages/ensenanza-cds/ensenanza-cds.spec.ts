import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsenanzaCds } from './ensenanza-cds';

describe('EnsenanzaCds', () => {
  let component: EnsenanzaCds;
  let fixture: ComponentFixture<EnsenanzaCds>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnsenanzaCds],
    }).compileComponents();

    fixture = TestBed.createComponent(EnsenanzaCds);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
