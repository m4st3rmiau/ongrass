import { TestBed } from '@angular/core/testing';

import { Reloj1Service } from './reloj1.service';

describe('Reloj1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Reloj1Service = TestBed.get(Reloj1Service);
    expect(service).toBeTruthy();
  });
});
