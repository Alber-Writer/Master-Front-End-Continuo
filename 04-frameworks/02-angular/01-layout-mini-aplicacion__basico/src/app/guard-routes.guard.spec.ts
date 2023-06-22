import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { guardRoutesGuard } from './guard-routes.guard';

describe('guarRoutesGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => guardRoutesGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
