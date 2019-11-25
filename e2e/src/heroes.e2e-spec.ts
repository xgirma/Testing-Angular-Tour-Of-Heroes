import { AppHeroes } from './heroes.po';
import { HEROES } from '../mock-heroes';

describe('AppHeroes', () => {
  let page: AppHeroes;

  beforeAll(() => {
    page = new AppHeroes();
    page.navigateTo();
    page.selectHero(0);
  });

  it('should have a list of heroes', () => {
    HEROES.forEach((hero, index) => {
      expect(page.getHeroDetail(index)).toContain(hero.id);
      expect(page.getHeroDetail(index)).toContain(hero.name);
    });
  });

  it(`should have title`, () => {
    expect(page.getTitle()).toEqual('My Heroes');
  });

  it('should have details title', () => {
    expect(page.getDetailTitle()).toEqual('DR NICE Details');
  });

  it(`should have id`, () => {
    expect(page.getId()).toEqual('id: 11');
  });

  it('should have editable hero name', async () => {
    await page.setName('Dr. Foo');
    expect(page.getDetailTitle()).toEqual('DR. FOO Details');
   });
});
