import { browser, by, element } from 'protractor';

export class BannerAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getBannerSize() {
      return element(by.all('app-root ul li')).getSize();
  }
}
