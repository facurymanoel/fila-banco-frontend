import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelAtendente } from './painel-atendente';

describe('PainelAtendente', () => {
  let component: PainelAtendente;
  let fixture: ComponentFixture<PainelAtendente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PainelAtendente],
    }).compileComponents();

    fixture = TestBed.createComponent(PainelAtendente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
