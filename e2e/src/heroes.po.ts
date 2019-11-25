import { browser, by, element, ExpectedConditions as EC } from 'protractor';

export class AppHeroes {
  body = element(by.css('body'));
  title = element.all(by.css('app-heroes > h2'));
  id = element.all(by.css('app-heroes > div'));
  name = element(by.css('input'));

  navigateTo() {
    browser.get(browser.baseUrl);
    return browser.wait(EC.presenceOf(this.body), 5000) as Promise< void>;
  }

  getTitle() {
    return this.title.get(1).getText() as Promise<any>;
  }

  getId() {
    return this.id.get(0).getText() as Promise<any>;
  }

  setName(name) {
    this.name.clear();
    return this.name.sendKeys(name) as Promise<any>;
  }
}
