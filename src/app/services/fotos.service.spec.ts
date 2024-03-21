import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { FotosService } from './fotos.service';
import { Foto } from '../models/foto.model';

describe('FotosService', () => {
  let service: FotosService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FotosService]
    });

    service = TestBed.inject(FotosService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(()=>{
    httpMock.verify();
  });

  it('deve buscar fotos com sucesso', () => {
    const mockFotos: Foto[] = [
      { albumId: 1, id: 1, title: 'Teste 1', url: 'https://example.com/1', thumbnailUrl: 'https://example.com/thumb/1' },
      { albumId: 2, id: 2, title: 'Teste 2', url: 'https://example.com/2', thumbnailUrl: 'https://example.com/thumb/2' }
    ];

    service.getFotos().subscribe(fotos => {
      expect(fotos.length).toBe(2);
      expect(fotos).toEqual(mockFotos);
    });

  });
});
