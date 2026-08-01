import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelEletronico } from './painel-eletronico';

describe('PainelEletronico', () => {
  let component: PainelEletronico;
  let fixture: ComponentFixture<PainelEletronico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PainelEletronico],
    }).compileComponents();

    fixture = TestBed.createComponent(PainelEletronico);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
