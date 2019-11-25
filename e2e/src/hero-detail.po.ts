import { browser, by, element, ExpectedConditions as EC } from 'protractor';

export class AppHeroes {
  body = element(by.css('body'));
  title = element(by.css('app-hero-detail > div > h2'));
  id = element(by.css('app-heroes > div > div:nth-child(2)'));
  name = element(by.css('input'));

  navigateTo() {
    browser.get(browser.baseUrl);
    return browser.wait(EC.presenceOf(this.body), 5000) as Promise< void>;
  }

  getDetailTitle() {
    return this.title.getText() as Promise<string>;
  }

  getId() {
    return this.id.getText() as Promise<string>;
  }

  setName(name) {
    this.name.clear();
    return this.name.sendKeys(name) as Promise<any>;
  }
}
