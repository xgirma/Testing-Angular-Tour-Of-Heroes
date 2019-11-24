import { AppHeroes } from './heroes.po';

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

  // it(`should have name 'Windstorm'`, () => {
  //   expect(page.getName()).toEqual('name: Windstorm');
  // });

  it('should have editable hero name', async () => {
    await page.setName('Dr. Nice');
    expect(page.getTitle()).toEqual('DR. NICE Details');
   });
});
