import { TestBed } from '@angular/core/testing';

import { EquationService } from './equation.service';

describe('EquationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EquationService = TestBed.get(EquationService);
    expect(service).toBeTruthy();
  });
});
