import { BannerAppPage } from './app.po';

describe('banner-app App', () => {
  let page: BannerAppPage;

  beforeEach(() => {
    page = new BannerAppPage();
  });

  it('should display size of banner as 640*360', () => {
      page.navigateTo();
      expect(page.getBannerSize()).toContain('123');
  });
});
