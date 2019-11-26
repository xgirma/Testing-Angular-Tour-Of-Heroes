import { inject, TestBed } from '@angular/core/testing';

import { HeroService } from './hero.service';
// import { HEROES } from './mock-heroes';

describe('HeroService', () => {
  let heroService: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    heroService = TestBed.get(HeroService);
  });

  it('should be created', () => {
    expect(heroService).toBeTruthy();
  });

  // it('should have heroes', () => {
  //   expect(heroService.getHeroes()).toEqual(HEROES);
  // });

  // tslint:disable-next-line:no-shadowed-variable
  it(`get all heroes`, inject([HeroService], (heroService) => {
    heroService.getHeroes().subscribe(heroes => {
      expect(heroes.length).toEqual(10);
    });
  }));
});
