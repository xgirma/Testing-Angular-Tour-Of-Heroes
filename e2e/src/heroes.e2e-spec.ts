import { AppHeroes } from './heroes.po';

describe('AppHeroes', () => {
  let page: AppHeroes;

  beforeAll(() => {
    page = new AppHeroes();
    page.navigateTo();
  });

  it(`should have name 'Windstorm'`, () => {
    expect(page.getName()).toContain('Windstorm');
  });
});
