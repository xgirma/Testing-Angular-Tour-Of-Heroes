import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HeroService } from './hero.service';
import { Hero } from './hero';
import {HttpErrorResponse} from '@angular/common/http';

describe('HeroService', () => {
  let heroService: HeroService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeroService]
    });
    heroService = TestBed.get(HeroService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(heroService).toBeTruthy();
  });

  it(`should get heroes data`, () => {
    const mockHeroes: Hero[] = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' }
    ];
    heroService.getHeroes().subscribe(heroes => {
      expect(heroes.length).toEqual(3);
      expect(heroes[0].id).toEqual(11);
      expect(heroes[0].name).toEqual(`Dr Nice`);
    });
    const request = httpMock.expectOne( `api/heroes`, 'call to api');
    expect(request.request.method).toBe('GET');
    request.flush(mockHeroes);
  });

  // TODO add test for handleError
});
