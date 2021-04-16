import { TestBed } from '@angular/core/testing';

import { ComandanciaService } from './comandancia.service';

describe('ComandanciaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComandanciaService = TestBed.get(ComandanciaService);
    expect(service).toBeTruthy();
  });
});
