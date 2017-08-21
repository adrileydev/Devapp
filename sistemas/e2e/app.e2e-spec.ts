import { SistemasPage } from './app.po';

describe('sistemas App', () => {
  let page: SistemasPage;

  beforeEach(() => {
    page = new SistemasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
