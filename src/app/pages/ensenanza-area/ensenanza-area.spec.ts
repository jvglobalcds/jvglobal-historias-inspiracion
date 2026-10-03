import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsenanzaArea } from './ensenanza-area';

describe('EnsenanzaArea', () => {
  let component: EnsenanzaArea;
  let fixture: ComponentFixture<EnsenanzaArea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnsenanzaArea],
    }).compileComponents();

    fixture = TestBed.createComponent(EnsenanzaArea);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
