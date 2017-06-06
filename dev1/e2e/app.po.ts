import { browser, by, element } from 'protractor';

export class Dev1Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('vhs-root h1')).getText();
  }
}
