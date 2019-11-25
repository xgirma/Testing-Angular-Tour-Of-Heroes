import { AppHeroes } from './heroes.po';
import { HeroDetail } from './hero-detail.po';

describe('HeroDetail', () => {
  let appPage: AppHeroes;
  let heroDetailPage: HeroDetail;

  beforeAll(() => {
    appPage = new AppHeroes();
    heroDetailPage = new HeroDetail();
    appPage.navigateTo();
    appPage.selectHero(0);
  });

  it('should have title', () => {
    expect(heroDetailPage.getTitle()).toEqual('DR NICE Details');
  });

  it(`should have id`, () => {
    expect(heroDetailPage.getId()).toEqual('id: 11');
  });

  it('should have editable hero name', async () => {
    await heroDetailPage.setName('Dr. Foo');
    expect(heroDetailPage.getTitle()).toEqual('DR. FOO Details');
  });
});
