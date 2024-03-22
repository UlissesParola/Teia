import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemFotosComponent } from './listagem-fotos.component';

describe('ListagemFotosComponent', () => {
  let component: ListagemFotosComponent;
  let fixture: ComponentFixture<ListagemFotosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListagemFotosComponent]
    });
    fixture = TestBed.createComponent(ListagemFotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
