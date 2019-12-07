import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HeroService } from './hero.service';
import { MessageService } from './message.service';
import { Hero } from './hero';

describe('HeroService', () => {
  let heroService: HeroService;
  let messageService: MessageService;
  let httpMock: HttpTestingController;

  const mockHeroes: Hero[] = [
    { id: 11, name: 'Dr Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ HeroService, MessageService ]
    });
    heroService = TestBed.get(HeroService);
    messageService = TestBed.get(MessageService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(heroService).toBeTruthy();
  });

  it(`should get heroes`, () => {
    const handleErrorSpy = spyOn<any>(heroService, 'handleError').and.callThrough();
    const logSpy = spyOn<any>(heroService, 'log').and.callThrough();
    const addSpy = spyOn(messageService, 'add').and.callThrough();

    heroService.getHeroes().subscribe( (heroes: Hero[]) => {
      expect(heroes.length).toEqual(3);
      expect(heroes[0].id).toEqual(11);
      expect(heroes[0].name).toEqual(`Dr Nice`);
    });

    const request = httpMock.expectOne( `api/heroes`, 'call to getHeroes');
    expect(request.request.method).toBe('GET');
    request.flush(mockHeroes);

    expect(handleErrorSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(addSpy).toHaveBeenCalledTimes(1);
    expect(handleErrorSpy).toHaveBeenCalledWith('getHeroes', [  ]);
    expect(logSpy).toHaveBeenCalledWith('fetched heroes');
    expect(addSpy).toHaveBeenCalledWith('HeroService: fetched heroes');
  });

  it('should handle error gracefully: getHeroes', () => {
    const requestBody = 'Invalid request parameters';
    const requestOptions = { status: 404, statusText:  'Bad Request' };
    const handleErrorSpy = spyOn<any>(heroService, 'handleError').and.callThrough();
    const logSpy = spyOn<any>(heroService, 'log').and.callThrough();
    const addSpy = spyOn(messageService, 'add').and.callThrough();

    heroService.getHeroes().subscribe( (heroes: Hero[]) => {
      expect(heroes.length).toEqual(0);
    });

    const request = httpMock.expectOne( `api/heroes`, 'call to getHeroes');
    expect(request.request.method).toBe('GET');
    request.flush(requestBody, requestOptions);

    expect(handleErrorSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(addSpy).toHaveBeenCalledTimes(1);
    expect(handleErrorSpy).toHaveBeenCalledWith('getHeroes', [ ]);
    expect(logSpy).toHaveBeenCalledWith('getHeroes failed: Http failure response for api/heroes: 404 Bad Request');
    expect(addSpy).toHaveBeenCalledWith('HeroService: getHeroes failed: Http failure response for api/heroes: 404 Bad Request');
  });

  it(`should get hero`, () => {
    heroService.getHero(11).subscribe(hero => {
      expect(hero.id).toEqual(11);
      expect(hero.name).toEqual(`Dr Nice`);
    });

    const request = httpMock.expectOne( `api/heroes/11`, 'call to getHero');
    expect(request.request.method).toBe('GET');
    request.flush(mockHeroes[0]);
  });
});
