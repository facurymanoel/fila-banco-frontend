import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitirSenha } from './emitir-senha';

describe('EmitirSenha', () => {
  let component: EmitirSenha;
  let fixture: ComponentFixture<EmitirSenha>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmitirSenha],
    }).compileComponents();

    fixture = TestBed.createComponent(EmitirSenha);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
