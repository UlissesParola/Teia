import { TestBed } from '@angular/core/testing';

import { RecarregarFotosService } from './recarregar-fotos.service';

describe('RecarregarFotosService', () => {
  let service: RecarregarFotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecarregarFotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
