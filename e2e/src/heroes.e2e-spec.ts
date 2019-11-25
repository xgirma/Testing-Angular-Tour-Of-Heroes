import { AppHeroes } from './heroes.po';
import { HEROES } from '../mock-heroes';

describe('AppHeroes', () => {
  let page: AppHeroes;

  beforeAll(() => {
    page = new AppHeroes();
    page.navigateTo();
  });

  it(`should have title`, () => {
    expect(page.getTitle()).toEqual('WINDSTORM Details');
  });

  it(`should have id`, () => {
    expect(page.getId()).toEqual('id: 1');
  });

  it('should have editable hero name', async () => {
    await page.setName('Dr. Nice');
    expect(page.getTitle()).toEqual('DR. NICE Details');
   });

  it('should have a list of heroes', () => {
    HEROES.forEach((hero, index) => {
      expect(page.getHeroDetail(index)).toContain(hero.id);
      expect(page.getHeroDetail(index)).toContain(hero.name);
    });
  });
});
