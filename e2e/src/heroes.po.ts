import { browser, by, element, ExpectedConditions as EC } from 'protractor';

export class AppHeroes {
  body = element(by.css('body'));
  title = element(by.css('app-heroes > h2'));
  detailTitle = element(by.css('app-heroes > div > h2'));
  id = element(by.css('app-heroes > div > div:nth-child(2)'));
  name = element(by.css('input'));
  list = element.all(by.css('.heroes > li'));

  navigateTo() {
    browser.get(browser.baseUrl);
    return browser.wait(EC.presenceOf(this.body), 5000) as Promise< void>;
  }

  getTitle() {
    return this.title.getText() as Promise<string>;
  }

  getDetailTitle() {
    return this.detailTitle.getText() as Promise<string>;
  }

  getId() {
    return this.id.getText() as Promise<string>;
  }

  setName(name) {
    this.name.clear();
    return this.name.sendKeys(name) as Promise<any>;
  }

  getHeroDetail(index) {
    return this.list.get(index).getText() as Promise<string>;
  }

  selectHero(index) {
    return this.list.get(index).click() as Promise<any>;
  }
}
