import { TestBed } from '@angular/core/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getUser', () => {
    it('should return user', () => {
      const result = service.getUser('u1');
      expect(result).toEqual({username: 'u1', name: 'abc'});
    });
  });

});
